import AdminPanelLayout from '@/app/components/admin-panel/admin-panel-layout';

export default function DemoLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <AdminPanelLayout>{children}</AdminPanelLayout>;
}
