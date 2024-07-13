'use client';

import { Github, MoveRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import Google from 'public/images/igoogle.png';
import { useEffect, useState } from 'react';

import NextImage from '@/app/components/NextImage';

import { providerMap } from '../../lib/auth';

export default function SignInPage() {
  const router = useRouter();
  const [callbackUrl, setCallbackUrl] = useState('/');
  const [isOpen, setIsOpen] = useState(true);
  const [isShowIconHoverGoogle, setShowIconHoverGoogle] = useState(false);
  const [isShowIconHoverGithub, setShowIconHoverGithub] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const url = params.get('callbackUrl');
    if (url) {
      setCallbackUrl(url);
    }
  }, []);

  const handleSignIn = async (providerId: string) => {
    try {
      const result = await signIn(providerId, { redirect: false });
      if (result?.error) {
        router.push(`/auth/signin-error?error=${result.error}`);
      } else {
        router.push(callbackUrl);
      }
    } catch (error) {
      console.error('Error sign-in:', error);
      router.push(`/auth/signin-error?error=${error}`);
    }
  };

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div>
        <div className='fixed left-0 right-0 top-0 z-50 flex h-full w-full items-center justify-center overflow-y-auto bg-white'>
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
              <div className='flex flex-col gap-4 p-4 md:p-5'>
                {providerMap.map((provider) => (
                  <div
                    key={provider.id}
                    onClick={() => handleSignIn(provider.id)}
                    className='border-gray relative flex items-center justify-center gap-3 rounded-md border p-2 hover:cursor-pointer hover:bg-gray-100'
                    onMouseEnter={() =>
                      provider.id === 'google'
                        ? setShowIconHoverGoogle(true)
                        : setShowIconHoverGithub(true)
                    }
                    onMouseLeave={() =>
                      provider.id === 'google'
                        ? setShowIconHoverGoogle(false)
                        : setShowIconHoverGithub(false)
                    }
                  >
                    {provider.id === 'google' && (
                      <>
                        <NextImage
                          src={Google}
                          alt='google-icon'
                          width={25}
                          height={25}
                        />
                        <p className='text-sm font-medium'>
                          Continue with Google
                        </p>
                        <div
                          className={`absolute inset-y-0 right-0 transform p-2 transition-opacity duration-500 ${
                            isShowIconHoverGoogle ? 'opacity-100' : 'opacity-0'
                          }`}
                        >
                          <MoveRight className='text-gray-500' />
                        </div>
                      </>
                    )}
                    {provider.id === 'github' && (
                      <>
                        <Github />
                        <p className='text-sm font-medium'>
                          Continue with Github
                        </p>
                        <div
                          className={`absolute inset-y-0 right-0 transform p-2 transition-opacity duration-500 ${
                            isShowIconHoverGithub ? 'opacity-100' : 'opacity-0'
                          }`}
                        >
                          <MoveRight className='text-gray-500' />
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>
              <div className='flex flex-row items-center justify-center p-4'>
                <div className='mx-4 flex-grow border-t border-gray-300'></div>
                <p>Or</p>
                <div className='mx-4 flex-grow border-t border-gray-300'></div>
              </div>
              <div className='p-4 md:p-5'>
                <form
                  className='space-y-4'
                  onSubmit={(e) => {
                    e.preventDefault(); // Mencegah reload
                    handleSignIn('custom'); // Ganti dengan logic sesuai
                  }}
                >
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
      </div>
    </>
  );
}
