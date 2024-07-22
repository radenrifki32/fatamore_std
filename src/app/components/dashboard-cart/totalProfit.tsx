'use client';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/app/components/ui/card';

export default function TotalProfit() {
  return (
    <Card className='w-full'>
      <CardHeader className='flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row'>
        <div className='flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6'>
          <CardTitle>Profit</CardTitle>
        </div>
      </CardHeader>
      <CardContent className='px-2 sm:p-6'>
        <div className='w-1/2'></div>
      </CardContent>
    </Card>
  );
}
