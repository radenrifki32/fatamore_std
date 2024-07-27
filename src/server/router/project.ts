import { Project } from '@prisma/client';

import { ResponseSucces } from '@/lib/inferface/response';
import { createProjectSchema } from '@/lib/shcema';

import { protectedProcedure, router } from '@/server/trpc';
export const ProjectRouter = router({
  createProject: protectedProcedure
    .input(createProjectSchema)
    .mutation(async ({ ctx, input }): Promise<ResponseSucces<Project>> => {
      const transactionProject = await ctx.prisma.$transaction(
        async (prisma) => {
          const project = await ctx.prisma.project.create({
            data: {
              project_name: input.projectname,
              project_description: input.projectDesription,
              project_target: input.projectTargetUser,
              created_by: ctx.user.id,
              user: {
                connect: {
                  externalId: ctx.user.id,
                },
              },
            },
          });
          await prisma.projectMember.create({
            data: {
              project_id: project.id,
              user_id: ctx.user.id,
            },
          });
          return project;
        }
      );

      return {
        message: `Success Create New Project ${input.projectname}`,
        status: 200,
        data: transactionProject,
      };
    }),
});
