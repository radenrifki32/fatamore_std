import { Github, MoveRight } from 'lucide-react';
import Google from 'public/images/igoogle.png';
import { useState } from 'react';

import NextImage from '@/components/NextImage';
type AuthModalProps = {
  isOpen: boolean;
  toggleModal: () => void;
};

export default function AuthModal({ isOpen, toggleModal }: AuthModalProps) {
  const [isShowIconHoverGoogle, setisShowIconHoverGoogle] =
    useState<boolean>(false);
  const [isShowIconHoverGithub, setisShowIconHoverGoogleGithub] =
    useState<boolean>(false);

  const onShowIconRight = (isGoogle: boolean) => {
    isGoogle
      ? setisShowIconHoverGoogle(true)
      : setisShowIconHoverGoogleGithub(true);
  };
  const onLeaveIconRigth = (isGoogle: boolean) => {
    isGoogle
      ? setisShowIconHoverGoogle(false)
      : setisShowIconHoverGoogleGithub(false);
  };
  return (
    <>
      {isOpen && (
        <div className='fixed left-0 right-0 top-0 z-50 flex h-full w-full items-center justify-center overflow-y-auto bg-black bg-opacity-50'>
          <div className='relative max-h-full w-full max-w-md p-4'>
            <div className='relative rounded-lg bg-white shadow dark:bg-gray-700'>
              <div className='flex items-center justify-between rounded-t border-b p-4 dark:border-gray-600 md:p-5'>
                <div className='flex flex-col gap-2'>
                  <h3 className='text-xl font-semibold text-gray-900 dark:text-white'>
                    Sign in
                  </h3>
                  <p className='text-sm font-medium text-gray-500 dark:text-white'>
                    to continue to Fatamore
                  </p>
                </div>

                <button
                  type='button'
                  onClick={toggleModal}
                  className='end-2.5 ms-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white'
                >
                  <svg
                    className='h-3 w-3'
                    aria-hidden='true'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 14 14'
                  >
                    <path
                      stroke='currentColor'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6'
                    />
                  </svg>
                  <span className='sr-only'>Close modal</span>
                </button>
              </div>
              <div className=' flex flex-col gap-4 p-4 md:p-5'>
                <div
                  className='border-gray relative flex items-center justify-center gap-3 rounded-md border p-2 hover:cursor-pointer hover:bg-gray-100'
                  onMouseEnter={() => onShowIconRight(true)}
                  onMouseLeave={() => onLeaveIconRigth(true)}
                >
                  <NextImage
                    src={Google}
                    alt='google-icon'
                    width={25}
                    height={25}
                  />
                  <p className='text-sm font-medium'>Continue with Google</p>
                  <div
                    className={`absolute inset-y-0 right-0 transform p-2 transition-opacity duration-500 ${
                      isShowIconHoverGoogle ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <MoveRight className='text-gray-500' />
                  </div>
                </div>

                <div
                  className='border-gray relative flex items-center justify-center gap-3 rounded-md border p-2 hover:cursor-pointer hover:bg-gray-100'
                  onMouseEnter={() => onShowIconRight(false)}
                  onMouseLeave={() => onLeaveIconRigth(false)}
                >
                  <Github />
                  <p className='text-sm font-medium'>Continue with Github</p>
                  <div
                    className={`absolute inset-y-0 right-0 transform p-2 transition-opacity duration-500 ${
                      isShowIconHoverGithub ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <MoveRight className='text-gray-500' />
                  </div>
                </div>
              </div>
              <div className='flex flex-row items-center justify-center p-4'>
                <div className='mx-4 flex-grow border-t border-gray-300'></div>
                <p>Or</p>
                <div className='mx-4 flex-grow border-t border-gray-300'></div>
              </div>
              <div className='p-4 md:p-5'>
                <form className='space-y-4' action='#'>
                  <div>
                    <label
                      htmlFor='email'
                      className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'
                    >
                      Your email
                    </label>
                    <input
                      type='email'
                      name='email'
                      id='email'
                      className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400'
                      placeholder='name@company.com'
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor='password'
                      className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'
                    >
                      Your password
                    </label>
                    <input
                      type='password'
                      name='password'
                      id='password'
                      placeholder='••••••••'
                      className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400'
                      required
                    />
                  </div>
                  <div className='flex justify-between'>
                    <div className='flex items-start'>
                      <div className='flex h-5 items-center'>
                        <input
                          id='remember'
                          type='checkbox'
                          value=''
                          className='focus:ring-3 h-4 w-4 rounded border border-gray-300 bg-gray-50 focus:ring-blue-300 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-800 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-800'
                          required
                        />
                      </div>
                      <label
                        htmlFor='remember'
                        className='ms-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                      >
                        Remember me
                      </label>
                    </div>
                    <a
                      href='#'
                      className='text-sm text-blue-700 hover:underline dark:text-blue-500'
                    >
                      Lost Password?
                    </a>
                  </div>
                  <button
                    type='submit'
                    className='w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                  >
                    Login to your account
                  </button>
                  <div className='text-sm font-medium text-gray-500 dark:text-gray-300'>
                    Not registered?{' '}
                    <a
                      href='#'
                      className='text-blue-700 hover:underline dark:text-blue-500'
                    >
                      Create account
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
