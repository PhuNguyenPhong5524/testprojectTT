'use client';

import React from 'react';
import ContentCopyRoundedIcon from '@mui/icons-material/ContentCopyRounded';
import CreateIcon from '@mui/icons-material/Create';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import { Box, Breadcrumbs, Link, Typography } from '@mui/material';
import Switch from '@mui/material/Switch';
import Grid from '@mui/material/Unstable_Grid2';

import { useUser } from '@/hooks/use-user';

import {
  StyleBoxInformation,
  StyleBoxInformation1,
  StyleBoxSwitch,
  StyleColorTextApiInformation,
  StyleColorTextInformation,
  StyleIconInformation,
} from './style';

export default function DashBoardComponent(): React.JSX.Element {
  const { user } = useUser();
  return (
    <Box>
      <Box sx={{ position: 'relative', background: '#F8FCFD' }}>
        <Box component="img" src="/assets/background-dashboard.svg" sx={{ width: '100%' }} />
        <Box
          sx={{ position: 'absolute', top: { lg: 30, md: 30, sm: 5, xs: 5 }, left: { lg: 20, md: 20, sm: 10, xs: 10 } }}
        >
          <Breadcrumbs aria-label="breadcrumb" sx={{ color: '#F3EBFF' }}>
            <Link underline="hover" color="inherit" href="/">
              Pages
            </Link>
            <Typography>Profile</Typography>
          </Breadcrumbs>
          <Box>
            <Typography sx={{ color: '#FFFFFF' }} variant="body1">
              Profile
            </Typography>
          </Box>
        </Box>
        {/*  */}
        <Box sx={{ position: 'absolute', bottom: { lg: -50, md: -70, sm: -50, xs: -65 }, right: '8px', width: '100%' }}>
          <Box
            sx={{
              margin: '0px 20px',
              background: '#FFFFFF',
              padding: {
                lg: '15px 65px 15px 15px ',
                md: '30px 65px 30px 15px ',
                sm: '30px 50px 30px 15px',
                xs: '15px 15px',
              },
              borderRadius: '12px',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '10px',
              }}
            >
              <Box sx={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                {user?.avatar !== '' ? (
                  <Box
                    component="img"
                    src="https://teklearner.com/wp-content/themes/site_el/component/img/user.svg"
                    sx={{ width: { lg: '80px', md: '80px', sm: '60px', xs: '50px' } }}
                  />
                ) : (
                  <Box
                    component="img"
                    src="/assets/no_avatar.png"
                    sx={{ width: { lg: '80px', md: '80px', sm: '60px', xs: '50px' } }}
                  />
                )}
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
                  <Typography variant="h5">{user?.name}</Typography>
                  <Typography sx={{ color: '#8F8F8F' }} variant="body1">
                    {user?.roleTitle}
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: 'flex', gap: { lg: '50px', md: '50px', sm: '30px', xs: '30px' } }}>
                <Box sx={StyleBoxInformation()}>
                  <ContentCopyRoundedIcon sx={StyleIconInformation()} />
                  <Typography variant="body2" sx={{ color: '#646B75' }}>
                    Overview
                  </Typography>
                </Box>

                <Box sx={StyleBoxInformation()}>
                  <ContentCopyRoundedIcon sx={StyleIconInformation()} />
                  <Typography variant="body2" sx={{ color: '#646B75' }}>
                    My courses
                  </Typography>
                </Box>

                <Box sx={StyleBoxInformation()}>
                  <CreateIcon sx={StyleIconInformation()} />
                  <Typography variant="body2" sx={{ color: '#646B75' }}>
                    Projects
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box sx={{ padding: { lg: '8% 35px 8% 10px', md: '10% 10px', sm: '8% 10px', xs: '20% 10px' } }}>
        <Grid container spacing={4}>
          <Grid lg={4} md={6} sm={6} xs={12}>
            <Box
              sx={{ display: 'flex', flexDirection: 'column', gap: { lg: '30px', md: '30px', sm: '20px', xs: '20px' } }}
            >
              <Typography sx={{ color: '#262C3A' }} variant="h5">
                Platform Settings
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: { lg: '30px', md: '30px', sm: '20px', xs: '20px' },
                }}
              >
                {/* account */}
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <Typography variant="h6" sx={{ color: '#3A416F' }}>
                    ACCOUNT
                  </Typography>
                  <Box sx={StyleBoxSwitch()}>
                    <Switch defaultChecked size="medium" />
                    <Typography variant="body2" sx={{ color: '#90979F' }}>
                      Email me when someone answers me
                    </Typography>
                  </Box>
                </Box>
                {/* Application */}
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <Box>
                    <Typography variant="h6" sx={{ color: '#3A416F' }}>
                      APPLICATION
                    </Typography>
                  </Box>
                  <Box sx={StyleBoxSwitch()}>
                    <Switch defaultChecked />
                    <Typography variant="body2" sx={{ color: '#90979F' }}>
                      New launches and projects
                    </Typography>
                  </Box>
                  <Box sx={StyleBoxSwitch()}>
                    <Switch disabled />
                    <Typography variant="body2" sx={{ color: '#90979F' }}>
                      Monthly product updates
                    </Typography>
                  </Box>
                  <Box sx={StyleBoxSwitch()}>
                    <Switch defaultChecked />
                    <Typography variant="body2" sx={{ color: '#90979F' }}>
                      Subscribe to newsletter
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>

          <Grid lg={4} md={6} sm={6} xs={12}>
            <Box
              sx={{ display: 'flex', flexDirection: 'column', gap: { lg: '30px', md: '30px', sm: '20px', xs: '15px' } }}
            >
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="h5">Profile Information</Typography> <CreateIcon />
              </Box>
              <Box sx={{ maxWidth: { lg: '450px', md: '100%', sm: '95%', xs: '100%' } }}>
                <Typography variant="body2" sx={{ color: '#90979F' }}>
                  {`Hi, I'm Alec Thompson, Decisions: If you can't decide, the answer is no. If two equally difficult
                  paths, choose the one more painful in the short term (pain avoidance is creating an illusion of
                  equality).`}
                </Typography>
              </Box>
              <Box sx={{ border: '1px solid #ECF0F1' }} />
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <Box sx={StyleBoxInformation1()}>
                  <Typography variant="body1" sx={StyleColorTextInformation()}>
                    Full Name:
                  </Typography>
                  <Typography sx={StyleColorTextApiInformation()} variant="body2">
                    {user?.name}
                  </Typography>
                </Box>
                <Box sx={StyleBoxInformation1()}>
                  <Typography variant="body1" sx={StyleColorTextInformation()}>
                    Mobile:
                  </Typography>
                  <Typography sx={StyleColorTextApiInformation()} variant="body2">
                    {user?.phone}
                  </Typography>
                </Box>
                <Box sx={StyleBoxInformation1()}>
                  <Typography variant="body1" sx={StyleColorTextInformation()}>
                    Email:
                  </Typography>
                  <Typography sx={StyleColorTextApiInformation()} variant="body2">
                    {user?.email}
                  </Typography>
                </Box>
                <Box sx={StyleBoxInformation1()}>
                  <Typography variant="body1" sx={StyleColorTextInformation()}>
                    Address:
                  </Typography>
                  <Typography sx={StyleColorTextApiInformation()} variant="body2">
                    {user?.address}
                  </Typography>
                </Box>
                <Box sx={StyleBoxInformation1()}>
                  <Typography variant="body1" sx={StyleColorTextInformation()}>
                    Social:
                  </Typography>
                  <Box sx={{ display: 'flex', gap: '15px' }}>
                    <FacebookOutlinedIcon />
                    <FacebookOutlinedIcon />
                    <FacebookOutlinedIcon />
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
          {/* Teachers */}
          <Grid lg={4} md={6} sm={6} xs={12}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <Typography variant="h5">Teachers</Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <Box component="img" src="/assets/avatar-3.png" sx={{ width: '60px' }} />
                    <Box>
                      <Typography variant="body1"> Sophie B.</Typography>
                      <Typography variant="body2" sx={StyleColorTextInformation()}>
                        Hi i need more information
                      </Typography>
                    </Box>
                  </Box>
                  <Box>
                    <Typography variant="h6" sx={{ color: '#CE0090' }}>
                      REPLY
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <Box component="img" src="/assets/avatar-3.png" sx={{ width: '60px' }} />
                    <Box>
                      <Typography variant="body1"> Sophie B.</Typography>
                      <Typography variant="body2" sx={StyleColorTextInformation()}>
                        Hi i need more information
                      </Typography>
                    </Box>
                  </Box>
                  <Box>
                    <Typography variant="h6" sx={{ color: '#CE0090' }}>
                      REPLY
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <Box component="img" src="/assets/avatar-3.png" sx={{ width: '60px' }} />
                    <Box>
                      <Typography variant="body1"> Sophie B.</Typography>
                      <Typography variant="body2" sx={StyleColorTextInformation()}>
                        Hi i need more information
                      </Typography>
                    </Box>
                  </Box>
                  <Box>
                    <Typography variant="h6" sx={{ color: '#CE0090' }}>
                      REPLY
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <Box component="img" src="/assets/avatar-3.png" sx={{ width: '60px' }} />
                    <Box>
                      <Typography variant="body1"> Sophie B.</Typography>
                      <Typography variant="body2" sx={StyleColorTextInformation()}>
                        Hi i need more information
                      </Typography>
                    </Box>
                  </Box>
                  <Box>
                    <Typography variant="h6" sx={{ color: '#CE0090' }}>
                      REPLY
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <Box component="img" src="/assets/avatar-3.png" sx={{ width: '60px' }} />
                    <Box>
                      <Typography variant="body1"> Sophie B.</Typography>
                      <Typography variant="body2" sx={StyleColorTextInformation()}>
                        Hi i need more information
                      </Typography>
                    </Box>
                  </Box>
                  <Box>
                    <Typography variant="h6" sx={{ color: '#CE0090' }}>
                      REPLY
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
