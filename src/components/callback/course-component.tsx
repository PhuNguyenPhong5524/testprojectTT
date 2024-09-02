import React from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';
import ButtonComponentCalBack from './button-component';
import { type Course } from '@/types/interface';

interface CourseInterFace{
  ArrCourse:Course[]
}
export default function CourseComponentCallback({ArrCourse}:CourseInterFace): React.JSX.Element {
  return (
    <Box sx={{display:"flex", flexDirection:"column",gap:"15px"}} >
      {ArrCourse.map((item)=>  
      <Box key={item.id} sx={{background:"#FFFFFF",display:"flex",gap:"80px",padding:"15px 15px"}} >
        <Box sx={{display:"flex", alignItems:"center",gap:"15px"}} >
          {/* image */}
          <Box>
            <Box sx={{width:"300px",height:"200px",borderRadius:"8px"}} component="img" src="/assets/errorimage.jpg"  />
          </Box>
          {/* information */}
          <Box sx={{display:"flex", flexDirection:"column",gap:"10px",maxWidth:"500px"}}>
            <Typography sx={{color:'#8b9192'}} variant='body1' >{item.course_code}</Typography>
            <Typography variant='h5' >{item.course_name}</Typography>
            <Typography variant='body1' sx={{color:"#040404"}}>
              {`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text`}
            </Typography>
            <ButtonComponentCalBack text='Course Detail' variantbutton='outlined' paddinglg='10px 30px 6px 30px' variantfont='h6' background='#FFFFFF' backgroundhover='#FFFFFF'/>
          </Box>
        </Box>
        {/* progress */}
        <Box sx={{display:'flex',alignItems:"center",gap:"20px"}}>
        <Box sx={{border:"1px solid #F3F3F3",width:"100%",height:"100%"}} />
        <Box sx={{display:'flex', flexDirection:"column",gap:"10px"}} >
          <Typography variant='body2'>PROGRESS</Typography>
          <Typography variant='h5' >Complete</Typography>
        <Box position="relative" display="inline-flex">
      <CircularProgress 
        variant="determinate" 
        value={100} 
        size={120}
        sx={{ color: '#d3d3d3'}} // Phần chưa hoàn thành sẽ là màu xám
      />
      <Box
        top={0}
        left={0}
        bottom={0}
        right={0}
        position="absolute"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <CircularProgress 
          variant="determinate" 
          value={50} 
          size={120}
        />
      </Box>
      <Box
        top={0}
        left={0}
        bottom={0}
        right={0}
        position="absolute"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Typography variant="caption" component="div" color="textSecondary">
          50%
        </Typography>
      </Box>
    </Box>
        </Box>
        </Box>
      </Box>  
      )}
      {ArrCourse.map((item)=>  
      <Box key={item.id} sx={{background:"#FFFFFF",display:"flex",gap:"80px",padding:"15px 15px"}} >
        <Box sx={{display:"flex", alignItems:"center",gap:"15px"}} >
          {/* image */}
          <Box>
            <Box sx={{width:"300px",height:"200px",borderRadius:"8px"}} component="img" src="/assets/errorimage.jpg"  />
          </Box>
          {/* information */}
          <Box sx={{display:"flex", flexDirection:"column",gap:"10px",maxWidth:"500px"}}>
            <Typography sx={{color:'#8b9192'}} variant='body1' >{item.course_code}</Typography>
            <Typography variant='h5' >{item.course_name}</Typography>
            <Typography variant='body1' sx={{color:"#040404"}}>
              {`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text`}
            </Typography>
            <ButtonComponentCalBack text='Course Detail' variantbutton='outlined' paddinglg='10px 30px 6px 30px' variantfont='h6' background='#FFFFFF' backgroundhover='#FFFFFF'/>
          </Box>
        </Box>
        {/* progress */}
        <Box sx={{display:'flex',alignItems:"center",gap:"20px"}}>
        <Box sx={{border:"1px solid #F3F3F3",width:"100%",height:"100%"}} />
        <Box sx={{display:'flex', flexDirection:"column",gap:"10px"}} >
          <Typography variant='body2'>PROGRESS</Typography>
          <Typography variant='h5' >Complete</Typography>
        <Box position="relative" display="inline-flex">
      <CircularProgress 
        variant="determinate" 
        value={100} 
        size={120}
        sx={{ color: '#d3d3d3'}} // Phần chưa hoàn thành sẽ là màu xám
      />
      <Box
        top={0}
        left={0}
        bottom={0}
        right={0}
        position="absolute"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <CircularProgress 
          variant="determinate" 
          value={50} 
          size={120}
        />
      </Box>
      <Box
        top={0}
        left={0}
        bottom={0}
        right={0}
        position="absolute"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Typography variant="caption" component="div" color="textSecondary">
          50%
        </Typography>
      </Box>
    </Box>
        </Box>
        </Box>
      </Box>  
      )}
    </Box>
  );
}
