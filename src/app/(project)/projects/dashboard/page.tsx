import Link from 'next/link';

import { ContentLayout } from '@/app/components/admin-panel/content-layout';
import DashboardContent from '@/app/components/dashboard-cart/lineChart';
import TotalProfit from '@/app/components/dashboard-cart/totalProfit';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/app/components/ui/breadcrumb';

export default function DashboardPage() {
  return (
    <ContentLayout title='Dashboard'>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href='/'>Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Dashboard</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className='my-10 flex items-center'>
        <div>
          <TotalProfit />
        </div>
        <div></div>
      </div>
      <DashboardContent />
    </ContentLayout>
  );
}
