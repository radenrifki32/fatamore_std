import Link from 'next/link';

import { cn } from '@/lib/utils';
import { useSidebarToggle } from '@/hooks/use-sidebar-toggle';
import { useStore } from '@/hooks/use-store';

import { Menu } from '@/app/components/admin-panel/menu';
import { SidebarToggle } from '@/app/components/admin-panel/sidebar-toggle';
import NextImage from '@/app/components/NextImage';
import { Button } from '@/app/components/ui/button';

export function Sidebar() {
  const sidebar = useStore(useSidebarToggle, (state) => state);

  if (!sidebar) return null;

  return (
    <aside
      className={cn(
        'fixed left-0 top-10 z-20 h-screen -translate-x-full transition-[width] duration-300 ease-in-out lg:translate-x-0',
        sidebar?.isOpen === false ? 'w-[90px]' : 'w-72'
      )}
    >
      <SidebarToggle isOpen={sidebar?.isOpen} setIsOpen={sidebar?.setIsOpen} />
      <div className='relative mt-10 flex h-full flex-col overflow-y-auto px-3 py-4 shadow-md dark:shadow-zinc-800'>
        <Button
          className={cn(
            'mb-1 transition-transform duration-300 ease-in-out',
            sidebar?.isOpen === false ? 'translate-x-1' : 'translate-x-0'
          )}
          variant='link'
          asChild
        >
          <Link href='/dashboard' className='flex items-center gap-2'>
            <NextImage
              src='/images/logo-fusion.png'
              height={100}
              width={100}
              alt='Fusion logo'
              className='mr-1 h-6 w-6'
            />
            <h1
              className={cn(
                'whitespace-nowrap text-lg font-medium transition-[transform,opacity,display] duration-300 ease-in-out',
                sidebar?.isOpen === false
                  ? 'hidden -translate-x-96 opacity-0'
                  : 'translate-x-0 opacity-100'
              )}
            >
              Fusion <span className='font-bold'>Craft</span>
            </h1>
          </Link>
        </Button>
        <div className='flex items-center justify-center'>
          <p
            className={cn(
              'font-poppins whitespace-nowrap text-lg font-light transition-[transform,opacity,display] duration-300 ease-in-out',
              sidebar?.isOpen === false
                ? 'hidden -translate-x-96 opacity-0'
                : 'translate-x-0 opacity-100'
            )}
          >
            Connect Become One
          </p>
        </div>
        <Menu isOpen={sidebar?.isOpen} />
      </div>
    </aside>
  );
}
