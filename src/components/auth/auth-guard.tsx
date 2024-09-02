'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { me, type User } from '@/services';
import Alert from '@mui/material/Alert';

import { DEFAULT_ROLE_TITLE, REDIRECT_URL_CMS } from '@/config';
import { paths } from '@/paths';
import { authClient } from '@/lib/auth/client';
import { logger } from '@/lib/default-logger';
import { useUser } from '@/hooks/use-user';

export interface AuthGuardProps {
  children: React.ReactNode;
}

export function AuthGuard({ children }: AuthGuardProps): React.JSX.Element | null {
  const router = useRouter();
  const { user, error, isLoading } = useUser();
  const [isChecking, setIsChecking] = useState<boolean>(true);

  const redirectTo = (url: string) => {
    window.location.href = url;
  };

  useEffect(() => {
    const checkPermissions = async (): Promise<void> => {
      if (isLoading) {
        return;
      }

      if (error) {
        await authClient.signOut();
        setIsChecking(false);
        redirectTo(paths.auth.signIn);
        return;
      }

      if (!user) {
        logger.debug('[AuthGuard]: User is not logged in, redirecting to sign in');
        router.replace(paths.auth.signIn);
        return;
      }

      if (user.roleTitle === DEFAULT_ROLE_TITLE.TEACHER) {
        const accessToken = localStorage.getItem('custom-auth-token');
        const url =
          user.step === 3 && accessToken
            ? `${REDIRECT_URL_CMS}?create_sso2_ticket=${accessToken}`
            : '/auth/sign-up-account';
        redirectTo(url);
        return;
      }

      setIsChecking(false);
    };
    checkPermissions().catch((err: unknown) => {
      logger.error(err);
    });
  }, [user, error, isLoading, router]);

  if (isChecking) {
    return null;
  }

  if (error) {
    return <Alert color="error">{error}</Alert>;
  }
  return <React.Fragment>{children}</React.Fragment>;
}
