'use client';

import * as React from 'react';
import Box from '@mui/material/Box';

import usePageLoading from '@/components/loading/EffectLoading';

// import { UseLoading } from '@/components/loading/use';

export default function LabTabs(): React.JSX.Element {
  usePageLoading();
  // const {IsLoading} = UseLoading();
  // function handleChange(event: React.SyntheticEvent, newValue: string):void {
  //   setValue(newValue);
  // };
  // campus

  return (
    //   <Box sx={{ width: '100%',paddingLeft:{lg:'10px',md:'10px',sm:"0px",xs:"0px"} }}>
    //     {IsLoading ?(
    //       <Loading/>
    //     ):(
    //       <TabContext value={value}>
    //       <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
    //       <TabList onChange={handleChange} aria-label="lab API tabs example">
    //         <Tab label={<Typography  >OverView</Typography>}  value="1"/>
    //         <Tab  label={<Typography >Campus</Typography>} value="2" />
    //         <Tab label={<Typography  component="h2">Students</Typography>} value="3" />
    //         <Tab label={<Typography >Learning</Typography>} value="4" />
    //         </TabList>
    //         </Box>
    //         <TabPanel sx={{padding:"0px"}} value="1">
    //         <Box >
    //             <Box sx={{
    //               textDecoration:"none",
    //               fontSize:"22px",
    //               fontWeight:"500",
    //               fontFamily:"sans-serif",
    //           }}>
    //                 <Grid  container >

    //                    <Grid sx={{display:"flex",justifyContent:"center",backgroundColor:"#FAFAFA", textAlign:"center"}} xs={6} sm={4} md={4} lg={4}  >
    //                       <Link style={{textDecoration:"none"}}  href="">
    //                       <Box  sx={StyleBoxTab()}>
    //                           <span><HolidayVillageIcon style={{fontSize:"64px"}}/></span>
    //                           <span>2</span>
    //                           <strong>Campus</strong>
    //                           <Button variant="outlined" sx={{border:"1px solid gray",fontWeight:"700", marginTop:"10px", fontSize:{lg:"16px", md:"14px", sm:"14px",xs:"10px" }}}  disabled>
    //                           View All <ArrowRightAltIcon/>
    //                         </Button>
    //                       </Box>
    //                       </Link>
    //                    </Grid>
    //                    <Grid sx={{display:"flex",justifyContent:"center",backgroundColor:"#FAFAFA" ,textAlign:"center"}} xs={6} sm={4} md={4} lg={4}  >
    //                       <Link style={{textDecoration:"none"}}  href="">
    //                       <Box  sx={StyleBoxTab()}>
    //                           <span><HolidayVillageIcon style={{fontSize:"64px"}}/></span>
    //                           <span>0</span>
    //                           <strong>Students</strong>
    //                           <Button variant="outlined" sx={{border:"1px solid gray", marginTop:"10px",backgroundColor:"yellow",'&:hover':{background:"yellow"}, color:"#29255E", fontSize:{lg:"16px", md:"14px", sm:"14px",xs:"10px" },fontWeight:"600"}}  >
    //                           View All <ArrowRightAltIcon/>
    //                         </Button>
    //                       </Box>
    //                       </Link>
    //                    </Grid>
    //                    <Grid sx={{display:"flex",justifyContent:"center",backgroundColor:"#FAFAFA", textAlign:"center"}} xs={6} sm={4} md={4} lg={4}  >
    //                       <Link style={{textDecoration:"none"}}  href="">
    //                       <Box  sx={StyleBoxTab()}>
    //                          <span><LibraryBooksIcon style={{fontSize:"64px"}}/></span>
    //                           <span>11</span>
    //                           <strong>Course</strong>
    //                           <Button variant="outlined" sx={{border:"1px solid gray", marginTop:"10px", fontSize:{lg:"16px", md:"14px", sm:"14px",xs:"10px" },fontWeight:"600"}}  disabled>
    //                           View All <ArrowRightAltIcon/>
    //                         </Button>
    //                       </Box>
    //                       </Link>
    //                    </Grid>
    //                 </Grid>
    //               </Box>
    //         </Box>
    //         </TabPanel>
    //         <TabPanel sx={{padding:"10px 0px"}} value="2">
    //         <TableContainer component={Paper} sx={{border:"1px solid #ddd "}}>
    //    <Table sx={{ width:"100%" }} aria-label="simple table">
    //    <TableHead >
    //      <TableRow sx={{display:"flex", justifyContent:"space-between"}}>
    //        <TableCell onClick={ReversCode} sx={{display:"flex", alignItems:"center", width:"100%", color:"#898989", fontSize:{lg:"20px",md:"20px",sm:"15px",xs:"10px"},fontWeight:"700", cursor:"pointer"}}><FilterListIcon sx={{marginRight:"10px",transform: RotateCode ? "rotate(180deg)" : "0" }}  /> Campus Code</TableCell>
    //        <TableCell onClick={ReversName} sx={{display:"flex", alignItems:"center",width:"100%", color:"#898989", fontSize:{lg:"20px",md:"20px",sm:"15px",xs:"10px"},fontWeight:"700", cursor:"pointer"}}><FilterListIcon sx={{marginRight:"10px",transform: RotateName ? "rotate(180deg)" : "0" }}  /> Campus Name</TableCell>
    //      </TableRow>
    //    </TableHead>
    //    <TableBody>
    //      {Rows.map((row) => (
    //        <TableRow
    //          key={row.code}
    //          sx={{ '&:last-child td, &:last-child th': { border: 0 }, display:"flex" }}
    //        >
    //      <TableCell sx={{width:"100%", fontSize:{lg:"19px",md:"19px",sm:"15px",xs:"10px"}, fontWeight:"700" }}> {row.code} </TableCell>
    //      <TableCell sx={{width:"100%", fontSize:{lg:"19px",md:"19px",sm:"15px",xs:"10px"}, fontWeight:"700"}}> {row.name} </TableCell>
    //        </TableRow>
    //      ))}
    //    </TableBody>
    //  </Table>

    //  </TableContainer>
    //         </TabPanel>
    //         <TabPanel sx={{padding:"10px 0px"}} value="3">
    //         <TableContainer component={Paper} sx={{border:"1px solid #ddd "}}>
    //     <Table sx={{ width:"100%" }} aria-label="simple table">
    //       <TableHead >
    //         <TableRow >
    //           <Grid container >
    //             <Grid lg={4} md={4} sm={4} xs={4}>
    //             <TableCell onClick={ReverseEmail} sx={{display:"flex",border:"none", alignItems:"center", width:"100%", color:"#898989", fontSize:{lg:"20px",md:"20px",sm:"15px",xs:"10px"},fontWeight:"700", cursor:"pointer"}}><FilterListIcon sx={{marginRight:"10px", transform: RotateEmail ? "rotate(180deg)" : "0"}}  /> Email</TableCell>
    //             </Grid>
    //             <Grid lg={4} md={4} sm={4} xs={4}>
    //           <TableCell  sx={{display:"flex", alignItems:"center",border:"none", width:"100%", color:"#898989", fontSize:{lg:"20px",md:"20px",sm:"15px",xs:"10px"},fontWeight:"700", cursor:"pointer"}}><FilterListIcon sx={{marginRight:"10px" }}  /> Campus Code</TableCell>
    //             </Grid>
    //             <Grid lg={4} md={4} sm={4} xs={4}>
    //           <TableCell  sx={{display:"flex", alignItems:"center",border:"none",width:"100%", color:"#898989", fontSize:{lg:"20px",md:"20px",sm:"15px",xs:"10px"},fontWeight:"700", cursor:"pointer"}}><FilterListIcon sx={{marginRight:"10px"}}  /> Campus Name</TableCell>
    //             </Grid>
    //           </Grid>
    //         </TableRow>
    //       </TableHead>
    //       <TableBody>
    //         {Student.map((row) => (
    //           <TableRow
    //             key={row.code}
    //             sx={{ '&:td, &:last-child th': { border: 1 } }}
    //           >
    //             <Grid container >
    //               <Grid lg={4} md={4} sm={4} xs={5} >
    //               <TableCell sx={{width:"100%",border:"none", fontSize:{lg:"19px",md:"19px",sm:"15px",xs:"9px"}, fontWeight:"700" }}> {row.email} </TableCell>
    //               </Grid>
    //               <Grid lg={4} md={4} sm={4} xs={4}>
    //               <TableCell sx={{width:"100%",border:"none", fontSize:{lg:"19px",md:"19px",sm:"15px",xs:"9px"}, fontWeight:"700" }}> {row.code} </TableCell>
    //               </Grid>
    //               <Grid lg={4} md={4} sm={4} xs={3}>
    //               <TableCell sx={{width:"100%",border:"none", fontSize:{lg:"19px",md:"19px",sm:"15px",xs:"9px"}, fontWeight:"700"}}> {row.name} </TableCell>
    //               </Grid>
    //             </Grid>

    //           </TableRow>
    //         ))}
    //       </TableBody>
    //     </Table>
    //   </TableContainer>
    //         </TabPanel>
    //         <TabPanel value="4">
    //         <Grid container >
    //           <Grid lg={12} md={12} sm={12} xs={12} >
    //           <label style={{fontSize:"17px"}} htmlFor="select">Please Select a Course</label>
    //           <FormControl variant="outlined" fullWidth >
    //           <Select
    //       labelId="simple-select-label">
    //         <MenuItem>Male</MenuItem>
    //         <MenuItem>Female</MenuItem>
    //         <MenuItem>Orthers</MenuItem>
    //       </Select>
    //       </FormControl>
    //           </Grid>
    //       </Grid>
    //         </TabPanel>
    //       </TabContext>
    //     )}
    //   </Box>
    <Box />
  );
}
