import * as React from 'react';
import type { Metadata } from 'next';

import { config } from '@/config';
import { GuestGuard } from '@/components/auth/guest-guard';
import { LayoutAuth } from '@/components/auth/layout';
import { SignInForm } from '@/components/auth/sign-in-form';
import NavHome from '@/components/home/layout/nav-home';

export const metadata = { title: `Sign in ${config.site.name}` } satisfies Metadata;

export default function Page(): React.JSX.Element {
  return (
    <LayoutAuth>
      <GuestGuard>
        <NavHome />
        <SignInForm />
      </GuestGuard>
    </LayoutAuth>
  );
}
