import { z } from 'zod';
export const createProjectSchema = z.object({
  projectname: z
    .string()
    .min(2, {
      message: "Project Name Must be 2 Character's",
    })
    .max(20, {
      message: "Project Name To long 20 Character's",
    }),
  projectDesription: z.string().min(10).max(100),
  projectTargetUser: z.string(),
});

export const formSchema = z.object({
  username: z
    .string()
    .min(2, {
      message: 'Username must be at least 2 characters.',
    })
    .max(100, {
      message: 'Username must be at least 100 characters.',
    }),
});

export const currenciesSchema = z.object({
  code: z.string(),
  name: z.string(),
  symbol: z.string(),
});

export type TFormSchema = z.infer<typeof formSchema>;
export type TCreateProjectSchema = z.infer<typeof createProjectSchema>;
