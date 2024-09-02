'use client';

import * as React from 'react';
import Alert from '@mui/material/Alert';
import FormControl from '@mui/material/FormControl';
import Typography from '@mui/material/Typography';

import 'react-toastify/dist/ReactToastify.css';

import Image from 'next/image';
import RouterLink from 'next/link';
import { login, type User } from '@/services';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { Box, Container, Link } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { DEFAULT_ROLE_TITLE, NameLogin, REDIRECT_URL_CMS } from '@/config';
import { InputText } from '@/components/z-input';

import { StyleAlert } from './style';
import { UseAuth } from './use';

const SignupSchema = new Yup.ObjectSchema().shape({
  username: Yup.string().required('Username is required').email('Invalid username format'),
  password: Yup.string().required('Password is required').min(6, 'Password must be at least 6 characters long'),
});

// interface LoginResponse {
//   roleTitle?: string;
//   step?: number;
//   accessToken?: string;
// }
// interface ApiResponse {
//   data?: LoginResponse;
// }
export function SignInForm(): React.JSX.Element {
  const { Disabled, setDisabled, ShowAlertSignIn, setShowAlertSignIn } = UseAuth();

  const redirectTo = (url: string) => {
    window.location.href = url;
  };

  const formik2 = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: SignupSchema,
    onSubmit: async (): Promise<void> => {
      setDisabled(true);

      try {
        // post
        const response: User | undefined = await login(values.username, values.password);
        const { accessToken, roleTitle, step } = response || {};
        if (accessToken) {
          localStorage.setItem('custom-auth-token', accessToken);
          if (roleTitle === DEFAULT_ROLE_TITLE.TEACHER) {
            const url = step === 3 ? `${REDIRECT_URL_CMS}?create_sso2_ticket=${accessToken}` : '/auth/sign-up-account';
            redirectTo(url);
          } else {
            redirectTo('/');
          }
        }
      } catch (error) {
        setDisabled(false);
        setShowAlertSignIn(true);
      }
    },
  });
  const { handleBlur, handleChange, handleSubmit, values, errors, touched } = formik2;
  return (
    <Box
      sx={{
        width: '100%',
        height: '100vh',
        position: 'fixed',
        overflow: 'hidden',
        paddingTop: { lg: '9%', md: '15%', sm: '20%', xs: '20%' },
      }}
    >
      <Container
        sx={{
          padding: {
            lg: '30px 0px 80px 0px',
            md: '30px 0px 80px 0px',
            sm: '30px 20px 80px 20px',
            xs: '20px 15px 80px 15px',
          },
        }}
      >
        <Box
          sx={{
            paddingTop: '50px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
          }}
        >
          <Box
            sx={{
              width: '100%',
              maxWidth: '550px', // Giới hạn chiều rộng tối đa cho hộp con
              display: 'flex',
              flexDirection: 'column',
              gap: '60px',
            }}
          >
            <Box>
              <Typography variant="h4" sx={{ textAlign: 'center' }}>
                {' '}
                Sign in with {NameLogin}{' '}
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
              {/* field */}
              <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{ display: 'flex', flexDirection: 'column', gap: errors.username ? '5px' : '20px' }}
              >
                <FormControl sx={{ width: '100%' }}>
                  <InputText
                    label="Email "
                    name="username"
                    value={values.username}
                    isError={Boolean(touched.username && errors.username)}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    errorText={errors?.username ?? ''}
                  />
                </FormControl>
                <FormControl sx={{ width: '100%' }}>
                  <InputText
                    label="Password"
                    name="password"
                    value={values.password}
                    isError={Boolean(touched.password && errors.password)}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    typeInput="password"
                    errorText={errors.password}
                    suffixIcon={
                      <Box
                        component="button"
                        type="submit"
                        disabled={Disabled}
                        sx={{
                          color: 'red',
                          background: 'transparent',
                          border: 'none',
                          cursor: 'pointer',
                        }}
                      >
                        <ArrowCircleRightOutlinedIcon sx={{ color: '#989898' }} />
                      </Box>
                    }
                  />
                </FormControl>
                {ShowAlertSignIn ? (
                  <Alert sx={StyleAlert()} severity="error">
                    Your email or password is incorrect!
                  </Alert>
                ) : null}
              </Box>
              {/* forgot */}
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Link
                  sx={{ display: 'flex', alignItems: 'center', gap: '4px', textAlign: 'center' }}
                  underline="hover"
                  component={RouterLink}
                  href="/auth/reset-password"
                >
                  <Typography variant="body2">
                    Forgot password ? <ArrowOutwardIcon sx={{ fontSize: '0.8rem' }} />
                  </Typography>{' '}
                </Link>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
      <Box
        sx={{ marginLeft: '-40px', display: { lg: 'block', md: 'block', sm: 'block', xs: 'none' }, marginTop: '80px' }}
      >
        <Image src="/assets/__img_signin.svg" alt="" width={500} height={500} />
      </Box>
    </Box>
  );
}
