import { createClerkClient, UserJSON } from '@clerk/backend';
import { Prisma } from '@prisma/client';
import { z } from 'zod';

import { protectedProcedure, publicProcedure, router } from '../trpc';
const clerkClient = createClerkClient({
  secretKey: process.env.CLERK_SECRET_KEY,
});
const updateSchema = z.object({ username: z.string() });
const createUserSchema = z.object({ id: z.string(), attributes: z.unknown() });

type PrismaUserAttributes = Prisma.UserCreateInput &
  Prisma.UserUncheckedCreateInput;
type UserWithJSONAttributes = Omit<PrismaUserAttributes, 'attributes'> & {
  attributes: Partial<UserJSON>;
};
type typeReturnGetUserById = {
  data: UserWithJSONAttributes | null;
};

export const UserRouter = router({
  userCreate: publicProcedure
    .input(createUserSchema)
    .mutation(async ({ input, ctx }) => {
      await ctx.prisma.user.upsert({
        where: { externalId: input.id },
        create: {
          externalId: input.id,
        },
        update: {
          attributes: input.attributes as Prisma.JsonObject,
        },
      });
    }),
  getUserById: protectedProcedure.query(
    async ({ ctx }): Promise<typeReturnGetUserById> => {
      console.log(ctx.user.id);
      const checkUser = await ctx.prisma.user.findUnique({
        where: {
          externalId: ctx.user?.id,
        },
      });
      if (checkUser?.isOnProgressFinish) {
        return { data: checkUser } as typeReturnGetUserById;
      }
      return { data: checkUser } as typeReturnGetUserById;
    }
  ),
  updateUserById: protectedProcedure
    .input(updateSchema)
    .mutation(async ({ input, ctx }) => {
      try {
        const { username } = input;
        console.log(ctx.user.id, 'user id');
        const result = await clerkClient.users.updateUser(ctx.user.id, {
          username,
        });
        return result;
      } catch (error) {
        console.log(error);
      }
    }),
});
