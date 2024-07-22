'use client';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next-nprogress-bar';
import React, { useEffect } from 'react';

import { trpc } from '@/app/_trpc/client';
import Button from '@/app/components/buttons/Button';
export default function OnBoarding() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const updateUsername = trpc.user.updateUserById.useMutation();
  const { data, refetch } = trpc.user.getUserById.useQuery(undefined, {
    enabled: false,
  });
  const changeUsername = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const username = new FormData().get('username');
    await updateUsername.mutateAsync({
      username: username as string,
    });
    const response = await refetch();
    if (response.status === 'success') {
      router.push('/onboarding?scene=project');
    }
  };

  useEffect(() => {
    refetch();
  }, [refetch]);
  if (searchParams.get('scene') == 'project') {
    return <div>{data?.data?.attributes?.username}</div>;
  }
  return (
    <div className='flex h-screen w-full flex-col items-center  bg-[#EEEEEE]'>
      <div className='relative mt-16 flex items-center'></div>
      {/* <SignedIn>
        <UserButton />
      </SignedIn> */}
      <div className='items-center justify-center'>
        <form onSubmit={(e) => changeUsername(e)}>
          <input required name='username' />
          <Button type='submit' variant='primary'>
            Click
          </Button>
        </form>
      </div>
    </div>
  );
}
