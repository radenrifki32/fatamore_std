import { Prisma } from '@prisma/client';
import { z } from 'zod';

import { publicProcedure, router } from '../trpc';
const idSchema = z.object({ id: z.string() });
const updateSchema = z.object({ id: z.string(), username: z.string() });
const createUserSchema = z.object({ id: z.string(), attributes: z.unknown() });

type UserAttributes = {
  username?: string;
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
  getUserById: publicProcedure.input(idSchema).query(async ({ input, ctx }) => {
    const checkUser = await ctx.prisma.user.findFirst({
      where: {
        externalId: input.id,
      },
    });
    if (
      !checkUser ||
      !checkUser.attributes ||
      typeof checkUser.attributes !== 'object'
    ) {
      return false;
    }
    const attributes = checkUser.attributes as UserAttributes;
    if (!attributes.username) {
      return false;
    }
    return true;
  }),
  updateUserById: publicProcedure
    .input(updateSchema)
    .mutation(async ({ input, ctx }) => {
      const { id, username } = input;
      const user = await ctx.prisma.user.findUnique({
        where: {
          externalId: id,
        },
      });

      if (!user) {
        throw new Error('User not found');
      }
      const updatedAttributes = {
        ...(user.attributes as Prisma.JsonObject),
        username: username,
      };

      await ctx.prisma.user.update({
        where: {
          externalId: id,
        },
        data: {
          attributes: updatedAttributes,
        },
      });
    }),
});
