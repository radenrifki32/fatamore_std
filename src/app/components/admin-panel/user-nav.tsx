'use client';

import { UserButton } from '@clerk/nextjs';

import { DropdownMenu } from '@/app/components/ui/dropdown-menu';

export function UserNav() {
  return (
    <DropdownMenu>
      <UserButton />
    </DropdownMenu>
  );
}
