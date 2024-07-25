'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { ArrowRight, FolderClosed, FolderPlus } from 'lucide-react';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next-nprogress-bar';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { trpc } from '@/app/_trpc/client';
import NextImage from '@/app/components/NextImage';
import { Button } from '@/app/components/ui/button';
import { Card } from '@/app/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/app/components/ui/form';
import { Input } from '@/app/components/ui/input';
import { Progress } from '@/app/components/ui/progress';
export default function OnBoarding() {
  const [progress, setProgress] = useState<number>(0);
  const [createProject, setCreateProject] = useState<string>('');
  const router = useRouter();
  const searchParams = useSearchParams();
  const formSchema = z.object({
    username: z
      .string()
      .min(2, {
        message: 'Username must be at least 2 characters.',
      })
      .max(100, {
        message: 'Username must be at least 100 characters.',
      }),
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
    },
  });
  const updateUsername = trpc.user.updateUserById.useMutation();
  const { data, refetch } = trpc.user.getUserById.useQuery(undefined, {
    enabled: false,
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      await updateUsername.mutateAsync({
        username: values.username,
      });
      const response = await refetch();
      if (response.status === 'success') {
        setProgress((prev) => prev + 30);
        router.push('/onboarding?scene=project');
      }
    } catch (error) {
      console.log(error);
    }
  }
  const SelectProject = (project: string) => {
    setCreateProject(project);
  };
  const createNewProject = () => {
    if (createProject === 'new') {
      router.push('/onboarding?scene=add-project');
    }
  };
  useEffect(() => {
    refetch();
  }, [refetch]);

  return (
    <div className='h-screen w-full overflow-hidden bg-[#EEEEEE]'>
      <Progress value={progress} className='w-full' />
      <div className='container flex h-10 items-center gap-2 pt-10'>
        <NextImage
          src='/images/logo-fusion.png'
          alt='logo'
          height={30}
          width={30}
        />
        <p className='font-poppins'>
          Fusion <span className='font-bold'>Craft</span>
        </p>
      </div>
      {(() => {
        const scene = searchParams.get('scene');
        if (scene === 'project') {
          return (
            <div className='flex h-full w-full flex-col items-center justify-center bg-[#EEEEEE]'>
              <h2 className=' py-4  text-2xl font-bold font-medium'>
                Hi, {data?.data?.attributes?.username} Let’s get started 😄
              </h2>
              <p className='font-poppins  text-sm font-light'>
                Do your want to create a new project or add an existing one?
              </p>
              <div className='my-4 flex  w-1/2 gap-4'>
                <Card
                  className='h-[200px] w-1/2 cursor-pointer'
                  onClick={() => SelectProject('new')}
                >
                  <div
                    className={`flex h-full w-full flex-col items-center justify-center gap-8  ${
                      createProject === 'new' &&
                      'rounded-xl border-2 border-[#2668E8] '
                    } `}
                  >
                    <FolderPlus />
                    <h1 className='font-poppins font-semibold'>
                      Create a new project
                    </h1>
                    <p className='font-poppins font-light'>
                      Start from scratch.
                    </p>
                  </div>
                </Card>
                <Card
                  className='h-[200px] w-1/2 cursor-pointer'
                  onClick={() => SelectProject('existing')}
                >
                  <div
                    className={`flex h-full w-full flex-col items-center justify-center gap-8  ${
                      createProject === 'existing' &&
                      'rounded-xl border-2 border-[#2668E8] '
                    } `}
                  >
                    <FolderClosed />
                    <h1 className='font-poppins font-semibold'>
                      I have a project already
                    </h1>
                    <p className='font-poppins font-light'>
                      Add an existing project.
                    </p>
                  </div>
                </Card>
              </div>
              <Button
                onClick={createNewProject}
                type='submit'
                className='mt-4 flex w-1/4 items-center justify-center'
              >
                <div className='text-center'>Continue</div>
                <ArrowRight className='ml-2' />
              </Button>
            </div>
          );
        }
        // Tambahkan kondisi lain di sini
        // if (scene === 'anotherCondition') {
        //   return <AnotherComponent />;
        // }
        return (
          <div className='flex h-full w-full flex-col items-center justify-center bg-[#EEEEEE]'>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className='mx-auto w-1/5 space-y-8'
              >
                <p className='font-poppins text-center text-xl font-bold'>
                  Welcome to Fusioncraft! We’ll help you get set up 👋🏼
                </p>
                <FormField
                  control={form.control}
                  name='username'
                  render={({ field }) => (
                    <FormItem className='flex flex-col items-center'>
                      <FormLabel className='font-poppins font-sm text-center font-extralight'>
                        What’s your Name?
                      </FormLabel>
                      <FormControl>
                        <Input placeholder='John Dea' {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type='submit'
                  className='flex w-full items-center justify-between'
                >
                  <div className='flex-1 text-center'>Continue</div>
                  <ArrowRight className='ml-2' />
                </Button>
              </form>
            </Form>
          </div>
        );
      })()}
    </div>
  );
}
