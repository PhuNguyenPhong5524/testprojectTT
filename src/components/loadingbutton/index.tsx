'use client';

import React from 'react';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

import { UseLoadingButton } from './use';

export default function LoadingButton(): React.JSX.Element {
  const { IsLoadingButton } = UseLoadingButton();
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '20px', height: '20px' }}>
      {IsLoadingButton ? <CircularProgress style={{ width: '20px', height: '20px' }} /> : null}
    </Box>
  );
}
