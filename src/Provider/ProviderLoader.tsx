'use client';

import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';
import React from 'react';

const ProvidersLoader = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
      <ProgressBar
        height='4px'
        color='#355BF5'
        options={{ showSpinner: true }}
        shallowRouting
      />
    </>
  );
};

export default ProvidersLoader;
