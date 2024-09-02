"use client"
import type React from "react";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { useState } from "react";
import { Typography } from "@mui/material";

import { StyleTabCourse ,StyleIconTabCourse} from "./style";


 interface TabCourses{
    nameTab1?:string;
    nameTab2?:string;
    nameTab3?:string;
    iconTab1?:React.ReactNode
    iconTab2?:React.ReactNode
    iconTab3?:React.ReactNode
    tabPanel1?:React.ReactNode
    tabPanel2?:React.ReactNode
    tabPanel3?:React.ReactNode
}
export default function TabComponentCallBack({nameTab1,nameTab2,nameTab3,iconTab1,iconTab2,iconTab3,tabPanel1,tabPanel2,tabPanel3}:TabCourses):React.JSX.Element{
    const [value, setValue] = useState('1');
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
 return (
    <Box sx={{ width: '100%'}}>
      <TabContext value={value}>
        <Box sx={{padding:"0px 0px 0px 20px"}} >
          <TabList onChange={handleChange} textColor="primary"  aria-label="lab API tabs example">
            <Tab label={<Box sx={StyleTabCourse()} > <Box sx={StyleIconTabCourse()}>{iconTab1}</Box> <Typography variant="h6" > {nameTab1}</Typography></Box>} value="1" />
            <Tab label={<Box sx={StyleTabCourse()}> <Box sx={StyleIconTabCourse()}>{iconTab2}</Box><Typography variant="h6"> {nameTab2}</Typography></Box>} value="2" />
            <Tab label={<Box sx={StyleTabCourse()}><Box sx={StyleIconTabCourse()}>{iconTab3}</Box><Typography variant="h6" > {nameTab3} </Typography></Box>} value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">{tabPanel1}</TabPanel>
        <TabPanel value="2">{tabPanel2}</TabPanel>
        <TabPanel value="3">{tabPanel3}</TabPanel>
      </TabContext>
    </Box>
 )
}