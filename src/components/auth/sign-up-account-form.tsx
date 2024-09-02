// 'use client';

// import React, { useEffect } from 'react';
// import { FetchAuth, Post, PostWithAuth } from '@/services/api/utils/axios-rest';
// import CheckCircleIcon from '@mui/icons-material/CheckCircle';
// import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
// import CloseIcon from '@mui/icons-material/Close';
// import DoneIcon from '@mui/icons-material/Done';
// import {
//   Alert,
//   Box,
//   Button,
//   Container,
//   FormControl,
//   GlobalStyles,
//   InputLabel,
//   MenuItem,
//   Modal,
//   Select,
//   TextField,
//   Typography,
// } from '@mui/material';
// import Grid from '@mui/material/Unstable_Grid2';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { Eye as EyeIcon } from '@phosphor-icons/react/dist/ssr/Eye';
// import { EyeSlash as EyeSlashIcon } from '@phosphor-icons/react/dist/ssr/EyeSlash';
// import dayjs from 'dayjs';
// import { useFormik } from 'formik';
// import { motion } from 'framer-motion';
// import { toast, ToastContainer } from 'react-toastify';
// import * as Yup from 'yup';

// import {
//   type DataCourseCategories,
//   type DataPackageCourse,
//   type DataToken,
//   type DataUserResponse,
// } from '@/types/interface';

// import { UseLoading } from '../loading/use';
// import {
//   StyleAlert,
//   StyleBorderBox,
//   StyleBox1Signup,
//   StyleBox2Signup,
//   StyleDoneIcon,
//   StyleDoneIconNoActive,
//   StyleFontSizePrice,
//   StyleFormControl,
//   StyleIconDone,
//   StyleIconDonePrice,
//   StyleLineHeight,
//   StylePasswordcontrol,
// } from './style';
// import { UseAuth } from './use';

// import 'react-toastify/dist/ReactToastify.css';

// import { REDIRECT_URL_CMS } from '@/config';

// import Loading from '../loading/page';

// const style = {
//   position: 'absolute',
//   top: { lg: '50%', md: '30%', sm: '35%', xs: '50%' },
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: { lg: '30%', md: '70%', sm: '70%', xs: '80%' },
//   bgcolor: 'background.paper',
//   borderRadius: '12px',
//   boxShadow: 24,
//   padding: '15px',
// };
// // Validate
// const schema = new Yup.ObjectSchema().shape({
//   name: Yup.string().required('Name is required'),
//   phone: Yup.string()
//     .required('Phone number is required')
//     .matches(/^(?:0?)(?:3[2-9]|5[689]|7[01689]|8[1-9]|9[0-9])[0-9]{7}$/, 'Invalid phone number'),
//   email: Yup.string().required('Email is required').email('Invalid email format'),
//   gender: Yup.string().required('Gender is required'),
//   address: Yup.string().required('Address is required'),
//   password: Yup.string().required('Password is required').min(6, 'Password must be at least 6 characters long'),
//   confirmpassword: Yup.string()
//     .required('Password confirmation is required')
//     .min(6, 'Password confirmation must be at least 6 characters long')
//     .oneOf([Yup.ref('password')], 'Passwords do not match'),
// });

// const schema1 = new Yup.ObjectSchema().shape({
//   otp: Yup.string().required('Please enter OTP'),
// });

// interface DataSignUpAccount {
//   data: string;
// }
// interface ArrGroupCoures {
//   ArrPackage: DataPackageCourse;
// }
// export default function SignUpAdminForm({ ArrPackage }: ArrGroupCoures): React.JSX.Element {
//   const { IsLoading, setIsLoading } = UseLoading();
//   const {
//     ShowAlert,
//     setShowAlert,
//     IsModal,
//     setIsModal,
//     Disabled,
//     setDisabled,
//     ShowPassword,
//     setShowPassword,
//     ShowConfirmPassword,
//     setShowConfirmPassword,
//     NumberActive,
//     setNumberActive,
//     GetIdChildCategory,
//     setGetIdChildCategory,
//     SignUpFailed,
//     setSignUpFailed,
//     ActivePrice,
//     setActivePrice,
//     Day,
//     Month,
//     Year,
//     setDay,
//     setMonth,
//     setYear,
//     ResponseEmail,
//     setResponseEmail,
//     ArrGroupCategories,
//     setArrGroupCategories,
//     Direction,
//     setDirection,
//   } = UseAuth();
//   // validate form 1
//   const formik = useFormik({
//     initialValues: {
//       name: '',
//       phone: '',
//       email: '',
//       birthday: '',
//       gender: '',
//       address: '',
//       password: '',
//       confirmpassword: '',
//     },
//     validationSchema: schema,
//     onSubmit: async (values): Promise<void> => {
//       setDisabled(true);
//       // Check Mail and  phone
//       const CheckMail = {
//         email: values.email,
//       };
//       const CheckPhone = {
//         phone: values.phone,
//       };
//       try {
//         const responsePhone: DataSignUpAccount = await Post('auth/v1/check-phone', CheckPhone);
//         const responseEmail: DataSignUpAccount = await Post('auth/v1/check-email', CheckMail);
//         // Check true
//         if (responseEmail.data || responsePhone.data) {
//           setShowAlert(true);
//           setDisabled(false);
//         } else {
//           // send email
//           try {
//             await Post('auth/v1/send-otp-email', CheckMail);
//             setIsModal(true);
//             setShowAlert(false);
//           } catch (error) {
//             console.log('Send otp Failed');
//           }
//           setDisabled(true);
//         }
//       } catch (error) {
//         console.log('Check Failed');
//       }
//     },
//   });
//   const { values, handleSubmit, handleChange, handleBlur, errors, touched } = formik;
//   // validate form 2
//   const formik1 = useFormik({
//     initialValues: {
//       otp: '',
//     },
//     validationSchema: schema1,
//     onSubmit: async (): Promise<void> => {
//       setDisabled(true);
//       const ArrSignUpAccount = {
//         name: values.name,
//         email: values.email,
//         password: values.confirmpassword,
//         phone: values.phone,
//         birthday: `${Day}-${Month}-${Year}`,
//         address: values.address,
//         gender: values.gender,
//         otp: formik1.values.otp,
//       };
//       try {
//         const responseUser: DataToken = await Post('auth/v1/teacher-register', ArrSignUpAccount);
//         setNumberActive(2);
//         localStorage.setItem('custom-auth-token', responseUser.data.accessToken);
//         const responseGroupCategories: DataCourseCategories = await FetchAuth(
//           'course/v1/user-get-setting-course-categories'
//         );
//         setArrGroupCategories(responseGroupCategories?.data);
//       } catch (error) {
//         setSignUpFailed(true);
//       }
//     },
//   });
//   // resend email
//   async function resend(): Promise<void> {
//     const resẹndEmail = {
//       email: values.email,
//     };
//     try {
//       await Post('auth/v1/send-otp-email', resẹndEmail);
//       console.log('send success');
//     } catch (error) {
//       console.log('Resend email failed');
//     }
//   }
//   // Fetch Course Categories
//   async function FetchGroupCategories(): Promise<void> {
//     const responseGroupCategories: DataCourseCategories = await FetchAuth(
//       'course/v1/user-get-setting-course-categories'
//     );
//     // set state
//     setArrGroupCategories(responseGroupCategories?.data);
//     // filter active
//     const CheckActive = responseGroupCategories.data.map((item) => item.categories.filter((item1) => item1.isActive));
//     // check active
//     const check = CheckActive.map((item) => item.some((item1) => item1.isActive));
//     setGetIdChildCategory(check);
//   }
//   // Check step
//   async function CheckStep(): Promise<void> {
//     if (localStorage.getItem('custom-auth-token')) {
//       setIsLoading(true);
//       const responestep: DataUserResponse = await FetchAuth('auth/v1/me');
//       setResponseEmail(responestep.data.email);
//       if (responestep.data.step !== 4) {
//         setNumberActive(responestep.data.step + 1);
//         setIsLoading(false);
//       }
//     }
//   }
//   // useEffect
//   useEffect(() => {
//     if (localStorage.getItem('custom-auth-token')) {
//       void FetchGroupCategories();
//     }
//     void CheckStep();
//   }, []);
//   // format date
//   const handleDayChange = (date: unknown) => {
//     if (date && dayjs.isDayjs(date)) {
//       const day = date.date();
//       setDay(day.toString());
//     }
//   };
//   const handleMonthChange = (date: unknown) => {
//     if (date && dayjs.isDayjs(date)) {
//       const month = date.month() + 1;
//       setMonth(month.toString());
//     }
//   };
//   const handleYearChange = (date: unknown) => {
//     if (date && dayjs.isDayjs(date)) {
//       const year = date.year();
//       setYear(year.toString());
//     }
//   };
//   async function Skip2(): Promise<void> {
//     setDirection(true);
//     setNumberActive(3);
//   }
//   function handleClose(): void {
//     setIsModal(!IsModal);
//     setDisabled(!Disabled);
//   }
//   async function ChangeLinhVuc(e: string): Promise<void> {
//     const id = {
//       category_id: e,
//     };
//     try {
//       await PostWithAuth('course/v1/user-setting-course-categories', id);
//     } catch {
//       toast.error('Phải có ít nhất 1 danh mục');
//     }
//     const responseGroupCategories: DataCourseCategories = await FetchAuth(
//       'course/v1/user-get-setting-course-categories'
//     );
//     setArrGroupCategories(responseGroupCategories.data);
//     const CheckActive = ArrGroupCategories.map((item) => item.categories.filter((item1) => item1.isActive));
//     const check = CheckActive.map((item) => item.some((item1) => item1.isActive));
//     setGetIdChildCategory(check);
//   }
//   async function Skip3(): Promise<void> {
//     setNumberActive(4);
//     setDirection(true);
//     const objIdPackage = {
//       packageId: ActivePrice,
//     };
//     await PostWithAuth('purchase/v1/user-purchase-package', objIdPackage);
//   }
//   function Pre(): void {
//     setDirection(false);
//     setNumberActive(NumberActive - 1);
//   }
//   function ClickActive(id: string): void {
//     setActivePrice(id);
//   }
//   function finish(): void {
//     const accessToken = localStorage.getItem('custom-auth-token');
//     if (accessToken) {
//       window.location.href = `${REDIRECT_URL_CMS}?create_sso2_ticket=${accessToken}`;
//     }
//   }
//   if (IsLoading) {
//     return <Loading />;
//   }
//   return (
//     <Container
//       sx={{
//         display: 'flex',
//         justifyContent: 'center',
//         padding: { lg: '8% 0px 3% 0px', md: '15% 0px 15%px 0px ', sm: '15% 0px 15% 0px ', xs: '20% 0px 20% 0px' },
//       }}
//     >
//       <GlobalStyles
//         styles={{
//           'button.MuiPickersMonth-monthButton.css-9wxn8j-MuiPickersMonth-monthButton': {
//             fontSize: '1rem !important',
//           },
//           'button.MuiPickersYear-yearButton.css-1h6xvdq-MuiPickersYear-yearButton': {
//             fontSize: '1rem !important',
//           },
//         }}
//       />
//       <ToastContainer />
//       <Box
//         sx={{
//           width: '100%',
//           display: 'flex',
//           flexDirection: 'column',
//           gap: { lg: '30px', md: '30px', sm: '30px', xs: '30px' },
//         }}
//       >
//         {/* title */}
//         <Box sx={{ textAlign: 'center' }}>
//           <Typography variant="h4">Register as a teacher</Typography>
//         </Box>
//         {/* active */}
//         <Box
//           sx={{
//             display: 'flex',
//             justifyContent: { lg: 'center', md: 'center', sm: 'space-around', xs: 'space-around' },
//             gap: { lg: '15px', md: '10px', sm: '5px', xs: '0px' },
//           }}
//         >
//           {/* Box title sign up account */}
//           <Box sx={StyleBox1Signup()}>
//             <Box sx={StyleBox2Signup()}>
//               <Box
//                 sx={{
//                   border: NumberActive >= 1 ? '2px solid #62D84E' : '2px solid #E0E0E0',
//                   padding: '1px 1px',
//                   width: { lg: '35px', md: '35px', sm: '35px', xs: '25px' },
//                   borderRadius: { lg: '8px', md: '8px', sm: '8px', xs: '6px' },
//                 }}
//               >
//                 <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//                   <Typography
//                     sx={{
//                       background: NumberActive >= 1 ? '#62D84E' : '#E0E0E0',
//                       borderRadius: { lg: '8px', md: '8px', sm: '8px', xs: '6px' },
//                       display: 'flex',
//                       width: { lg: '35px', md: '35px', sm: '35px', xs: '20px' },
//                       height: { lg: '25px', md: '25px', sm: '25px', xs: '15px' },
//                       alignItems: 'center',
//                       justifyContent: 'center',
//                       padding: NumberActive >= 1 ? '3px' : '5px 0px 1px 0px',
//                     }}
//                     variant="h6"
//                   >
//                     {NumberActive >= 1 ? <DoneIcon sx={StyleIconDone()} /> : 1}
//                   </Typography>
//                 </Box>
//               </Box>
//               <Typography sx={StyleLineHeight()} variant={NumberActive >= 1 ? 'h6' : 'body2'}>
//                 Information
//               </Typography>
//             </Box>
//           </Box>
//           <Box sx={StyleBox1Signup()}>
//             <Typography sx={{ display: { lg: 'block', md: 'block', sm: 'block', xs: 'none' } }}>------</Typography>
//             <Box sx={StyleBox2Signup()}>
//               <Box
//                 sx={{
//                   border: NumberActive >= 2 ? '2px solid #62D84E' : '2px solid #E0E0E0',
//                   padding: '1px 1px',
//                   width: { lg: '35px', md: '35px', sm: '35px', xs: '25px' },
//                   borderRadius: { lg: '8px', md: '8px', sm: '8px', xs: '6px' },
//                 }}
//               >
//                 <Box sx={{ display: 'flex', justifyContent: 'center', alignContent: 'center' }}>
//                   <Typography
//                     sx={{
//                       background: NumberActive >= 2 ? '#62D84E' : '#E0E0E0',
//                       borderRadius: { lg: '8px', md: '8px', sm: '8px', xs: '6px' },
//                       display: 'flex',
//                       width: { lg: '35px', md: '35px', sm: '35px', xs: '25px' },
//                       height: { lg: '25px', md: '25px', sm: '25px', xs: '15px' },
//                       alignItems: 'center',
//                       justifyContent: 'center',
//                       padding: NumberActive >= 2 ? '3px' : '5px 0px 1px 0px',
//                     }}
//                     variant="h6"
//                   >
//                     {NumberActive >= 2 ? <DoneIcon sx={StyleIconDone()} /> : '2'}
//                   </Typography>
//                 </Box>
//               </Box>
//               <Typography sx={StyleLineHeight()} variant={NumberActive >= 2 ? 'h6' : 'body2'}>
//                 Categories
//               </Typography>
//             </Box>
//           </Box>
//           <Box sx={StyleBox1Signup()}>
//             <Typography sx={{ display: { lg: 'block', md: 'block', sm: 'block', xs: 'none' } }}>------</Typography>
//             <Box sx={StyleBox2Signup()}>
//               <Box
//                 sx={{
//                   border: NumberActive >= 3 ? '2px solid #62D84E' : '2px solid #E0E0E0',
//                   padding: '1px 1px',
//                   width: { lg: '35px', md: '35px', sm: '35px', xs: '25px' },
//                   borderRadius: { lg: '8px', md: '8px', sm: '8px', xs: '6px' },
//                 }}
//               >
//                 <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//                   <Typography
//                     sx={{
//                       background: NumberActive >= 3 ? '#62D84E' : '#E0E0E0',
//                       borderRadius: { lg: '8px', md: '8px', sm: '8px', xs: '6px' },
//                       width: { lg: '35px', md: '35px', sm: '35px', xs: '25px' },
//                       height: { lg: '25px', md: '25px', sm: '25px', xs: '15px' },
//                       display: 'flex',
//                       justifyContent: 'center',
//                       alignItems: 'center',
//                       padding: NumberActive >= 3 ? '3px' : '5px 0px 1px 0px',
//                     }}
//                     variant="h6"
//                   >
//                     {NumberActive >= 3 ? <DoneIcon sx={StyleIconDone()} /> : 3}
//                   </Typography>
//                 </Box>
//               </Box>
//               <Typography sx={StyleLineHeight()} variant={NumberActive >= 3 ? 'h6' : 'body2'}>
//                 Package
//               </Typography>
//             </Box>
//           </Box>
//           <Box sx={StyleBox1Signup()}>
//             <Typography sx={{ display: { lg: 'block', md: 'block', sm: 'block', xs: 'none' } }}>------</Typography>
//             <Box sx={StyleBox2Signup()}>
//               <Box
//                 sx={{
//                   border: NumberActive >= 4 ? '2px solid #62D84E' : '2px solid #E0E0E0',
//                   padding: '1px 1px',
//                   width: { lg: '35px', md: '35px', sm: '35px', xs: '25px' },
//                   borderRadius: { lg: '8px', md: '8px', sm: '8px', xs: '6px' },
//                 }}
//               >
//                 <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//                   <Typography
//                     sx={{
//                       background: NumberActive >= 4 ? '#62D84E' : '#E0E0E0',
//                       borderRadius: { lg: '8px', md: '8px', sm: '8px', xs: '6px' },
//                       width: { lg: '35px', md: '35px', sm: '35px', xs: '25px' },
//                       height: { lg: '25px', md: '25px', sm: '25px', xs: '15px' },
//                       display: 'flex',
//                       justifyContent: 'center',
//                       alignItems: 'center',
//                       padding: NumberActive >= 4 ? '3px' : '5px 0px 1px 0px',
//                     }}
//                     variant="h6"
//                   >
//                     {NumberActive >= 4 ? <DoneIcon sx={StyleIconDone()} /> : 4}
//                   </Typography>
//                 </Box>
//               </Box>
//               <Typography sx={StyleLineHeight()} variant={NumberActive > 4 ? 'h6' : 'body2'}>
//                 Payment
//               </Typography>
//             </Box>
//           </Box>
//         </Box>
//         {/* Number Active 1 */}
//         {NumberActive === 1 && (
//           <motion.div
//             initial={{ opacity: 0, x: '-100%' }}
//             animate={{ opacity: 1, x: 0 }}
//             // exit={{ opacity: 1, x: "100%" }}
//             transition={{ duration: 0.5 }}
//           >
//             <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
//               <Box
//                 component="form"
//                 onSubmit={handleSubmit}
//                 sx={{
//                   display: 'flex',
//                   justifyContent: 'center',
//                   width: { lg: '30%', md: '35%', sm: '50%', xs: '70%' },
//                 }}
//               >
//                 <Box sx={{ display: 'flex', flexDirection: 'column', gap: '17px', width: '100%' }}>
//                   {/* name */}
//                   <FormControl sx={StyleFormControl()}>
//                     <TextField
//                       size="small"
//                       fullWidth
//                       onChange={handleChange}
//                       onBlur={handleBlur}
//                       value={values.name}
//                       error={Boolean(errors.name && touched.name)}
//                       label="Full Name"
//                       name="name"
//                     />
//                     {errors.name && touched.name ? (
//                       <Alert sx={StyleAlert()} severity="error">
//                         {errors.name}
//                       </Alert>
//                     ) : null}
//                   </FormControl>
//                   {/* email */}
//                   <FormControl sx={StyleFormControl()}>
//                     <TextField
//                       size="small"
//                       onChange={handleChange}
//                       onBlur={handleBlur}
//                       value={values.email}
//                       error={Boolean(errors.email && touched.email)}
//                       fullWidth
//                       label="Email"
//                       name="email"
//                     />
//                     {touched.email && errors.email ? (
//                       <Alert sx={StyleAlert()} severity="error">
//                         {errors.email}
//                       </Alert>
//                     ) : null}
//                   </FormControl>
//                   {/* phone */}
//                   <FormControl sx={StyleFormControl()}>
//                     <TextField
//                       size="small"
//                       onChange={handleChange}
//                       onBlur={handleBlur}
//                       value={values.phone}
//                       error={Boolean(errors.phone && touched.phone)}
//                       fullWidth
//                       label="Phone Number"
//                       name="phone"
//                     />
//                     {errors.phone && touched.phone ? (
//                       <Alert sx={StyleAlert()} severity="error">
//                         {errors.phone}
//                       </Alert>
//                     ) : null}
//                   </FormControl>
//                   {/* Password */}
//                   <FormControl sx={StylePasswordcontrol()}>
//                     <TextField
//                       size="small"
//                       onChange={handleChange}
//                       onBlur={handleBlur}
//                       value={values.password}
//                       error={Boolean(errors.password && touched.password)}
//                       fullWidth
//                       type={ShowPassword ? 'text' : 'password'}
//                       label="Password"
//                       id="demo-helper-text-misaligned1"
//                       name="password"
//                       autoComplete="on"
//                     />
//                     <Box
//                       sx={{
//                         position: 'absolute',
//                         top: { lg: 12, md: 10, sm: 10, xs: 8 },
//                         right: { lg: 10, md: 10, sm: 10, xs: 10 },
//                       }}
//                     >
//                       {ShowPassword ? (
//                         <EyeIcon
//                           cursor="pointer"
//                           fontSize="var(--icon-fontSize-md)"
//                           onClick={(): void => {
//                             setShowPassword(false);
//                           }}
//                         />
//                       ) : (
//                         <EyeSlashIcon
//                           cursor="pointer"
//                           fontSize="var(--icon-fontSize-md)"
//                           onClick={(): void => {
//                             setShowPassword(true);
//                           }}
//                         />
//                       )}
//                     </Box>
//                     {touched.password && errors.password ? (
//                       <Alert sx={StyleAlert()} severity="error">
//                         {errors.password}
//                       </Alert>
//                     ) : null}
//                   </FormControl>
//                   {/* Password Confirm */}
//                   <FormControl sx={StylePasswordcontrol()}>
//                     <TextField
//                       size="small"
//                       onChange={handleChange}
//                       onBlur={handleBlur}
//                       value={values.confirmpassword}
//                       error={Boolean(errors.confirmpassword && touched.confirmpassword)}
//                       fullWidth
//                       type={ShowConfirmPassword ? 'text' : 'password'}
//                       label="Confirm Password"
//                       name="confirmpassword"
//                       autoComplete="on"
//                     />
//                     <Box
//                       sx={{
//                         position: 'absolute',
//                         top: { lg: 12, md: 10, sm: 10, xs: 8 },
//                         right: { lg: 10, md: 10, sm: 10, xs: 10 },
//                       }}
//                     >
//                       {ShowConfirmPassword ? (
//                         <EyeIcon
//                           cursor="pointer"
//                           fontSize="var(--icon-fontSize-md)"
//                           onClick={(): void => {
//                             setShowConfirmPassword(false);
//                           }}
//                         />
//                       ) : (
//                         <EyeSlashIcon
//                           cursor="pointer"
//                           fontSize="var(--icon-fontSize-md)"
//                           onClick={(): void => {
//                             setShowConfirmPassword(true);
//                           }}
//                         />
//                       )}
//                     </Box>
//                     {errors.confirmpassword && touched.confirmpassword ? (
//                       <Alert sx={StyleAlert()} severity="error">
//                         {errors.confirmpassword}
//                       </Alert>
//                     ) : null}
//                   </FormControl>
//                   {/*  gender */}
//                   <FormControl size="small" sx={StylePasswordcontrol()}>
//                     <InputLabel
//                       sx={{ position: 'absolute', left: { lg: 0, md: 0, sm: 0, xs: 0 } }}
//                       id="demo-simple-select-label"
//                     >
//                       Gender
//                     </InputLabel>
//                     <Select
//                       error={Boolean(errors.gender && touched.gender)}
//                       labelId="demo-simple-select-label"
//                       id="demo-simple-select"
//                       name="gender"
//                       label="Gender"
//                       onChange={handleChange}
//                       onBlur={handleBlur}
//                       value={values.gender}
//                     >
//                       <MenuItem value="famale">Nam</MenuItem>
//                       <MenuItem value="male">Nữ</MenuItem>
//                       <MenuItem value="khac">Khác</MenuItem>
//                     </Select>
//                     {errors.gender && touched.gender ? (
//                       <Alert sx={StyleAlert()} severity="error">
//                         {errors.gender}
//                       </Alert>
//                     ) : null}
//                   </FormControl>
//                   {/* Birthday */}
//                   <FormControl sx={StyleFormControl()}>
//                     <LocalizationProvider dateAdapter={AdapterDayjs}>
//                       <DemoContainer
//                         sx={{ paddingTop: '0px', overflow: 'unset', display: 'flex' }}
//                         components={['DatePicker']}
//                       >
//                         <Box sx={{ display: 'flex', gap: '10px' }}>
//                           {/* Day */}
//                           <DatePicker
//                             onChange={handleDayChange}
//                             label="Day "
//                             slotProps={{
//                               textField: { size: 'small' },
//                               day: { sx: { fontSize: { lg: '0.8rem', md: '0.8rem', sm: '0.8rem', xs: '0.8rem' } } },
//                             }}
//                             views={['day']}
//                           />
//                           {/* Month */}
//                           <DatePicker
//                             onChange={handleMonthChange}
//                             label="Month"
//                             slotProps={{
//                               textField: { size: 'small' },
//                             }}
//                             format="MM"
//                             views={['month']}
//                           />
//                           {/* Year */}
//                           <DatePicker
//                             onChange={handleYearChange}
//                             label="Year"
//                             slotProps={{
//                               textField: { size: 'small' },
//                               day: { sx: { fontSize: '0.8rem' } },
//                             }}
//                             views={['year']}
//                           />
//                         </Box>
//                       </DemoContainer>
//                     </LocalizationProvider>
//                   </FormControl>
//                   {/* Address */}
//                   <FormControl sx={StyleFormControl()}>
//                     <TextField
//                       size="small"
//                       fullWidth
//                       onChange={handleChange}
//                       onBlur={handleBlur}
//                       value={values.address}
//                       error={Boolean(errors.address && touched.address)}
//                       label="Address"
//                       name="address"
//                     />
//                     {errors.address && touched.address ? (
//                       <Alert sx={StyleAlert()} severity="error">
//                         {errors.address}
//                       </Alert>
//                     ) : null}
//                   </FormControl>
//                   {/* alert */}
//                   <Box sx={StyleFormControl()}>
//                     {ShowAlert ? (
//                       <Alert sx={StyleAlert()} severity="error">
//                         Phone Or Mail đã tồn tại
//                       </Alert>
//                     ) : null}
//                   </Box>
//                   {/* Submit */}
//                   <FormControl sx={{ width: '100%', paddingTop: '4%' }}>
//                     <Button
//                       disabled={
//                         Boolean(
//                           errors.name ||
//                             errors.address ||
//                             errors.gender ||
//                             errors.confirmpassword ||
//                             errors.email ||
//                             errors.phone ||
//                             errors.password
//                         ) ||
//                         values.name === '' ||
//                         values.address === '' ||
//                         values.gender === '' ||
//                         Day === '' ||
//                         Month === '' ||
//                         Year === '' ||
//                         values.confirmpassword === '' ||
//                         values.password === '' ||
//                         values.email === '' ||
//                         values.phone === '' ||
//                         Boolean(Disabled)
//                       }
//                       type="submit"
//                       sx={{
//                         background: '#62D84E',
//                         padding: {
//                           lg: '8px 10px 4px 10px',
//                           md: '10px 10px 4px 10px',
//                           sm: '10px 10px 4px 10px',
//                           xs: '8px 10px 4px 10px',
//                         },
//                         '&:hover': { background: '#62D84E' },
//                       }}
//                       variant="contained"
//                     >
//                       <Typography variant="subtitle2">NEXT</Typography>
//                     </Button>
//                   </FormControl>
//                   {/* Modal */}
//                   <Modal
//                     open={IsModal}
//                     onClose={handleClose}
//                     aria-labelledby="modal-modal-title"
//                     aria-describedby="modal-modal-description"
//                   >
//                     <Box sx={style}>
//                       <Box
//                         onClick={handleClose}
//                         sx={{ display: 'flex', justifyContent: 'flex-end', cursor: 'pointer', paddingBottom: '10px' }}
//                       >
//                         <CloseIcon />
//                       </Box>
//                       <form action="" onSubmit={formik1.handleSubmit}>
//                         <FormControl sx={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '10px' }}>
//                           <Alert sx={StyleAlert()} severity="success">
//                             OTP has been sent to your email: {values.email}
//                           </Alert>
//                           <TextField
//                             sx={{ width: '100%' }}
//                             name="otp"
//                             label="Otp"
//                             value={formik1.values.otp}
//                             onChange={formik1.handleChange}
//                             onBlur={formik1.handleBlur}
//                           />
//                           {formik1.touched.otp && formik1.errors.otp ? (
//                             <Alert sx={StyleAlert()} severity="error">
//                               {formik1.errors.otp}
//                             </Alert>
//                           ) : null}
//                           {SignUpFailed ? (
//                             <Alert sx={StyleAlert()} severity="error">
//                               Your OTP is incorrect:
//                               <Typography onClick={resend} component="span" sx={{ cursor: 'pointer' }} variant="body2">
//                                 Resend!
//                               </Typography>
//                             </Alert>
//                           ) : null}
//                         </FormControl>
//                         <Button
//                           disabled={Boolean(formik1.errors.otp) || formik1.values.otp === ''}
//                           sx={{
//                             width: '100%',
//                             marginTop: '10px',
//                             background: '#62D84E',
//                             '&:hover': { background: '#62D84E' },
//                           }}
//                           type="submit"
//                           variant="contained"
//                         >
//                           Confirm
//                         </Button>
//                       </form>
//                     </Box>
//                   </Modal>
//                 </Box>
//               </Box>
//             </Box>
//           </motion.div>
//         )}
//         {/* Number Active 2 */}
//         {NumberActive === 2 && (
//           <motion.div
//             initial={{ opacity: 0, x: Direction ? '-100%' : '100%' }}
//             animate={{ opacity: 1, x: 0 }}
//             // exit={{ opacity: 1, x: "100%" }}
//             transition={{ duration: 0.5 }}
//           >
//             <Box sx={{ display: 'flex', justifyContent: 'center' }}>
//               <Box
//                 sx={{
//                   width: { lg: '65%', md: '65%', sm: '90%', xs: '90%' },
//                   display: 'flex',
//                   flexDirection: 'column',
//                   gap: { lg: '40px', md: '40px', sm: '40px', xs: '10px' },
//                 }}
//               >
//                 <Box sx={{ textAlign: 'start' }}>
//                   <Typography variant="subtitle1">Welcome to Edutekit !</Typography>
//                   <Typography variant="body2">
//                     Complete the information below so we can help you have a better experience.
//                   </Typography>
//                 </Box>
//                 <Box
//                   sx={{
//                     display: 'flex',
//                     flexDirection: 'column',
//                     gap: { lg: '30px', md: '20px', sm: '20px', xs: '20px' },
//                     background: '#f6f6f6',
//                     padding: { lg: '50px 35px 35px 30px', md: '20px 20px', sm: '20px 20px', xs: '10px 10px' },
//                     borderRadius: '12px',
//                   }}
//                 >
//                   <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
//                     <Typography variant="h5">Categories</Typography>
//                     <Typography variant="body1">Choose your teaching field </Typography>
//                   </Box>
//                   {/* Choose */}
//                   <Grid container spacing={3}>
//                     {ArrGroupCategories.map((item) => (
//                       <Grid key={item.id} lg={6} md={6} sm={6} xs={12} sx={{ position: 'relative' }}>
//                         <Box sx={StyleBorderBox()}>
//                           <Typography
//                             variant="body1"
//                             sx={{ position: 'absolute', top: -17, left: 15, background: '#f6f6f6', padding: '5px 5px' }}
//                           >
//                             {item.group_cate_title}
//                           </Typography>
//                           <Box sx={{ padding: '10px 5px 20px 5px' }}>
//                             <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
//                               {item.categories.map((item1) => (
//                                 <Box
//                                   key={item1.id}
//                                   onClick={() => {
//                                     void ChangeLinhVuc(item1.id);
//                                   }}
//                                   sx={{ display: 'flex', alignItems: 'center', gap: '5px' }}
//                                 >
//                                   {item1.isActive ? (
//                                     <CheckCircleIcon sx={StyleDoneIcon()} />
//                                   ) : (
//                                     <CircleOutlinedIcon sx={StyleDoneIconNoActive()} />
//                                   )}
//                                   <Typography variant="body1">{item1.course_cate_title}</Typography>
//                                 </Box>
//                               ))}
//                             </Box>
//                           </Box>
//                         </Box>
//                       </Grid>
//                     ))}
//                   </Grid>
//                 </Box>
//                 <Box sx={{ display: 'flex', justifyContent: 'center' }}>
//                   <Button
//                     disabled={!GetIdChildCategory.some((item) => item)}
//                     onClick={Skip2}
//                     variant="contained"
//                     sx={{
//                       width: { lg: '30%', md: '30%', sm: '30%', xs: '50%' },
//                       background: '#62D84E',
//                       '&:hover': { background: '#62D84E' },
//                       padding: '10px 10px 5px 10px',
//                     }}
//                   >
//                     NEXT
//                   </Button>
//                 </Box>
//               </Box>
//             </Box>
//           </motion.div>
//         )}
//         {/* Number Active 3 */}
//         {NumberActive === 3 && (
//           <motion.div
//             initial={{ opacity: 0, x: Direction ? '-100%' : '100%' }}
//             animate={{ opacity: 1, x: 0 }}
//             //  exit={{ opacity: 0, x: "-100%", }}

//             transition={{ duration: 0.5 }}
//           >
//             <Box sx={{ padding: '0px 20px 0px 20px' }}>
//               <Box>
//                 <Grid container spacing={2}>
//                   {ArrPackage.data.map((item) => (
//                     <Grid key={item.id} lg={4} md={6} sm={6} xs={12}>
//                       <Box
//                         onClick={() => {
//                           ClickActive(item.id);
//                         }}
//                         sx={{
//                           border: ActivePrice === item.id ? '2px solid #62D84E' : '2px solid #ECECEC',
//                           cursor: 'pointer',
//                           borderRadius: { lg: '8px', md: '8px', sm: '8px', xs: '6px' },
//                           padding: '20px 20px',
//                           display: 'flex',
//                           justifyContent: 'center',
//                           flexDirection: 'column',
//                           gap: '10px',
//                           '&:hover': { border: '2px solid #62D84E', background: '#F7F7F7' },
//                           background: ActivePrice === item.id ? '#F7F7F7' : '',
//                         }}
//                       >
//                         <Box sx={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '10px' }}>
//                           <Typography variant="body2" sx={{ color: '#A9A9A9' }}>
//                             {item.package_name}
//                           </Typography>
//                           {item.package_price !== 0 ? (
//                             <Typography variant="h5" sx={StyleFontSizePrice()}>
//                               {new Intl.NumberFormat('vi-VN', {
//                                 style: 'currency',
//                                 currency: 'VND',
//                                 maximumFractionDigits: 0,
//                               }).format(item.package_price)}
//                               /Tháng
//                             </Typography>
//                           ) : (
//                             <Typography variant="h5" sx={StyleFontSizePrice()}>
//                               Miễn Phí
//                             </Typography>
//                           )}
//                         </Box>
//                         <Box sx={{ display: 'flex', flexDirection: 'column' }}>
//                           <Box
//                             sx={{
//                               textAlign: 'center',
//                               minHeight: { lg: '80px', md: '100px', sm: '100px', xs: '50px' },
//                             }}
//                           >
//                             <Typography sx={{ fontSize: '0.8rem' }}>{item.package_description}</Typography>
//                           </Box>
//                           <Box
//                             sx={{
//                               display: 'flex',
//                               minHeight: { lg: '330px', md: '450px', sm: '400px', xs: '300px' },
//                               flexDirection: 'column',
//                               gap: { lg: '10px', md: '20px', sm: '20px', xs: '15px' },
//                               padding: '0px 4px',
//                             }}
//                           >
//                             <Box sx={{ borderBottom: '1px solid #EBEBEB' }} />
//                             {/* limit course */}
//                             {item.limit_course !== 9999 ? (
//                               <Typography variant="body1" sx={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
//                                 <DoneIcon sx={StyleIconDonePrice()} /> {item.limit_course} khoá học
//                               </Typography>
//                             ) : (
//                               <Typography variant="body1" sx={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
//                                 <DoneIcon sx={StyleIconDonePrice()} /> Số lượng khoá học không giới hạn
//                               </Typography>
//                             )}
//                             {/* Limit student */}
//                             <Typography variant="body1" sx={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
//                               <DoneIcon sx={StyleIconDonePrice()} /> {item.limit_student} học viên
//                             </Typography>
//                             {/* Limit admin */}
//                             <Typography variant="body1" sx={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
//                               <DoneIcon sx={StyleIconDonePrice()} /> {item.limit_administrator} quản trị viên
//                             </Typography>
//                             {/* limit teacher */}
//                             {item.limit_teacher !== 9999 ? (
//                               <Typography variant="body1" sx={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
//                                 <DoneIcon sx={StyleIconDonePrice()} /> {item.limit_teacher} giảng viên
//                               </Typography>
//                             ) : (
//                               <Typography variant="body1" sx={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
//                                 <DoneIcon sx={StyleIconDonePrice()} />
//                                 Số lượng giảng viên không giới hạn
//                               </Typography>
//                             )}
//                             {/* fee */}
//                             <Typography variant="body1" sx={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
//                               <DoneIcon sx={StyleIconDonePrice()} /> {item.transaction_fee}% phí giao dịch
//                             </Typography>
//                             {/* Affiliate  */}
//                             {item.is_affiliate ? (
//                               <Typography variant="body1" sx={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
//                                 <DoneIcon sx={StyleIconDonePrice()} />
//                                 Chương trình Affiliate
//                               </Typography>
//                             ) : (
//                               <Typography variant="body1" sx={{ textAlign: 'center' }}>
//                                 -
//                               </Typography>
//                             )}
//                             {/* brand */}
//                             {item.is_personal_branding ? (
//                               <Typography variant="body1" sx={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
//                                 <DoneIcon sx={StyleIconDonePrice()} />
//                                 Thương hiệu nhãn trắng
//                               </Typography>
//                             ) : (
//                               <Typography variant="body1" sx={{ textAlign: 'center' }}>
//                                 -
//                               </Typography>
//                             )}
//                             {/*sale*/}
//                             {item.is_business_and_sale_course ? (
//                               <Typography variant="body1" sx={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
//                                 <DoneIcon sx={StyleIconDonePrice()} />
//                                 Truy cập khoá học kinh doanh và cách bán hàng
//                               </Typography>
//                             ) : (
//                               <Typography variant="body1" sx={{ textAlign: 'center' }}>
//                                 -
//                               </Typography>
//                             )}
//                           </Box>
//                           <Box sx={{ display: 'flex', justifyContent: 'center' }}>
//                             <Button
//                               sx={{
//                                 width: '50%',
//                                 padding: '10px 20px 7px 20px',
//                                 background: ActivePrice === item.id ? '#5B5B5B' : '',
//                                 color: ActivePrice === item.id ? '#FFFFFF' : '#000000',
//                                 border: '1px solid #5B5B5B',
//                                 '&:hover': { border: '1px solid #5B5B5B', background: '#5B5B5B', color: '#FFFFFF' },
//                               }}
//                               variant="outlined"
//                             >
//                               <Typography variant="body2">Đăng ký</Typography>
//                             </Button>
//                           </Box>
//                         </Box>
//                       </Box>
//                     </Grid>
//                   ))}
//                 </Grid>
//               </Box>
//               <Box sx={{ display: 'flex', justifyContent: 'center', gap: '30px', padding: '30px' }}>
//                 <Button
//                   onClick={Pre}
//                   sx={{
//                     width: { lg: '20%', md: '30%', sm: '30%', xs: '50%' },
//                     padding: '10px 10px 5px 10px',
//                     background: '#E0E0E0',
//                     '&:hover': { background: '#000000' },
//                     color: '#FFFFFF',
//                   }}
//                   variant="contained"
//                 >
//                   BACK
//                 </Button>
//                 <Button
//                   disabled={ActivePrice === ''}
//                   onClick={Skip3}
//                   sx={{
//                     width: { lg: '20%', md: '30%', sm: '30%', xs: '50%' },
//                     padding: '10px 10px 5px 10px',
//                     background: '#62D84E',
//                     '&:hover': { background: '#62D84E' },
//                     color: '#FFFFFF',
//                   }}
//                   variant="contained"
//                 >
//                   NEXT
//                 </Button>
//               </Box>
//             </Box>
//           </motion.div>
//         )}
//         {/* Number Active 4 */}
//         {NumberActive === 4 && (
//           <motion.div
//             initial={{ opacity: 0, x: '-100%' }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0, x: '-100%' }}
//             transition={{ duration: 0.3 }}
//           >
//             <Box sx={{ display: 'flex', justifyContent: 'center' }}>
//               <Box
//                 sx={{
//                   width: '80%',
//                   border: '1px solid #62D84E',
//                   background: '#FAFAFA',
//                   borderRadius: { lg: '8px', md: '8px', sm: '8px', xs: '6px' },
//                   height: '50vh',
//                   display: 'flex',
//                   justifyContent: 'center',
//                   alignItems: 'center',
//                 }}
//               >
//                 <Box
//                   sx={{
//                     display: 'flex',
//                     flexDirection: 'column',
//                     gap: '40px',
//                   }}
//                 >
//                   <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px', textAlign: 'center' }}>
//                     <Typography variant="subtitle1">Congratulations on successfully registering!</Typography>
//                     <Box sx={{ display: 'flex', justifyContent: 'center' }}>
//                       <Typography sx={{ maxWidth: '68%', textAlign: 'start' }} variant="body1" component="span">
//                         Congratulations
//                         <Typography sx={{ padding: '0px 5px' }} variant="h6" component="span">
//                           {ResponseEmail},
//                         </Typography>
//                         your account has been created successfully! Detailed information has been sent to your email.
//                         Please verify your account information and complete your registration.
//                       </Typography>
//                     </Box>
//                   </Box>
//                   <Box sx={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
//                     <Button
//                       onClick={finish}
//                       sx={{
//                         width: { lg: '30%', md: '40%', sm: '40%', xs: '50%' },
//                         background: '#62D84E',
//                         padding: '10px 5px 8px 5px',
//                         '&:hover': { background: '#62D84E' },
//                       }}
//                       variant="contained"
//                     >
//                       <Typography sx={{ display: 'flex', alignItems: 'center' }} variant="body1">
//                         Complete !
//                         {/* <DoneIcon sx={{ fontSize: { lg: '1.5rem', md: '1.5rem', sm: '1.3rem', xs: '0.75rem' } }} /> */}
//                       </Typography>
//                     </Button>
//                   </Box>
//                 </Box>
//               </Box>
//             </Box>
//           </motion.div>
//         )}
//       </Box>
//     </Container>
//   );
// }
