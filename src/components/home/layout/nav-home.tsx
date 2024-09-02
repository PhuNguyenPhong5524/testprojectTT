'use client';

import React, { useEffect, useState } from 'react';
import RouterLink from 'next/link';
import { me, type User } from '@/services';
// import { FetchAuth } from '@/services/api/axios/axios';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import { Box, Button, Container, Link, Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Unstable_Grid2';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';

import { REDIRECT_URL, REDIRECT_URL_CMS } from '@/config';

// import { bold } from '@/styles/font';
import NavHomeMobile from './nav-home-mobile';
import { StlyeTextNav, StyleBoxNav, StyleButtonNavHome, StyleNavHome } from './style';
import { UseHome } from './use';

export default function NavHome(): React.JSX.Element {
  // zustand
  const { MobileNav, setMobileNav, ObjectUser, Token, setToken, ShowNav, setShowNav } = UseHome();
  // get user
  async function GetUser(): Promise<void> {
    if (localStorage.getItem('custom-auth-token')) {
      // const response: DataUser = await FetchAuth('auth/v1/me');
      const response: User | undefined = await me();
      console.log(response);
      // setObjectUser(response);
    }
  }
  useEffect(() => {
    setToken(localStorage.getItem('custom-auth-token'));
    void GetUser();
  }, []);
  // Open and close  Nav å
  function OpenNav(): void {
    setMobileNav(!MobileNav);
  }
  // animation
  const parentVariants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 0 },
  };
  const childVariants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: '1rem' },
  };
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [prevScroll, setPrevScroll] = useState(0);
  function update(latest: number, prev: number): void {
    if (latest < prev) {
      setHidden(false);
    } else if (latest > 100 && latest > prev) {
      setHidden(true);
    }
  }
  useMotionValueEvent(scrollY, 'change', (latest: number) => {
    update(latest, prevScroll);
    setPrevScroll(latest);
  });
  function ClickOpenNav(): void {
    setShowNav(!ShowNav);
  }
  function SignOut(): void {
    localStorage.removeItem('custom-auth-token');
    window.location.href = '/';
  }

  function getDashboardLink() {
    const token = localStorage.getItem('custom-auth-token') ?? '';
    return `${REDIRECT_URL_CMS}?create_sso2_ticket=${token}`;
  }

  return (
    <Box sx={{ position: 'fixed', top: 0, zIndex: '1000' }}>
      <motion.nav
        variants={parentVariants}
        animate={hidden ? 'hidden' : 'visible'}
        transition={{
          ease: [0.1, 0.25, 0.3, 1],
          duration: 0,
        }}
      >
        <motion.div
          variants={childVariants}
          transition={{
            ease: [0.1, 0.25, 0.3, 1],
            duration: 0,
          }}
        >
          <Box sx={{ background: '#FAFAFA', position: 'relative', width: '100vw' }}>
            <Container>
              <Grid container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Grid lg={5} md={5} sm={5} xs={5}>
                  <Link
                    sx={{ padding: { lg: '20px', md: '20px', sm: '20px', xs: '0px' } }}
                    underline="none"
                    component={RouterLink}
                    href={REDIRECT_URL}
                  >
                    <Box
                      component="img"
                      src="/assets/edutekit-logo.svg"
                      sx={{
                        width: { lg: '180px', md: '200px', sm: '200px', xs: '120px' },
                        padding: { lg: '0px', md: '0px', sm: '0px', xs: '10px' },
                      }}
                    />
                    {/* <Image src="/assets/edutekit-logo.svg" alt="" width={200} height={50} /> */}
                  </Link>
                </Grid>
                <Grid lg={7} md={7} sm={7} xs={7}>
                  <Box
                    sx={{
                      display: { lg: 'flex', md: 'flex', sm: 'flex', xs: 'none' },
                      gap: '50px',
                      alignItems: 'center',
                      padding: '20px',
                      justifyContent: 'flex-end',
                    }}
                  >
                    {/* <Link underline="none" component={RouterLink} href="https://edutekit.com/pricing">
                      <Typography sx={{StyleNavHome}}>Bảng giá</Typography>
                    </Link> */}
                    {Token === null ? (
                      <>
                        <Link underline="none" component={RouterLink} href="/auth/sign-up-account">
                          <Typography variant="h6" sx={{ StyleNavHome }}>
                            Register as a teacher
                          </Typography>
                        </Link>
                        <Link underline="none" component={RouterLink} href="/auth/sign-in">
                          <Button
                            sx={{
                              padding: '0px 0px',
                              borderRadius: '5px',
                              border: '1px solid #2378b9',
                              '&:hover': { background: '#FAFAFA', border: '1px solid #027ac1' },
                            }}
                            color="primary"
                            variant="outlined"
                          >
                            <Typography variant="h6" sx={{ StyleButtonNavHome }}>
                              Sign in
                            </Typography>
                          </Button>
                        </Link>
                      </>
                    ) : (
                      <Box>
                        <Box
                          sx={{
                            display: 'flex',
                            justifyContent: 'space-around',
                            alignItems: 'center',
                            gap: '10px',
                          }}
                        >
                          <Avatar
                            sx={{
                              width: { lg: '25px', md: '20px', sm: '20px', xs: '15px' },
                              height: { lg: '25px', md: '20px', sm: '20px' },
                            }}
                            alt="Remy Sharp"
                            src="/assets/profile-user.svg"
                          />
                          <Typography onClick={ClickOpenNav} sx={{ StyleNavHome }}>
                            {ObjectUser.name}
                          </Typography>
                          {ShowNav ? (
                            <Box
                              sx={{
                                width: { lg: '15%', md: '20%', sm: '20%' },
                                height: 'auto',
                                position: 'absolute',
                                background: '#FAFAFA',
                                right: { lg: 70, md: 10, sm: 30 },
                                top: 60,
                                zIndex: '1300',
                                padding: '10px 0px',
                                textAlign: 'center',
                              }}
                            >
                              <Box sx={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                                <Box sx={{ StyleBoxNav }}>
                                  {ObjectUser.roleTitle !== 'student' && (
                                    <Link underline="none" component={RouterLink} href={getDashboardLink()}>
                                      <Typography sx={{ StlyeTextNav }}>DashBoard</Typography>
                                    </Link>
                                  )}
                                </Box>
                                <Box sx={{ StyleBoxNav }}>
                                  <Link underline="none" component={RouterLink} href="/">
                                    <Typography sx={{ StlyeTextNav }}>Hồ sơ</Typography>
                                  </Link>
                                </Box>
                                <Box onClick={SignOut} sx={{ StyleBoxNav }}>
                                  <Typography sx={{ StlyeTextNav }}>Đăng xuất</Typography>
                                </Box>
                              </Box>
                            </Box>
                          ) : null}
                        </Box>
                      </Box>
                    )}
                  </Box>
                  <Box sx={{ display: { lg: 'none', md: 'none', sm: 'none', xs: 'block' } }}>
                    <Box onClick={OpenNav} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                      {MobileNav ? <CloseIcon /> : <MenuIcon />}
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Container>
          </Box>
          {MobileNav ? (
            <motion.div initial={{ translateX: 200 }} animate={{ translateX: 150 }} transition={{ duration: 0.5 }}>
              <NavHomeMobile />
            </motion.div>
          ) : null}
        </motion.div>
      </motion.nav>
    </Box>
  );
}
