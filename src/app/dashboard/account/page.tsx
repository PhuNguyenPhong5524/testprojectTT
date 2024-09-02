import * as React from 'react';
import type { Metadata } from 'next';
import { Box } from '@mui/material';

import { config } from '@/config';

export const metadata = { title: `Overview | Dashboard | ${config.site.name}` } satisfies Metadata;
export default function PageAccount(): React.JSX.Element {
  return <Box>This is account</Box>;
}
