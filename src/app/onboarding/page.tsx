'use client';
import { SignedIn, UserButton } from '@clerk/clerk-react';
import { useAuth } from '@clerk/nextjs';
import React from 'react';

import { trpc } from '@/app/_trpc/client';
export default function OnBoarding() {
  const { userId } = useAuth();
  const updateUsername = trpc.user.updateUserById.useMutation();
  const handleUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    await updateUsername.mutateAsync({
      id: userId as string,
      username: formData.get('username') as string,
    });
  };

  return (
    <div>
      <SignedIn>
        <UserButton />
      </SignedIn>
      <form onSubmit={(e) => handleUpdate(e)}>
        <input name='username' />
      </form>
    </div>
  );
}
