'use client';
import { motion } from 'framer-motion';

import MainPage from '@/app/components/home/Main';
import Header from '@/app/components/layout/Header';
import Layout from '@/app/components/layout/Layout';
export default function HomePage() {
  return (
    <Layout>
      <main className='relative -z-0 h-full w-full bg-[#F4F7F9]'>
        <div className='absolute -top-[65px] left-0 -z-10 h-full '>
          <motion.svg
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.8, ease: 'easeOut' }}
            width='250'
            height='750'
            viewBox='0 0 372 915'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M187.153 433.843C147.186 65.7228 45.7314 -8.30135 0 0.701592V915H372C327.037 907.998 227.12 801.963 187.153 433.843Z'
              fill='url(#paint0_linear_2312_194)'
            />
            <defs>
              <linearGradient
                id='paint0_linear_2312_194'
                x1='186'
                y1='0'
                x2='186'
                y2='915'
                gradientUnits='userSpaceOnUse'
              >
                <stop offset='0.496852' stopColor='#E0E9ED' />
                <stop offset='1' stopColor='#E0E9ED' stopOpacity='0' />
              </linearGradient>
            </defs>
          </motion.svg>
        </div>

        <div className='absolute -top-[65px] right-0 -z-10  h-full '>
          <motion.svg
            initial={{ opacity: 1, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.8, ease: 'easeOut' }}
            width='250'
            height='750'
            viewBox='0 0 372 915'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M184.847 433.843C224.814 65.7228 326.269 -8.30135 372 0.701592V915H0C44.9628 907.998 144.88 801.963 184.847 433.843Z'
              fill='url(#paint0_linear_2312_193)'
            />
            <defs>
              <linearGradient
                id='paint0_linear_2312_193'
                x1='186'
                y1='0'
                x2='186'
                y2='915'
                gradientUnits='userSpaceOnUse'
              >
                <stop offset='0.496852' stopColor='#E0E9ED' />
                <stop offset='1' stopColor='#E0E9ED' stopOpacity='0' />
              </linearGradient>
            </defs>
          </motion.svg>
        </div>
        <Header />
        <div className='w-100 h-100 mt-28'>
          <MainPage />
        </div>
      </main>
    </Layout>
  );
}
