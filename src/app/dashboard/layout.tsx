'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import { ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';

import { AuthGuard } from '@/components/auth/auth-guard';
import { MainNav } from '@/components/dashboard/layout/main-nav';
import { SideNav } from '@/components/dashboard/layout/side-nav';
import { theme } from '@/components/typography';

interface LayoutProps {
  children: React.ReactNode;
}
export default function Layout({ children }: LayoutProps): React.JSX.Element {
  return (
    <AuthGuard>
      <ThemeProvider theme={theme}>
        <Box sx={{ maxWidth: '1920px', width: '100%' }}>
          <MainNav />
          <Grid container>
            <Grid lg={2} md={3} sm={0} xs={0}>
              <SideNav />
            </Grid>
            <Grid lg={10} md={12} sm={12} xs={12} sx={{ background: '#F8FCFD' }}>
              {children}
            </Grid>
          </Grid>
        </Box>
      </ThemeProvider>
    </AuthGuard>
  );
}
