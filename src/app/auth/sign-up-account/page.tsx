// import React from 'react';
// import type { Metadata } from 'next';
// import { FetchAll } from '@/services/api/utils/axios-rest';
// import { Box } from '@mui/material';

// import { type DataPackageCourse } from '@/types/interface';
// import { config } from '@/config';
// import SignUpAdminForm from '@/components/auth/sign-up-account-form';

// export const metadata = { title: `Sign up account ${config.site.name}` } satisfies Metadata;
// export default async function SignUpAdminPage(): Promise<React.JSX.Element> {
//   // Fetch Course
//   // Fetch package
//   const responsePackage: DataPackageCourse = await FetchAll('package/v1/get-list-package');
//   return (
//     <Box>
//       <SignUpAdminForm ArrPackage={responsePackage} />
//     </Box>
//   );
// }
