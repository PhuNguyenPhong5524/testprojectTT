import * as React from 'react';
import type { Metadata } from 'next';
import { Box } from '@mui/material';

import { config } from '@/config';
import DashBoardComponent from '@/components/dashboard/layout/dashboard-component';

export const metadata = { title: `Overview | Dashboard | ${config.site.name}` } satisfies Metadata;
export default function Page(): React.JSX.Element {
  return (
    <Box>
      <DashBoardComponent />
    </Box>
  );
}
