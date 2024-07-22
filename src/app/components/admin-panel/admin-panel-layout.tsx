'use client';

import { cn } from '@/lib/utils';
import { useSidebarToggle } from '@/hooks/use-sidebar-toggle';
import { useStore } from '@/hooks/use-store';

import { Navbar } from '@/app/components/admin-panel/navbar';
import { Sidebar } from '@/app/components/admin-panel/sidebar';

export default function AdminPanelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const sidebar = useStore(useSidebarToggle, (state) => state);

  if (!sidebar) return null;

  return (
    <>
      <Navbar />
      <div>
        <Sidebar />
        <main
          className={cn(
            'min-h-[calc(100vh_-_56px)] bg-zinc-50 transition-[margin-left] duration-300 ease-in-out dark:bg-zinc-900',
            sidebar?.isOpen === false ? 'lg:ml-[90px]' : 'lg:ml-72'
          )}
        >
          {children}
        </main>
      </div>
    </>
  );
}
