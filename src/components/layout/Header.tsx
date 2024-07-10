'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Fuison from 'public/images/logo-fusion.png';
import { useState } from 'react';

import Button from '@/components/buttons/Button';
import AuthModal from '@/components/modal/AuthModal';
import NextImage from '@/components/NextImage';
export default function Header() {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const changeOpenModal = () => {
    setOpenModal(!openModal);
  };
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.4,
          duration: 0.8,
          type: 'spring',
        }}
        className='sticky'
      >
        <nav className='sticky inset-x-0 top-0 z-10 w-full transition-all duration-300'>
          <div className='mx-auto flex max-w-screen-xl flex-wrap items-center justify-around px-8 py-4'>
            <Link
              href='https://flowbite.com/'
              className='flex items-center space-x-3 rtl:space-x-reverse'
            >
              <NextImage
                src={Fuison.src}
                className='h-8'
                alt='Fatamore Logo'
                height={Fuison.height}
                width={Fuison.width}
              />
              <p className='text-md self-center whitespace-nowrap dark:text-white'>
                Fusion
                <span className='text-md self-center whitespace-nowrap font-semibold dark:text-white'>
                  Craft
                </span>
              </p>
            </Link>
            <div className='flex space-x-3 rtl:space-x-reverse md:order-2 md:space-x-0'>
              <Button
                variant='primary'
                Click={changeOpenModal}
                className='rounded-md px-4 py-2 text-sm font-light'
              >
                Register
              </Button>
              <button
                data-collapse-toggle='navbar-sticky'
                type='button'
                className='inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden'
                aria-controls='navbar-sticky'
                aria-expanded='false'
              >
                <span className='sr-only'>Open main menu</span>
                <svg
                  className='h-5 w-5'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 17 14'
                >
                  <path
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M1 1h15M1 7h15M1 13h15'
                  />
                </svg>
              </button>
            </div>
            <div
              className='hidden w-full items-center justify-between md:order-1 md:flex md:w-auto'
              id='navbar-sticky'
            >
              <ul className='mt-4 flex flex-col rounded-lg border border-gray-100 p-4 font-medium rtl:space-x-reverse dark:border-gray-700 dark:bg-gray-800 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:p-0 md:dark:bg-gray-900'>
                <li>
                  <Link
                    href='/'
                    className='font-poppins font-light  text-gray-600 hover:text-gray-800'
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    href='/about'
                    className='font-poppins font-light text-gray-600 hover:text-gray-800'
                  >
                    Changelog
                  </Link>
                </li>
                <li>
                  <Link
                    href='/services'
                    className='font-poppins font-light  text-gray-600 hover:text-gray-800'
                  >
                    Roadmap
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </motion.div>

      <AuthModal isOpen={openModal} toggleModal={changeOpenModal} />
    </>
  );
}
