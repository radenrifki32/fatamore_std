import { motion } from 'framer-motion';
import { Folder, LucideIcon, MessageSquareMore, Users } from 'lucide-react';
import React from 'react';

const dataItemMarque: ItemMarque[] = [
  {
    title: 'Collections',
    icon: Folder,
  },
  {
    title: 'In-app messaging',
    icon: MessageSquareMore,
  },
  {
    title: 'Collaboration',
    icon: Users,
  },
];

interface ItemMarque {
  title: string;
  icon: LucideIcon;
}

const Marquee = () => {
  return (
    <div className='marquee-container flex items-center '>
      <div className=' flex'>
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: '-100%' }}
          transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
          className='flex shrink-0'
        >
          {dataItemMarque.map((item, index) => (
            <div key={index} className='mx-10'>
              <div className='flex items-center gap-3'>
                <item.icon size='28' className='text-[#979CA2]' />
                <span className='font-poppins text-md font-light text-[#979CA2]'>
                  {item.title}
                </span>
              </div>
            </div>
          ))}
        </motion.div>
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: '-100%' }}
          transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
          className='flex shrink-0'
        >
          {dataItemMarque.map((item, index) => (
            <div key={index} className='mx-10'>
              <div className='flex items-center gap-3 '>
                <item.icon size='28' className='text-[#979CA2]' />
                <span className='font-poppins text-md font-light text-[#979CA2]'>
                  {item.title}
                </span>
              </div>
            </div>
          ))}
        </motion.div>
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: '-100%' }}
          transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
          className='flex shrink-0'
        >
          {dataItemMarque.map((item, index) => (
            <div key={index} className='mx-10'>
              <div className='flex items-center gap-3 '>
                <item.icon size='28' className='text-[#979CA2]' />
                <span className='font-poppins text-md font-light text-[#979CA2]'>
                  {item.title}
                </span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Marquee;
