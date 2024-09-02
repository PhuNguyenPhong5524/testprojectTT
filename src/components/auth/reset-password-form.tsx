// 'use client';

// import React from 'react';
// import Image from 'next/image';
// import RouterLink from 'next/link';
// import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
// import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
// import CloseIcon from '@mui/icons-material/Close';
// import { Alert, Box, Button, Container, FormControl, Link, Modal, TextField, Typography } from '@mui/material';
// import { useFormik } from 'formik';
// import * as Yup from 'yup';

// import { type BaseRestResponse } from '@/types/base-response';
// import { type ResponseDataResetPassword } from '@/types/interface';
// import { NameLogin } from '@/config';
// import { usePopover } from '@/hooks/use-popover';

// import { StyleAlert, StylePasswordcontrol } from './style';
// import { UseAuth } from './use';

// const SignupSchema = new Yup.ObjectSchema().shape({
//   email: Yup.string().required('Email is required').email('Invalid email format'),
// });
// const SignupSchemapassword = new Yup.ObjectSchema().shape({
//   otp: Yup.string().required('OTP is required').min(6, 'OTP must be at least 6 digits'),
// });

// const SignupSchemaotp = new Yup.ObjectSchema().shape({
//   password: Yup.string().required('Password is required').min(6, 'Password must be at least 6 characters long'),
//   confirmpassword: Yup.string()
//     .required('Password confirmation is required')
//     .min(6, 'Password confirmation must be at least 6 characters long')
//     .oneOf([Yup.ref('password')], 'Passwords do not match'),
// });

// export default function ResetPasswordForm(): React.JSX.Element {
//   const style = {
//     position: 'absolute',
//     top: { lg: '50%', md: '30%', sm: '35%', xs: '50%' },
//     left: '50%',
//     transform: 'translate(-50%, -50%)',
//     width: { lg: '30%', md: '70%', sm: '70%', xs: '80%' },
//     bgcolor: 'background.paper',
//     borderRadius: '12px',
//     boxShadow: 24,
//     padding: '15px',
//   };
//   const { open, handleClose, handleOpen } = usePopover();
//   const {
//     ShowAlertEmail,
//     setShowAlertEmail,
//     DisabledMail,
//     setDisabledMail,
//     ShowAlertReset,
//     setShowAlertReset,
//     setResetFailed,
//   } = UseAuth();
//   // Email
//   const formik2 = useFormik({
//     initialValues: {
//       email: '',
//     },
//     validationSchema: SignupSchema,
//     onSubmit: async (): Promise<void> => {
//       const email = values.email;
//       try {
//         const checkEmail: ResponseDataResetPassword = await PostParams('auth/v1/send-otp-email-forgot', { email });
//         console.log(checkEmail.data);
//         setShowAlertEmail(false);
//         setDisabledMail(true);
//       } catch (error) {
//         setShowAlertEmail(true);
//       }
//     },
//   });
//   const { handleBlur, handleChange, handleSubmit, values, errors, touched } = formik2;

//   const formikpassword = useFormik({
//     initialValues: {
//       password: '',
//       confirmpassword: '',
//     },
//     validationSchema: SignupSchemaotp,
//     onSubmit: async (): Promise<void> => {
//       handleOpen();
//     },
//   });
//   const formikotp = useFormik({
//     initialValues: {
//       otp: '',
//     },
//     validationSchema: SignupSchemapassword,
//     onSubmit: async (): Promise<void> => {
//       try {
//         const objreset = {
//           email: formik2.values.email,
//           password: formikpassword.values.confirmpassword,
//           otp: formikotp.values.otp,
//         };
//         const data = await Post<BaseRestResponse<string>>('auth/v1/set-password-forgot', objreset);
//         console.log(data.error);
//         window.location.href = '/auth/sign-in';
//       } catch (error) {
//         handleClose();
//         setShowAlertReset(false);
//         setShowAlertReset(true);
//         setResetFailed(true);
//       }
//     },
//   });

//   return (
//     <Box
//       sx={{
//         width: '100%',
//         height: '100vh',
//         position: 'fixed',
//         paddingTop: { lg: '10%', md: '15%', sm: '20%', xs: '20%' },
//       }}
//     >
//       <Container
//         sx={{
//           padding: {
//             lg: '30px 0px 80px 0px',
//             md: '30px 0px 80px 0px',
//             sm: '30px 20px 80px 20px',
//             xs: '20px 15px 80px 15px',
//           },
//         }}
//       >
//         <Box
//           sx={{
//             paddingTop: '50px',
//             display: 'flex',
//             justifyContent: 'center',
//             alignItems: 'center',
//             width: '100%',
//           }}
//         >
//           <Box
//             sx={{
//               width: '100%',
//               maxWidth: '550px', // Giới hạn chiều rộng tối đa cho hộp con
//               display: 'flex',
//               flexDirection: 'column',
//               gap: '60px',
//             }}
//           >
//             <Box>
//               <Typography variant="h4" sx={{ textAlign: 'center' }}>
//                 {' '}
//                 Reset password with {NameLogin}{' '}
//               </Typography>
//             </Box>
//             {/* all field */}
//             <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
//               {/* field */}
//               <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column' }}>
//                 <FormControl sx={{ width: '100%' }}>
//                   <TextField
//                     disabled={DisabledMail}
//                     sx={{ width: '100%', position: 'relative' }}
//                     label="Email "
//                     name="email"
//                     value={values.email}
//                     onChange={handleChange}
//                     onBlur={handleBlur}
//                     error={Boolean(errors.email && touched.email)}
//                   />
//                   <Box
//                     component="button"
//                     type="submit"
//                     disabled={DisabledMail}
//                     sx={{
//                       position: 'absolute',
//                       color: 'red',
//                       top: 15,
//                       right: 10,
//                       background: 'transparent',
//                       border: 'none',
//                       cursor: 'pointer',
//                     }}
//                   >
//                     <ArrowCircleRightOutlinedIcon sx={{ color: '#989898' }} />
//                   </Box>
//                   {formik2.errors.email ? (
//                     <Alert sx={StyleAlert()} severity="error">
//                       {formik2.errors.email}
//                     </Alert>
//                   ) : null}
//                 </FormControl>
//                 {ShowAlertEmail ? (
//                   <Alert sx={StyleAlert()} severity="error">
//                     Email của bạn chưa đúng !
//                   </Alert>
//                 ) : null}
//               </Box>
//               {DisabledMail ? (
//                 <Box
//                   component="form"
//                   onSubmit={formikpassword.handleSubmit}
//                   sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
//                 >
//                   {/* Password */}
//                   <FormControl sx={StylePasswordcontrol()}>
//                     <TextField
//                       onChange={formikpassword.handleChange}
//                       onBlur={formikpassword.handleBlur}
//                       value={formikpassword.values.password}
//                       error={Boolean(formikpassword.errors.password && formikpassword.touched.password)}
//                       fullWidth
//                       type="password"
//                       label="Password"
//                       id="demo-helper-text-misaligned1"
//                       name="password"
//                       autoComplete="on"
//                     />
//                     {formikpassword.touched.password && formikpassword.errors.password ? (
//                       <Alert sx={StyleAlert()} severity="error">
//                         {formikpassword.errors.password}
//                       </Alert>
//                     ) : null}
//                   </FormControl>
//                   {/* Password Confirm */}
//                   <FormControl sx={StylePasswordcontrol()}>
//                     <TextField
//                       sx={{ position: 'relative' }}
//                       onChange={formikpassword.handleChange}
//                       onBlur={formikpassword.handleBlur}
//                       value={formikpassword.values.confirmpassword}
//                       error={Boolean(formikpassword.errors.confirmpassword && formikpassword.touched.confirmpassword)}
//                       fullWidth
//                       type="password"
//                       label="Confirm Password"
//                       name="confirmpassword"
//                       autoComplete="on"
//                     />
//                     <Box
//                       component="button"
//                       type="submit"
//                       sx={{
//                         position: 'absolute',
//                         color: 'red',
//                         top: 15,
//                         right: 10,
//                         background: 'transparent',
//                         border: 'none',
//                         cursor: 'pointer',
//                       }}
//                     >
//                       <ArrowCircleRightOutlinedIcon sx={{ color: '#989898' }} />
//                     </Box>
//                     {formikpassword.errors.confirmpassword && formikpassword.touched.confirmpassword ? (
//                       <Alert sx={StyleAlert()} severity="error">
//                         {formikpassword.errors.confirmpassword}
//                       </Alert>
//                     ) : null}
//                   </FormControl>
//                   {ShowAlertReset ? (
//                     <Alert sx={StyleAlert()} severity="error">
//                       Your password has already been used or the OTP is incorrect!
//                     </Alert>
//                   ) : null}
//                 </Box>
//               ) : null}
//               {/* modal */}
//               <Modal
//                 open={open}
//                 onClose={handleClose}
//                 aria-labelledby="modal-modal-title"
//                 aria-describedby="modal-modal-description"
//               >
//                 <Box sx={style}>
//                   <Box
//                     onClick={handleClose}
//                     sx={{ display: 'flex', justifyContent: 'flex-end', cursor: 'pointer', paddingBottom: '10px' }}
//                   >
//                     <CloseIcon />
//                   </Box>
//                   <form action="" onSubmit={formikotp.handleSubmit}>
//                     <FormControl sx={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '10px' }}>
//                       <Alert sx={StyleAlert()} severity="success">
//                         OTP has been sent to your email: {values.email}
//                       </Alert>
//                       <TextField
//                         sx={{ width: '100%' }}
//                         name="otp"
//                         label="Otp"
//                         value={formikotp.values.otp}
//                         onChange={formikotp.handleChange}
//                         onBlur={formikotp.handleBlur}
//                       />
//                       {formikotp.touched.otp && formikotp.errors.otp ? (
//                         <Alert sx={StyleAlert()} severity="error">
//                           {formikotp.errors.otp}
//                         </Alert>
//                       ) : null}
//                     </FormControl>
//                     <Button
//                       disabled={Boolean(formikotp.errors.otp) || formikotp.values.otp === ''}
//                       sx={{
//                         width: '100%',
//                         marginTop: '10px',
//                         background: '#62D84E',
//                         '&:hover': { background: '#62D84E' },
//                       }}
//                       type="submit"
//                       variant="contained"
//                     >
//                       Confirm
//                     </Button>
//                   </form>
//                 </Box>
//               </Modal>
//             </Box>
//             {/* sign in */}
//             <Box sx={{ display: 'flex', justifyContent: 'center' }}>
//               <Link
//                 sx={{ display: 'flex', alignItems: 'center', gap: '4px', textAlign: 'center' }}
//                 underline="hover"
//                 component={RouterLink}
//                 href="/auth/sign-in"
//               >
//                 <Typography variant="body2">
//                   Sign in ? <ArrowOutwardIcon sx={{ fontSize: '0.8rem' }} />
//                 </Typography>{' '}
//               </Link>
//             </Box>
//           </Box>
//         </Box>
//       </Container>
//       <Box
//         sx={{ marginLeft: '-40px', display: { lg: 'block', md: 'block', sm: 'block', xs: 'none' }, marginTop: '80px' }}
//       >
//         <Image src="/assets/__img_signin.svg" alt="" width={500} height={500} />
//       </Box>
//     </Box>
//   );
// }
