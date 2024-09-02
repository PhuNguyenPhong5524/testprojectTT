import * as React from 'react';
import type { Metadata } from 'next';

import { config } from '@/config';
import { GuestGuard } from '@/components/auth/guest-guard';
import { LayoutAuth } from '@/components/auth/layout';
import ResetPasswordForm from '@/components/auth/reset-password-form';
import NavHome from '@/components/home/layout/nav-home';

export const metadata = { title: `Reset password | Auth | ${config.site.name}` } satisfies Metadata;
export default function ResetPasswordPage(): React.JSX.Element {
  return (
    <LayoutAuth>
      <GuestGuard>
        <NavHome />
        <ResetPasswordForm />
      </GuestGuard>
    </LayoutAuth>
  );
}
