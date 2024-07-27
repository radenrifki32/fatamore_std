import axios, { HttpStatusCode } from 'axios';

import { Country, CountryList, CurrencyList } from '@/lib/inferface/currency';
import { ResponseSucces } from '@/lib/inferface/response';
import { currenciesSchema } from '@/lib/shcema';

import { protectedProcedure, router } from '@/server/trpc';

export const currencyRouter = router({
  getCurrency: protectedProcedure.query(
    async (): Promise<ResponseSucces<CurrencyList>> => {
      const { data } = await axios.get<CountryList>(
        'https://restcountries.com/v3.1/all'
      );
      const mergedCurrencies: CurrencyList = data
        .filter((country) => country.currencies)
        .reduce((acc: CurrencyList, country: Country) => {
          if (country.currencies) {
            Object.entries(country.currencies).forEach(([code, currency]) => {
              acc[code] = currency;
            });
          }
          return acc;
        }, {});

      return {
        message: 'Success',
        status: HttpStatusCode.Ok,
        data: mergedCurrencies,
      };
    }
  ),
  insertUserCurrency: protectedProcedure
    .input(currenciesSchema)
    .mutation(async ({ ctx, input }): Promise<ResponseSucces<null>> => {
      try {
        await ctx.prisma.$transaction(async (prisma) => {
          if (!prisma) throw new Error('Prisma instance is not available');
          console.log(prisma);

          const currency = await prisma.currency.upsert({
            where: {
              code: input.code,
            },
            update: {},
            create: {
              name: input.name,
              code: input.code,
              symbol: input.symbol,
            },
          });
          const user = await prisma.user.findUnique({
            where: {
              externalId: ctx.user.id,
            },
          });
          if (!user) {
            throw new Error('User not found');
          }
          await prisma.userCurrency.upsert({
            where: {
              userId_currencyId: {
                userId: ctx.user.id,
                currencyId: currency.id,
              },
            },
            update: {
              currencyId: currency.id,
            },
            create: {
              userId: ctx.user.id,
              currencyId: currency.id,
            },
          });
        });
        return {
          message: 'Success Add You Currency',
          status: HttpStatusCode.Ok,
        };
      } catch (error) {
        let err = '';
        if (error instanceof Error) {
          err = error.message;
        }
        return {
          status: HttpStatusCode.InternalServerError,
          message: err,
        };
      }
    }),
});
