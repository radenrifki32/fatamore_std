import { motion } from 'framer-motion';
import { ChevronRight, ChevronUp } from 'lucide-react';
import { useState } from 'react';

import Button from '@/app/components/buttons/Button';

import DashboardSvg from '~/images/Dashboard';
interface iFeatures {
  title: string;
  text: string;
}
export default function Features() {
  const features: iFeatures[] = [
    {
      title: 'Effortless Task Tracking',
      text: 'Enables you to create, manage, and track your work schedules. You can set tasks, deadlines, and milestones. With notifications and reminders, This feature aids in efficient project planning and enhances productivity.',
    },
    {
      title: 'Financial Overview at Your Fingertips',
      text: 'Assists you in managing your finances. You can record income and expenses, and monitor cash flow. With detailed financial analysis and reports.',
    },
    {
      title: 'All files are connected',
      text: 'Facilitates you in searching for, collecting, and managing the resources you need. These can include documents, references, or other materials relevant to your projects or tasks. This feature ensures that all necessary information is easily accessible and well-organized.',
    },
  ];

  const [showTextFeature, setShowTextFeatures] = useState<number>(0);
  return (
    <div className='w-100 h-100 font-poppins container mx-auto flex  gap-20 px-10'>
      <div className='w-100 h-100 rounded-xl bg-[#EBEFFE]  pt-10'>
        <DashboardSvg />
      </div>
      <div className='h-100 relative w-full'>
        <div className='absolute bottom-5 left-1'>
          <Button
            variant='light'
            rightIcon={ChevronRight}
            className='font-poppins text-sm font-light'
          >
            Let's dive in
          </Button>
        </div>

        <div className='mb-10 w-1/4'>
          <p className='rounded-lg bg-[#E8EBEF] px-2 text-center text-[10px] font-light tracking-widest '>
            Our Best Features 🔥
          </p>
        </div>
        <div className='font-headNow flex h-full w-full flex-col gap-10 font-light'>
          {features.map((feature, index) => {
            return (
              <div
                key={index}
                className='cursor-pointer'
                onMouseEnter={() => setShowTextFeatures(index + 1)}
                onMouseLeave={() => setShowTextFeatures(0)}
              >
                <div className='flex cursor-pointer items-center  justify-between'>
                  <div>
                    <h2 className='font-headNow text-md font-light'>
                      {feature.title}
                    </h2>
                  </div>
                  <motion.div
                    animate={{
                      rotate: showTextFeature == index + 1 ? 0 : 180,
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <ChevronUp size={25} />
                  </motion.div>
                </div>
                <motion.div
                  initial={false}
                  animate={{
                    height: showTextFeature == index + 1 ? 'auto' : 0,
                    opacity: showTextFeature == index + 1 ? 1 : 0,
                  }}
                  transition={{ duration: 0.6 }}
                  className='overflow-hidden'
                >
                  {showTextFeature == index + 1 && (
                    <motion.p
                      initial={{ y: -20, opacity: 0.7 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.6 }}
                      className='font-poppins mt-4 text-sm text-[#636669]'
                    >
                      {feature.text}
                    </motion.p>
                  )}
                </motion.div>
                <div className='mt-4 flex h-[1px] w-full'>
                  <motion.div
                    className='h-full w-1/2'
                    animate={{
                      backgroundColor:
                        showTextFeature == index + 1 ? 'blue' : '#DDDEE0',
                    }}
                    transition={{ duration: 0.6 }}
                  />
                  <motion.div
                    className='h-full w-1/2'
                    animate={{
                      backgroundColor: '#DDDEE0',
                    }}
                    transition={{ duration: 0.6 }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
