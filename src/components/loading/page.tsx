'use client';

import React from 'react';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

import { UseLoading } from './use';

export default function Loading(): React.JSX.Element {
  const { IsLoading } = UseLoading();
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '70vh' }}>
      {IsLoading ? <CircularProgress /> : null}
    </Box>
  );
}
