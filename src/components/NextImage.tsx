import { motion, MotionProps } from 'framer-motion';
import Image, { ImageProps } from 'next/image';
import * as React from 'react';

import { cn } from '@/lib/utils';

type NextImageProps = {
  useSkeleton?: boolean;
  classNames?: {
    image?: string;
    blur?: string;
  };
  alt: string;
  variants?: MotionProps['variants']; // Define variants prop
  animate?: MotionProps['animate'];
} & (
  | { width: string | number; height: string | number }
  | { layout: 'fill'; width?: string | number; height?: string | number }
) &
  ImageProps;

export default function NextImage({
  useSkeleton = false,
  src,
  width,
  height,
  alt,
  className,
  classNames,
  animate,
  variants,
  ...rest
}: NextImageProps) {
  const [status, setStatus] = React.useState(
    useSkeleton ? 'loading' : 'complete'
  );
  const widthIsSet = className?.includes('w-') ?? false;

  return (
    <motion.figure
      style={!widthIsSet ? { width: `${width}px` } : undefined}
      className={className}
      variants={variants} // Pass variants prop to motion
      animate={animate}
    >
      <Image
        className={cn(
          classNames?.image,
          status === 'loading' && cn('animate-pulse', classNames?.blur)
        )}
        src={src}
        width={width}
        height={height}
        alt={alt}
        onLoadingComplete={() => setStatus('complete')}
        {...rest}
      />
    </motion.figure>
  );
}
