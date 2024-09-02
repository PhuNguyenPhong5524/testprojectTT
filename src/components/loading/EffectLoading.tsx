'use client';

import * as React from 'react';

import { UseLoading } from './use';

export default function usePageLoading(): void {
  const { setIsLoading } = UseLoading();

  React.useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => {
      clearTimeout(timer);
      setIsLoading(false);
    };
  }, [setIsLoading]);
}
