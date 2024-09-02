'use client';

import React from 'react';
import RouterLink from 'next/link';
import { Box, Button, Container, Link, Typography } from '@mui/material';

import { StyleNavHomeMobile } from './style';

export default function NavHomeMobile(): React.JSX.Element {
  function Logout(): void {
    localStorage.removeItem('custom-auth-token');
    window.location.href = '/';
  }
  // zustand
  return (
    <Box sx={{ width: '60%', backgroundColor: '#F7F7F7', height: '100vh', zIndex: '1000' }}>
      <Container>
        <Box sx={{ padding: '10px 10px', display: 'flex', flexDirection: 'column' }}>
          {!localStorage.getItem('custom-auth-token') ? (
            <Link underline="none" component={RouterLink} href="/auth/sign-in">
              <Typography sx={{ StyleNavHomeMobile }}>Đăng nhập</Typography>
            </Link>
          ) : (
            <Box onClick={Logout}>
              <Typography sx={{ StyleNavHomeMobile }}>Đăng xuất</Typography>
            </Box>
          )}
          <Link underline="none" component={RouterLink} href="/auth/sign-up-account">
            <Button
              style={{ width: '100%', border: '1px solid black' }}
              sx={{ StyleNavHomeMobile }}
              color="primary"
              variant="outlined"
            >
              <Typography>Dùng thử miễn phí</Typography>
            </Button>
          </Link>
        </Box>
      </Container>
    </Box>
  );
}
