'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { ArrowRight, FolderClosed, FolderPlus } from 'lucide-react';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next-nprogress-bar';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import { Currency } from '@/lib/inferface/currency';
import {
  createProjectSchema,
  formSchema,
  TCreateProjectSchema,
  TFormSchema,
} from '@/lib/shcema';

import { trpc } from '@/app/_trpc/client';
import NextImage from '@/app/components/NextImage';
import { Button } from '@/app/components/ui/button';
import { Card } from '@/app/components/ui/card';
import CurrencyListComponent from '@/app/components/ui/combobox';
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
import { useToast } from '@/app/components/ui/use-toast';

export default function OnBoarding() {
  const [progress, setProgress] = useState<number>(20);
  const [createProject, setCreateProject] = useState<string>('');
  const [currency, setCurrency] = useState<Currency>({
    name: '',
    symbol: '',
    code: '',
  });

  const router = useRouter();
  const searchParams = useSearchParams();
  const { toast } = useToast();
  const scene = searchParams.get('scene');
  const form = useForm<TFormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
    },
  });
  const createProjectForm = useForm<TCreateProjectSchema>({
    resolver: zodResolver(createProjectSchema),
    defaultValues: {
      projectDesription: '',
      projectname: '',
      projectTargetUser: '',
    },
  });
  const updateUsername = trpc.user.updateUserById.useMutation();
  const createNewProjectMutation = trpc.project.createProject.useMutation();
  const addCurrencyUserMutation =
    trpc.currency.insertUserCurrency.useMutation();
  const { data: userData, refetch: refetchUser } =
    trpc.user.getUserById.useQuery(undefined, {
      enabled: false,
    });

  const { data: currencyData, refetch: refetchCurrency } =
    trpc.currency.getCurrency.useQuery(undefined, {
      enabled: false,
    });

  async function onSubmit(values: TFormSchema) {
    try {
      await updateUsername.mutateAsync({
        username: values.username,
      });
      const response = await refetchUser();
      if (response.status === 'success') {
        setProgress((prev) => prev + 20);
        router.push('/onboarding?scene=project');
      }
    } catch (error) {
      console.log(error);
      toast({
        title: 'error',
        variant: 'destructive',
      });
    }
  }
  async function onCreateNewProject(values: TCreateProjectSchema) {
    try {
      const { projectname, projectDesription, projectTargetUser } = values;
      const response = await createNewProjectMutation.mutateAsync({
        projectname,
        projectDesription,
        projectTargetUser,
      });
      if (response.status == 200) {
        setProgress((prev) => prev + 20);
        router.push('/onboarding?scene=currency');
      }
    } catch (error) {
      console.log(error);
    }
  }
  function SelectProject(project: string) {
    setCreateProject(project);
  }
  function createNewProject() {
    if (createProject === 'new') {
      setProgress((prev) => prev + 20);
      router.push('/onboarding?scene=add-project');
    }
  }
  async function addCurrencyUser() {
    const response = await addCurrencyUserMutation.mutateAsync({
      code: currency.code as string,
      name: currency.name,
      symbol: currency.symbol,
    });
    if (response.status === 200) {
      setProgress((prev) => prev + 20);
      router.push('/onboarding?scene=finish-onboarding');
    }
  }
  function goToDahboard() {
    router.push('/projects');
  }
  useEffect(() => {
    if (scene == 'currency') {
      refetchCurrency();
    } else if (scene === 'project') {
      refetchUser();
    }
  }, [refetchUser, scene, refetchCurrency]);

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
        if (scene === 'project') {
          return (
            <div className='flex h-full w-full flex-col items-center justify-center bg-[#EEEEEE]'>
              <h2 className=' py-4  text-2xl font-bold'>
                Hi, {userData?.data?.attributes?.username} Let’s get started 😄
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
        } else if (scene === 'add-project') {
          return (
            <div className='mx-auto flex h-full w-1/3 flex-col items-center justify-center '>
              <h1 className='font-poppins py-4 text-2xl font-bold'>
                Tell us more about your project
              </h1>
              <h2 className='font-poppins text-md font-light'>
                Can you provide us more information about your project?
              </h2>
              <Form {...createProjectForm}>
                <form
                  onSubmit={createProjectForm.handleSubmit(onCreateNewProject)}
                  className='my-10 w-full'
                >
                  <FormField
                    control={createProjectForm.control}
                    name='projectname'
                    render={({ field }) => (
                      <FormItem className='mb-8 flex flex-col'>
                        <FormLabel className='font-poppins font-sm  font-extralight'>
                          Project Name
                        </FormLabel>
                        <FormControl>
                          <Input placeholder='The Roro Jongrang' {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={createProjectForm.control}
                    name='projectDesription'
                    render={({ field }) => (
                      <FormItem className='mb-8 flex flex-col'>
                        <FormLabel className='font-poppins font-sm  font-extralight'>
                          Description
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder='an app help track timeline'
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={createProjectForm.control}
                    name='projectTargetUser'
                    render={({ field }) => (
                      <FormItem className='mb-8 flex flex-col'>
                        <FormLabel className='font-poppins font-sm  font-extralight'>
                          Target User(s)
                        </FormLabel>
                        <FormControl>
                          <Input placeholder='budak corporate' {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type='submit'
                    className='mt-10 flex w-full items-center justify-between'
                  >
                    <div className='flex-1 text-center'>Continue</div>
                    <ArrowRight className='ml-2' />
                  </Button>
                </form>
              </Form>
            </div>
          );
        } else if (scene === 'currency') {
          return (
            <div className='mx-auto flex h-full w-1/2 flex-col items-center justify-center bg-[#EEEEEE]'>
              <p className='font-poppins py-4 text-center text-xl font-bold'>
                Chose your currency{' '}
              </p>
              <p className='font-poppins mb-4 text-sm font-light'>
                What currency will you be using?
              </p>
              <CurrencyListComponent
                data={currencyData?.data}
                value={currency}
                setValue={setCurrency}
              />
              <Button
                onClick={addCurrencyUser}
                className='mt-10 flex w-2/3 items-center justify-between'
              >
                <div className='flex-1 text-center'>Continue</div>
                <ArrowRight className='ml-2' />
              </Button>
            </div>
          );
        } else if (scene == 'finish-onboarding') {
          return (
            <div className='mx-auto flex h-full w-1/2 flex-col items-center justify-center bg-[#EEEEEE]'>
              <p className='font-poppins py-4 text-center text-xl font-bold'>
                Congratulations 🎉
              </p>
              <p className='font-poppins mb-4 text-sm font-light'>
                You have computed the onboarding process!
              </p>
              <Button
                onClick={goToDahboard}
                className='mt-4 flex w-2/3 items-center '
              >
                <div className='text-center'>Go to Dashboard</div>
                <ArrowRight className='ml-2' />
              </Button>
            </div>
          );
        }
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
                  <div className='flex-1 text-center'>Continue {scene}</div>
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
