'use client';
import { Navbar } from '@/app/components/admin-panel/navbar';

export default function AdminPanelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
