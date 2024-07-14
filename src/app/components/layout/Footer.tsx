import Fuison from 'public/images/logo-fusion.png';
import React from 'react';

import NextImage from '@/app/components/NextImage';

const Footer = () => {
  return (
    <footer className='bg-[#E8EBEF] dark:bg-gray-900'>
      <div className='mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8'>
        <div className='md:flex md:justify-between'>
          <div className='mb-6 md:mb-0'>
            <div className='mb-4 flex  gap-2 '>
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
            </div>

            <p className='font-poppins font-light text-gray-500'>
              Manage your complex stuff become easier and enjoy every awesome
              features.
            </p>
          </div>
          <div className='grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-6'>
            <div>
              <h2 className='mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white'>
                Features
              </h2>
              <ul className='font-medium text-gray-500 dark:text-gray-400'>
                <li className='mb-4'>
                  <a className='hover:underline'>Changelog</a>
                </li>
                <li className='mb-4'>
                  <a className='hover:underline'>Roadmap</a>
                </li>
                <li>
                  <a className='hover:underline'>Contact Us</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className='mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white'>
                Legal
              </h2>
              <ul className='font-medium text-gray-500 dark:text-gray-400'>
                <li className='mb-4'>
                  <a className='hover:underline'>Privacy Policy</a>
                </li>
                <li className='mb-4'>
                  <a className='hover:underline'>Terms Of Service</a>
                </li>
                <li>
                  <a className='hover:underline'>Terms & Conditions</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className='mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white'>
                More
              </h2>
              <ul className='font-medium text-gray-500 dark:text-gray-400'>
                <li className='mb-4'>
                  <a href='#' className='hover:underline'>
                    Instagram
                  </a>
                </li>
                <li className='mb-4'>
                  <a href='#' className='hover:underline'>
                    WhatsApp
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:underline'>
                    Email
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className='my-6 border-gray-200 dark:border-gray-700 sm:mx-auto lg:my-8' />
        <div className='text-center'>
          <span className='text-sm text-gray-500 dark:text-gray-400 sm:text-center'>
            © 2024{' '}
            <a href='https://flowbite.com/' className='hover:underline'>
              FusionCraft
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
