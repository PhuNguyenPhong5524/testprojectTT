'use client';

import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';

import { theme } from '@/components/typography';

export interface LayoutProps {
  children: React.ReactNode;
}
export function LayoutAuth({ children }: LayoutProps): React.JSX.Element {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
