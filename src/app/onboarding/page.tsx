'use client';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next-nprogress-bar';
import FusionLogo from 'public/images/logo-fusion.png';
import React, { useEffect, useState } from 'react';

import { trpc } from '@/app/_trpc/client';
import Button from '@/app/components/buttons/Button';
export default function OnBoarding() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [username, setUsername] = useState<string>('');
  const updateUsername = trpc.user.updateUserById.useMutation();
  const { data, refetch } = trpc.user.getUserById.useQuery(undefined, {
    enabled: false,
  });
  const changeUsername = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await updateUsername.mutateAsync({
      username: username,
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
      <div className='relative mt-16 flex items-center'>
        <Image
          src={data?.data?.attributes?.image_url as string}
          alt='image'
          height={150}
          width={150}
          className='absolute right-20 rounded-full '
        />
        <Image
          src={FusionLogo.src}
          height={150}
          width={150}
          alt='image-fusion'
          objectFit='cover'
        />
      </div>
      {/* <SignedIn>
        <UserButton />
      </SignedIn> */}
      <div className='items-center justify-center'>
        <form onSubmit={(e) => changeUsername(e)}>
          <input
            required
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setUsername(e.target.value)
            }
            name='username'
          />
          <Button type='submit' variant='primary'>
            Click
          </Button>
        </form>
      </div>
    </div>
  );
}
