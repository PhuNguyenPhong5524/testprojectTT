export const paths = {
  auth: {
    signIn: '/auth/sign-in',
    signUp: '/auth/sign-up',
    resetPassword: '/auth/reset-password',
  },
  dashboard: {
    overview: '/dashboard',
    account: '/dashboard/account',
  },
  errors: {
    notFound: '/errors/not-found',
  },
} as const;
