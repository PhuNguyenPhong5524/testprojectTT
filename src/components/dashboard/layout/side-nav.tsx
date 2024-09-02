'use client';

import * as React from 'react';
import RouterLink from 'next/link';
import { usePathname } from 'next/navigation';
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import { Box, Link, Typography } from '@mui/material';

import { paths } from '@/paths';

import { StyleLinkSideNav } from './style';

export function SideNav(): React.JSX.Element {
  const pathname = usePathname();

  return (
    <Box sx={{ height: '100%', background: '#F8FCFD', zIndex: 1200 }}>
      <Box
        sx={{
          position: 'sticky',
          top: { lg: 80, md: 80, sm: 0, xs: 0 },
          display: { lg: 'block', md: 'none', sm: 'none', xs: 'block' },
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '30px', paddingTop: '15px' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <Box>
              <Link component={RouterLink} href={paths.dashboard.overview} underline="none" sx={StyleLinkSideNav()}>
                <Typography
                  sx={{
                    background: pathname === paths.dashboard.overview ? '#C800A8' : '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    padding: '5px 5px',
                    borderRadius: '8px',
                  }}
                >
                  <HomeIcon sx={{ color: pathname === paths.dashboard.overview ? '#FFFFFF' : '' }} />
                </Typography>
                <Typography variant="body2" sx={{ color: pathname === paths.dashboard.overview ? '#000000' : '' }}>
                  Dashboard
                </Typography>
              </Link>
            </Box>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <Box>
              <Typography variant="subtitle2" sx={{ color: '#737A8C', padding: '5px 5px 5px 25px' }}>
                ACCOUNT PAGE
              </Typography>
            </Box>
            <Box sx={{ width: '100%' }}>
              <Link component={RouterLink} href={paths.dashboard.account} underline="none" sx={StyleLinkSideNav()}>
                <Typography
                  sx={{
                    background: pathname === paths.dashboard.account ? '#C800A8' : '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    padding: '5px 5px',
                    borderRadius: '8px',
                  }}
                >
                  <SettingsIcon sx={{ color: pathname === paths.dashboard.account ? '#FFFFFF' : '' }} />
                </Typography>
                <Typography variant="body2" sx={{ color: pathname === paths.dashboard.account ? '#000000' : '' }}>
                  Account
                </Typography>
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
