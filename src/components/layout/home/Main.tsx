'use client';
import { motion, useAnimation, Variants } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import AgileImage from 'public/images/Agile-management-system-on-laptop.png';
import clockImage from 'public/images/clock.png';
import timeManagement from 'public/images/flexible-smartphone-interface-with-checklist.png';
import React from 'react';

import DonutSVG from '@/components/layout/home/donut';
import Marquee from '@/components/layout/home/Parralax';
import WhyFusion from '@/components/layout/home/WhyFusion';
import NextImage from '@/components/NextImage';

export default function MainPage() {
  const variants: Variants = {
    hover: {
      y: -30,
      skewX: 2,
      skewY: 2,
      transition: { duration: 0.3 },
      scale: 1.1,
      rotateX: 30,
    },
    initial: {
      y: 0,
      skewX: 0,
      skewY: 0,
      scale: 1,
      rotateX: 0,
    },
  };

  const variantHearRate: Variants = {
    hover: {
      scale: 1.1,
      rotate: 360,
      transition: { duration: 0.7, repeat: Infinity },
    },
    initial: {
      scale: 1,
      rotate: 0,
      transition: { duration: 1, delay: 0.4 },
    },
  };

  const controls = useAnimation();
  function handleMouseEnterControls() {
    controls.start('hover');
  }

  function handleMouseLeaveControls() {
    controls.start('initial');
  }
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.6,
          duration: 0.8,
          type: 'spring',
        }}
        className='w-100 mt-16 flex flex-col items-center justify-center text-center'
      >
        <h1 className='font-headNow text-6xl font-light text-gray-800'>
          Connect become one.
        </h1>
        <div className='my-4 flex w-[42%] items-center justify-center'>
          <p className='font-poppins text-sm font-light text-[#5D6A75]'>
            Manage your complex file such as{' '}
            <span className='font-bold'>finance, work plan, roadmap</span>{' '}
            become one project, and enjoy every awesome features.
          </p>
        </div>
        <div className='my-12'>
          <svg
            width='246'
            height='55'
            viewBox='0 0 246 55'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <circle
              cx='4.5'
              cy='4.5'
              r='3'
              transform='matrix(-1 0 0 1 80 23)'
              stroke='#C0CBCF'
              strokeWidth='3'
            />
            <path
              d='M48 27.5H27'
              stroke='#C0CBCF'
              strokeWidth='1.5'
              strokeLinecap='round'
            />
            <circle
              cx='2'
              cy='2'
              r='1.5'
              transform='matrix(-1 0 0 1 4 25.5)'
              stroke='#C0CBCF'
            />
            <g filter='url(#filter0_d_2312_476)'>
              <rect
                x='110.5'
                y='15'
                width='25'
                height='25'
                rx='12.5'
                fill='white'
                shapeRendering='crispEdges'
              />
              <circle
                cx='123'
                cy='27.5'
                r='3'
                stroke='#C0CBCF'
                strokeWidth='3'
              />
            </g>
            <circle
              cx='170.5'
              cy='27.5'
              r='3'
              stroke='#C0CBCF'
              strokeWidth='3'
            />
            <path
              d='M198 27.5H219'
              stroke='#C0CBCF'
              strokeWidth='1.5'
              strokeLinecap='round'
            />
            <circle cx='244' cy='27.5' r='1.5' stroke='#C0CBCF' />
            <defs>
              <filter
                id='filter0_d_2312_476'
                x='95.5'
                y='0'
                width='55'
                height='55'
                filterUnits='userSpaceOnUse'
                colorInterpolationFilters='sRGB'
              >
                <feFlood floodOpacity='0' result='BackgroundImageFix' />
                <feColorMatrix
                  in='SourceAlpha'
                  type='matrix'
                  values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                  result='hardAlpha'
                />
                <feOffset />
                <feGaussianBlur stdDeviation='7.5' />
                <feComposite in2='hardAlpha' operator='out' />
                <feColorMatrix
                  type='matrix'
                  values='0 0 0 0 0.0618614 0 0 0 0 0.235231 0 0 0 0 0.360775 0 0 0 0.07 0'
                />
                <feBlend
                  mode='normal'
                  in2='BackgroundImageFix'
                  result='effect1_dropShadow_2312_476'
                />
                <feBlend
                  mode='normal'
                  in='SourceGraphic'
                  in2='effect1_dropShadow_2312_476'
                  result='shape'
                />
              </filter>
            </defs>
          </svg>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 1,
          duration: 1,
          type: 'spring',
        }}
        className='w-100  z-50 mx-10 flex h-[500px] flex-col md:mx-2 md:flex-row  md:justify-around lg:justify-center lg:gap-12'
      >
        <motion.div
          whileHover={{
            skewX: -10,
            skewY: -4,
            boxShadow: '10px 10px 20px 20px rgba(42, 74, 203, 0.15)',
          }}
          className='box-stroke relative   h-[300px] w-full rounded-[45px] bg-[#F4F7F9]  p-6 dark:border-gray-700 dark:bg-gray-800 md:mb-20 md:w-[300px]'
        >
          <div>
            <h5 className='font-poppins mb-2 w-1/2 rounded-lg  bg-[#E8EBEF] px-2 py-2 text-center text-sm font-light tracking-tight text-[#6C7982] dark:text-white'>
              Your earning
            </h5>
            <h2 className='font-poppins py-4 text-[#445967]'>$50.000</h2>
            <p className='font-poppins  text-sm font-light tracking-tight text-[#6C7982] dark:text-white'>
              Last Expensive
            </p>
            <p className='font-poppins tracking-tight text-[#445967] dark:text-white'>
              $23.400
            </p>
            <div className='absolute -bottom-7'>
              <svg
                width='270'
                height='247'
                viewBox='0 0 358 247'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <motion.path
                  d='M357 18.7794C340.726 6.11727 305.529 -11.6097 294.937 18.7794C281.697 56.7657 285.007 118.699 269.284 106.312C253.562 93.9256 247.769 92.274 229.564 164.944C211.359 237.613 197.291 129.435 152.606 169.073C107.921 208.71 95.5082 174.027 75.648 201.278C55.7879 228.529 44.2028 235.962 35.1002 237.613C25.9977 239.265 9.44755 236.787 2 250'
                  stroke='#355BF5'
                  strokeWidth='2.5'
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{
                    duration: 2,
                    ease: 'easeInOut',
                    repeat: Infinity,
                    repeatDelay: 2,
                  }}
                />
              </svg>
            </div>
            <div className='absolute -bottom-7'>
              <svg
                width='270'
                height='247'
                viewBox='0 0 326 207'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <motion.path
                  d='M1 210C8.1489 178.784 28.7157 124.971 53.7919 159.446C85.1371 202.541 115.657 147.844 128.855 159.446C142.053 171.049 163.5 175.192 189.896 102.263C216.292 29.3329 218.766 -46.9118 265.784 39.2778C312.802 125.468 303.728 127.954 326 89.0026'
                  stroke='#C6DAE8'
                  strokeWidth='2'
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{
                    duration: 2,
                    ease: 'easeInOut',
                    repeat: Infinity,
                    repeatDelay: 2,
                  }}
                />
              </svg>
            </div>
          </div>
        </motion.div>
        <motion.div
          className='box-stroke relative mt-8 h-full w-full overflow-hidden rounded-[55px]  bg-[#F4F7F9] p-6 dark:border-gray-700 dark:bg-gray-800 md:h-[400px] md:w-[400px]'
          onMouseEnter={handleMouseEnterControls}
          onMouseLeave={handleMouseLeaveControls}
          whileHover={{
            boxShadow: '10px 10px 20px rgba(0, 0, 0, 0.2)',
            y: 5,
          }}
        >
          <div className='flex flex-col items-center justify-center px-2 py-4'>
            <h2 className='font-headNow font-md font-medium text-[#252525]'>
              Task Tracking
            </h2>
            <p className='font-poppins mt-6 text-center text-sm font-light text-[#5D6A75]'>
              Lorem ipsum dolor sit amet consectetur. Nulla habitant
            </p>
            <div className='absolute -bottom-5'>
              <div>
                <div id='outer-parent-circle'>
                  <NextImage
                    src={clockImage}
                    alt='Clock Image'
                    width={clockImage.width}
                    height={clockImage.height}
                    className='layer-1 absolute'
                    variants={variants}
                    animate={controls}
                  />
                  <div id='outer-circle' className='layer-2 absolute'></div>
                  <NextImage
                    src={AgileImage}
                    alt='Agile Image'
                    width={AgileImage.width}
                    height={AgileImage.height}
                    className='layer-3 absolute'
                    variants={variants}
                    animate={controls}
                  />
                  <div id='inner-circle' className='layer-4 absolute'></div>
                  <NextImage
                    src={timeManagement}
                    alt='Time Management Planner'
                    width={timeManagement.width}
                    height={timeManagement.height}
                    className='layer-5 absolute'
                    variants={variants}
                    animate={controls}
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        <div
          className='box-stroke relative mb-20 h-[320px] w-[300px]  rounded-[50px] bg-[#F4F7F9] p-6 dark:border-gray-700 dark:bg-gray-800'
          onMouseEnter={handleMouseEnterControls}
          onMouseLeave={handleMouseLeaveControls}
        >
          <div className='h-4/5'>
            <motion.div
              className='absolute left-28 top-28'
              variants={variantHearRate}
              animate={controls}
            >
              <DonutSVG />
            </motion.div>
            <div className='relative z-30'>
              <div className='absolute right-2 top-5 h-[70px] w-1/2 rounded-lg bg-[#DFE8EC]'>
                <p className='font-poppins mt-5 ps-2 text-[10px] text-[#979CA2]'>
                  Any task I should done today ?
                </p>
                <div className='absolute left-2 top-2 h-2 w-2 rounded-full bg-white'></div>
                <div className='absolute -top-8 left-2'>
                  <svg
                    width='103'
                    height='46'
                    viewBox='0 0 103 46'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M1.83313 44.5911C1.90162 44.9629 2.25852 45.2088 2.6303 45.1403C3.00208 45.0718 3.24795 44.7149 3.17946 44.3431L1.83313 44.5911ZM19.6186 6.13559L20.0765 5.62679H20.0765L19.6186 6.13559ZM3.17946 44.3431C1.59104 35.7203 0.749069 21.617 2.83308 12.014C3.35265 9.61989 4.04786 7.5364 4.93925 5.89794C5.83159 4.25774 6.89544 3.10854 8.13251 2.50562C10.5418 1.33139 14.064 2.05774 19.1607 6.64439L20.0765 5.62679C14.9059 0.973653 10.7562 -0.296012 7.53274 1.27501C5.95343 2.04473 4.71068 3.45347 3.73671 5.24371C2.76178 7.03571 2.03095 9.25516 1.49524 11.7237C-0.64185 21.5712 0.227259 35.8735 1.83313 44.5911L3.17946 44.3431ZM19.1607 6.64439C25.4426 12.2977 31.822 13.5939 38.3138 13.0298C41.541 12.7494 44.7917 12.0104 48.0587 11.1341C51.364 10.2476 54.5954 9.24773 57.9719 8.38493C64.663 6.67515 71.4894 5.62951 78.6121 7.58293C85.724 9.53342 93.2323 14.5037 101.212 25.0302L102.303 24.2032C94.1973 13.5105 86.455 8.31436 78.9742 6.2627C71.5041 4.21399 64.3957 5.33048 57.633 7.05857C54.2825 7.9147 50.9072 8.95273 47.704 9.81189C44.4624 10.6814 41.3027 11.396 38.1953 11.666C32.0182 12.2027 26.0326 10.9869 20.0765 5.62679L19.1607 6.64439Z'
                      fill='url(#paint0_linear_2352_61)'
                    />
                    <defs>
                      <linearGradient
                        id='paint0_linear_2352_61'
                        x1='0.909668'
                        y1='38.9688'
                        x2='102.214'
                        y2='23.2255'
                        gradientUnits='userSpaceOnUse'
                      >
                        <stop stopColor='#485C6B' />
                        <stop
                          offset='1'
                          stopColor='#485C6B'
                          stopOpacity='0.01'
                        />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
            <div className='relative z-20'>
              <div className='absolute right-10 top-20 h-[70px] w-1/2 rounded-lg bg-[#E9EFF1]'>
                <p className='font-poppins mt-5 ps-2 text-[10px] text-[#979CA2]'>
                  Any task I should done today ?
                </p>
                <div className='absolute left-2 top-2 h-2 w-2 rounded-full bg-white'></div>
                <div className='absolute -top-1 left-3'>
                  <svg
                    width='88'
                    height='39'
                    viewBox='0 0 88 39'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M0.561818 17.5528C0.437909 17.91 0.626988 18.3 0.984138 18.4239C1.34129 18.5478 1.73126 18.3587 1.85517 18.0015L0.561818 17.5528ZM13.5293 13.6702L12.845 13.6861L13.5293 13.6702ZM1.85517 18.0015C2.81932 15.2225 4.03116 12.1203 5.31227 9.39924C6.60449 6.65462 7.93122 4.37735 9.10644 3.18091C9.70759 2.56891 10.1491 2.3646 10.4278 2.35858C10.6236 2.35436 10.9412 2.45083 11.3192 3.13653C11.7003 3.82781 12.0538 4.97858 12.3254 6.73248C12.5951 8.47393 12.777 10.7599 12.845 13.6861L14.2137 13.6543C14.1448 10.694 13.9602 8.34391 13.6782 6.52297C13.3982 4.71448 13.0147 3.37648 12.5181 2.47561C12.0184 1.56915 11.3174 0.970081 10.3983 0.989919C9.56202 1.00797 8.7921 1.54733 8.1298 2.2216C6.7781 3.59771 5.36972 6.0634 4.0737 8.8161C2.76658 11.5924 1.53707 14.7418 0.561818 17.5528L1.85517 18.0015ZM12.845 13.6861C13.018 21.1242 14.6618 27.0419 17.8977 31.2102C21.1516 35.4015 25.9479 37.7379 32.2246 38.1306C38.4787 38.522 46.2193 36.9879 55.4534 33.4496C64.6945 29.9085 75.4729 24.3439 87.8172 16.6287L87.0917 15.4678C74.7943 23.1537 64.0968 28.6715 54.9636 32.1712C45.8233 35.6736 38.2912 37.1386 32.3101 36.7643C26.3514 36.3915 21.9499 34.1975 18.9791 30.3707C15.9904 26.5209 14.3829 20.9328 14.2137 13.6543L12.845 13.6861Z'
                      fill='url(#paint0_linear_2352_57)'
                    />
                    <defs>
                      <linearGradient
                        id='paint0_linear_2352_57'
                        x1='-0.312351'
                        y1='35.7472'
                        x2='71.7111'
                        y2='24.9467'
                        gradientUnits='userSpaceOnUse'
                      >
                        <stop stopColor='#4A5D6C' />
                        <stop
                          offset='1'
                          stopColor='#4A5D6C'
                          stopOpacity='0.01'
                        />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
            <div className='relative z-10'>
              <div className='absolute right-16 top-36 h-[70px] w-1/2 rounded-lg bg-[#EFF3F7]'>
                <p className='font-poppins mt-5 ps-2 text-[10px] text-[#979CA2]'>
                  Any task I should done today ?
                </p>
                <div className='absolute left-2 top-2 h-2 w-2 rounded-full bg-white'></div>
                <div className='absolute -left-9 -top-1'>
                  <svg
                    width='52'
                    height='72'
                    viewBox='0 0 52 72'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M50.0533 14.9809C50.3013 15.2662 50.7337 15.2964 51.0189 15.0483C51.3042 14.8002 51.3344 14.3679 51.0863 14.0826L50.0533 14.9809ZM27.9816 15.9008L27.3042 15.9995L27.9816 15.9008ZM51.0863 14.0826C48.7878 11.4393 45.9713 8.54435 43.0943 6.09998C40.232 3.66814 37.2516 1.63151 34.6287 0.773216C33.3125 0.342542 32.0259 0.18821 30.8671 0.486556C29.6821 0.79163 28.7083 1.5505 28.0137 2.78689C27.331 4.002 26.9211 5.66867 26.794 7.82464C26.6665 9.98691 26.821 12.6858 27.3042 15.9995L28.6589 15.802C28.1838 12.5446 28.0403 9.94439 28.1606 7.90523C28.2812 5.85978 28.6649 4.42271 29.2072 3.45742C29.7375 2.51343 30.4201 2.01525 31.2084 1.81231C32.0228 1.60263 33.0263 1.6893 34.2029 2.07431C36.5654 2.84739 39.3803 4.74088 42.2079 7.14326C45.0207 9.53311 47.7885 12.3765 50.0533 14.9809L51.0863 14.0826ZM27.3042 15.9995C27.898 20.0713 27.9432 23.0878 27.6044 25.2998C27.2662 27.5085 26.5538 28.8652 25.6739 29.6901C24.7984 30.5108 23.6761 30.881 22.3602 30.9552C21.0337 31.0299 19.5568 30.8007 18.034 30.4623C17.2758 30.2938 16.5185 30.1012 15.7698 29.9103C15.0252 29.7205 14.2867 29.5317 13.584 29.3764C12.2059 29.072 10.8468 28.8661 9.74842 29.0907C9.18045 29.2069 8.6503 29.4438 8.22536 29.8659C7.79965 30.2889 7.52828 30.8494 7.39563 31.5284C7.13743 32.8502 7.38436 34.7291 8.16048 37.3162L9.47173 36.9228C8.70775 34.3762 8.54825 32.7685 8.73922 31.7909C8.83116 31.3202 8.99829 31.0278 9.19021 30.8371C9.38291 30.6457 9.64954 30.5083 10.0227 30.4319C10.8067 30.2716 11.9074 30.408 13.2886 30.7132C13.9656 30.8628 14.6816 31.0457 15.4316 31.2369C16.1776 31.4271 16.955 31.6249 17.737 31.7987C19.2943 32.1448 20.919 32.4076 22.4373 32.322C23.9663 32.2358 25.4322 31.7931 26.6102 30.6888C27.7837 29.5886 28.59 27.9079 28.9576 25.507C29.3248 23.1094 29.263 19.9442 28.6589 15.802L27.3042 15.9995ZM8.16048 37.3162C9.62927 42.2122 8.33947 46.8571 6.35608 51.1195C5.36384 53.2519 4.21377 55.2567 3.16456 57.1454C2.12626 59.0144 1.17439 60.7904 0.637804 62.4004C0.10181 64.0086 -0.0656369 65.5839 0.639463 66.9745C1.34357 68.3632 2.82479 69.3851 5.14657 70.1148C9.7712 71.5682 18.2745 72.0272 32.8069 71.3434L32.7425 69.9759C18.1836 70.661 9.91665 70.1789 5.55701 68.8088C3.38666 68.1267 2.32228 67.2662 1.86046 66.3554C1.39964 65.4466 1.44595 64.3053 1.93655 62.8333C2.42657 61.363 3.31413 59.6952 4.36128 57.8102C5.39752 55.9449 6.57889 53.8856 7.59726 51.6971C9.63509 47.3177 11.0831 42.2942 9.47173 36.9228L8.16048 37.3162Z'
                      fill='url(#paint0_linear_2352_53)'
                    />
                    <defs>
                      <linearGradient
                        id='paint0_linear_2352_53'
                        x1='17.968'
                        y1='5.80804'
                        x2='37.1338'
                        y2='63.9898'
                        gradientUnits='userSpaceOnUse'
                      >
                        <stop stopColor='#4B5E6D' />
                        <stop
                          offset='1'
                          stopColor='#4B5E6D'
                          stopOpacity='0.01'
                        />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
            <div className='absolute bottom-0 left-0 right-0  flex justify-between px-6 pb-2'>
              <p className='font-poppins text-sm text-[#252525]'>
                Lorem ipsum dolor sit amet consectetur nulla.
              </p>
              <div className='h-[25px] w-[25px] rounded-md bg-[#E7EDF0]'>
                <ChevronRight />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <div className='my-4 flex  items-center justify-center overflow-x-hidden'>
        <Marquee />
      </div>
      <div className='mt-24 flex items-center justify-center'>
        <WhyFusion />
      </div>
    </>
  );
}
