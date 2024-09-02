'use client';

import * as React from 'react';
import { Avatar, Typography,Link } from '@mui/material';
import Box from '@mui/material/Box';
import DehazeIcon from '@mui/icons-material/Dehaze';
import RouterLink from 'next/link';

export function MainNav(): React.JSX.Element {
  return (
    <Box
      sx={{
        background: '#FFFFFF',
        borderBottom:"3px solid #EFF1F0",
        padding: {
          lg: '15px 40px 15px 40px',
          md: '15px 50px 15px 50px',
          sm: '10px 20px 10px 50px',
          xs: '15px 10px 10px 10px',
        },
        position: 'sticky',
        zIndex: 1300,
        top: {lg:0,md:0,sm:0,xs:0},
        height:{lg:"40px",md:"40px",sm:"40px",xs:"30px"}
      }}
    >
      <Box sx={{display:"flex", justifyContent:"space-between",alignItems:'center'}} >
     <Box sx={{display:"flex", gap:{lg:"5px",md:"5px",sm:"5px",xs:"15px"},alignItems:'center'}} >
      <DehazeIcon sx={{display:{lg:"none",md:"none",sm:"none",xs:"block"}}}  />
     <Box
          component="img"
          src="/assets/edutekit-logo.svg"
          sx={{
            width: { lg: '180px', md: '200px', sm: '200px', xs: '120px' },
          }}
        />
     </Box>
      <Box sx={{display:'flex', gap:{lg:"50px",md:"50px",sm:"50px",xs:"10px"},alignItems:"center"}} >
        <Link component={RouterLink} href="/" underline='none'>
        <Typography sx={{color:"#000000"}} >Explore Courses</Typography>
        </Link>
      <Avatar sx={{width:{lg:"40px",md:"40px",sm:"40px",xs:"25px"},height:{lg:"40px",md:"40px",sm:"40px",xs:"25px"}}} src="/assets/avatar-6.png" />
      </Box>
      </Box>
    </Box>
  );
}
