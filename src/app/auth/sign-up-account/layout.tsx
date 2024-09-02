'use client';

import * as React from 'react';
import { ThemeProvider } from '@mui/material';

import { GuestGuard } from '@/components/auth/guest-guard';
import NavHome from '@/components/home/layout/nav-home';
import { theme } from '@/components/typography';

interface LayoutProps {
  children: React.ReactNode;
}
export default function LayoutSignUpAccount({ children }: LayoutProps): React.JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <GuestGuard>
        <body style={{ margin: '0px', overflow: 'scroll' }}>
          <NavHome />
          {children}
        </body>
      </GuestGuard>
    </ThemeProvider>
  );
}
