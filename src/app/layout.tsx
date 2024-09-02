'use client';

import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';

import { UserProvider } from '@/contexts/user-context';
import { theme } from '@/components/typography';

export const viewport = { width: 'device-width', initialScale: 1 }; // Khai báo viewport không phải là phần của React component

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps): React.ReactElement {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.svg" />
      <body style={{ margin: 0 }}>
        <UserProvider>
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </UserProvider>
      </body>
    </html>
  );
}
