import { MenuIcon, PanelsTopLeft } from 'lucide-react';
import Link from 'next/link';

import { Menu } from '@/app/components/admin-panel/menu';
import { Button } from '@/app/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from '@/app/components/ui/sheet';

export function SheetMenu() {
  return (
    <Sheet>
      <SheetTrigger className='lg:hidden' asChild>
        <Button className='h-8' variant='outline' size='icon'>
          <MenuIcon size={20} />
        </Button>
      </SheetTrigger>
      <SheetContent className='flex h-full flex-col px-3 sm:w-72' side='left'>
        <SheetHeader>
          <Button
            className='flex items-center justify-center pb-2 pt-1'
            variant='link'
            asChild
          >
            <Link href='/dashboard' className='flex items-center gap-2'>
              <PanelsTopLeft className='mr-1 h-6 w-6' />
              <h1 className='text-lg font-bold'>Fusion Craft</h1>
            </Link>
          </Button>
        </SheetHeader>
        <Menu isOpen />
      </SheetContent>
    </Sheet>
  );
}
