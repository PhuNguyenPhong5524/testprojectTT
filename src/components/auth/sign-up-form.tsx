// 'use client';

// import * as React from 'react';
// import RouterLink from 'next/link';
// import { Box, TextField } from '@mui/material';
// import Alert from '@mui/material/Alert';
// import Button from '@mui/material/Button';
// import FormControl from '@mui/material/FormControl';
// import Link from '@mui/material/Link';
// import Modal from '@mui/material/Modal';
// import Stack from '@mui/material/Stack';
// import Typography from '@mui/material/Typography';
// import Grid from '@mui/material/Unstable_Grid2';
// import { useFormik } from 'formik';
// import { toast, ToastContainer } from 'react-toastify';
// import * as Yup from 'yup';

// import { paths } from '@/paths';

// import { UseAuth } from './use';

// import 'react-toastify/dist/ReactToastify.css';

// import { Post } from '@/services/api/axios/axios';

// const style = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: 400,
//   bgcolor: 'background.paper',
//   border: '2px solid #000',
//   boxShadow: 24,
//   p: 4,
// };

// // validate
// const SignupSchema = new Yup.ObjectSchema().shape({
//   name: Yup.string().required('Họ Tên Không Được Để Rỗng'),
//   phone: Yup.string()
//     .required('Số Điện Thoại Không Được Để Rỗng')
//     .matches(/^(?:0?)(?:3[2-9]|5[689]|7[01689]|8[1-9]|9[0-9])[0-9]{7}$/, 'Số điện thoại không hợp lệ'),
//   email: Yup.string().required('Email Không Được Để Rỗng').email('Email Không Đúng Định Dạng'),
//   birthday: Yup.date().required('Ngày Sinh Không Được Để Rỗng').max(new Date(), 'Ngày sinh không hợp lệ'),
//   gender: Yup.string().required('Giới Tính Không Được Để Rỗng'),
//   address: Yup.string().required('Địa Chỉ Không Được Để Rỗng'),
//   password: Yup.string()
//     .required('Mật Khẩu Không Được Để Rỗng')
//     .min(6, 'Mật Khẩu Có Ít Nhất 6 Ký Tự')
//     .matches(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,}$/, 'Mật Khẩu Gồm Ký Tự, Só, Ký Tự Đặc Biệt'),
//   // otp: Yup.string().min(1, { message: 'OTP is required' }),
// });
// const SignupSchema1 = new Yup.ObjectSchema().shape({
//   otp: Yup.string().required('Otp Không Được Đễ Rỗng'),
// });

// interface ResponseCheckMail {
//   data: boolean;
// }
// interface ResponseCheckPhone {
//   data: boolean;
// }
// interface ResponseCheckOtp {
//   data: boolean;
// }
// export function SignUpForm(): React.JSX.Element {
//   const formik1 = useFormik({
//     initialValues: {
//       name: '',
//       phone: '',
//       email: '',
//       birthday: '',
//       gender: '',
//       address: '',
//       password: '',
//     },
//     validationSchema: SignupSchema,
//     onSubmit: async (): Promise<void> => {
//       setName(values.name);
//       setPhone(values.phone);
//       setEmail(values.email);
//       setGender(values.gender);
//       setPassword(values.password);
//       setAddress(values.address);
//       setBirthday(values.birthday);

//       const checkmail: ResponseCheckMail = await Post('auth/v1/check-email', { email: values.email });
//       const checkphone: ResponseCheckPhone = await Post('auth/v1/check-phone', { phone: values.phone });
//       if (checkmail.data) {
//         toast.error('Email Đã Tồn Tại');
//       } else if (checkphone.data) {
//         toast.error('Số Điện Thoại Đã Tồn Tại');
//       } else {
//         setIsPending(true);
//         const sendotp: ResponseCheckOtp = await Post('auth/v1/send-otp-email', { email: values.email });
//         if (sendotp.data) {
//           setIsModal(true);
//         }
//       }
//     },
//   });
//   const { values, handleSubmit, handleChange, handleBlur, errors } = formik1;
//   const formik2 = useFormik({
//     initialValues: {
//       otp: '',
//     },
//     validationSchema: SignupSchema1,
//     onSubmit: async (): Promise<void> => {
//       const arrregister = {
//         name: Name,
//         email: Email,
//         password: Password,
//         phone: Phone,
//         birthday: Birthday,
//         address: Address,
//         gender: Gender,
//         roleTitle: 'api',
//         otp: formik2.values.otp,
//       };
//       try {
//         const response = await Post('auth/v1/register', arrregister);
//         console.log(response);

//         window.location.href = '/auth/sign-in';
//       } catch (error) {
//         toast.error('Register failed');
//       }
//     },
//   });

//   const [isPending, setIsPending] = React.useState<boolean>(false);
//   const {
//     IsModal,
//     setIsModal,
//     Name,
//     setName,
//     Email,
//     setEmail,
//     Phone,
//     setPhone,
//     Address,
//     setAddress,
//     Gender,
//     setGender,
//     Birthday,
//     setBirthday,
//     Password,
//     setPassword,
//   } = UseAuth();
//   return (
//     <Stack spacing={3}>
//       <ToastContainer />
//       <Stack spacing={1}>
//         <Typography variant="h4">Sign up</Typography>
//         <Typography color="text.secondary" variant="body2">
//           Already have an account?{' '}
//           <Link component={RouterLink} href={paths.auth.signIn} underline="hover" variant="subtitle2">
//             Sign in
//           </Link>
//         </Typography>
//       </Stack>
//       <form method="post" onSubmit={handleSubmit}>
//         <Grid container>
//           <Grid sx={{ marginBottom: '20px' }} lg={12} md={12} sm={12} xs={12}>
//             <FormControl sx={{ width: '100%' }}>
//               <TextField
//                 fullWidth
//                 label="Fist Name"
//                 id="demo-helper-text-misaligned"
//                 name="name"
//                 value={values.name}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//               />
//               {errors.name ? (
//                 <Alert sx={{ padding: '0px 0px' }} severity="error">
//                   {errors.name}
//                 </Alert>
//               ) : null}
//             </FormControl>
//           </Grid>
//           <Grid sx={{ marginBottom: '20px' }} lg={12} md={12} sm={12} xs={12}>
//             <FormControl sx={{ width: '100%' }}>
//               <TextField
//                 fullWidth
//                 label="Phone"
//                 name="phone"
//                 value={values.phone}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//               />
//               {errors.phone ? (
//                 <Alert sx={{ padding: '0px 0px' }} severity="error">
//                   {errors.phone}
//                 </Alert>
//               ) : null}
//             </FormControl>
//           </Grid>
//           <Grid sx={{ marginBottom: '20px' }} lg={12} md={12} sm={12} xs={12}>
//             <FormControl sx={{ width: '100%' }}>
//               <TextField
//                 fullWidth
//                 name="email"
//                 label="Email"
//                 value={values.email}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//               />
//               {errors.email ? (
//                 <Alert sx={{ padding: '0px 0px' }} severity="error">
//                   {errors.email}
//                 </Alert>
//               ) : null}
//             </FormControl>
//           </Grid>
//           <Grid sx={{ marginBottom: '20px' }} lg={12} md={12} sm={12} xs={12}>
//             <FormControl sx={{ width: '100%' }}>
//               <TextField
//                 fullWidth
//                 name="birthday"
//                 label="Birth Day"
//                 value={values.birthday}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//               />
//               {errors.birthday ? (
//                 <Alert sx={{ padding: '0px 0px' }} severity="error">
//                   {errors.birthday}
//                 </Alert>
//               ) : null}
//             </FormControl>
//           </Grid>
//           <Grid sx={{ marginBottom: '20px' }} lg={12} md={12} sm={12} xs={12}>
//             <FormControl sx={{ width: '100%' }}>
//               <TextField
//                 fullWidth
//                 name="gender"
//                 label="Gender"
//                 value={values.gender}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//               />
//               {errors.gender ? (
//                 <Alert sx={{ padding: '0px 0px' }} severity="error">
//                   {errors.gender}
//                 </Alert>
//               ) : null}
//             </FormControl>
//           </Grid>
//           <Grid sx={{ marginBottom: '20px' }} lg={12} md={12} sm={12} xs={12}>
//             <FormControl sx={{ width: '100%' }}>
//               <TextField
//                 fullWidth
//                 name="address"
//                 label="Address"
//                 value={values.address}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//               />
//               {errors.address ? (
//                 <Alert sx={{ padding: '0px 0px' }} severity="error">
//                   {errors.address}
//                 </Alert>
//               ) : null}
//             </FormControl>
//           </Grid>
//           <Grid sx={{ marginBottom: '20px' }} lg={12} md={12} sm={12} xs={12}>
//             <FormControl sx={{ width: '100%' }}>
//               <TextField
//                 fullWidth
//                 name="password"
//                 label="Password"
//                 value={values.password}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//               />
//               {errors.password ? (
//                 <Alert sx={{ padding: '0px 0px' }} severity="error">
//                   {errors.password}
//                 </Alert>
//               ) : null}
//             </FormControl>
//           </Grid>
//           <Grid lg={12} md={12} sm={12} xs={12}>
//             <Button type="submit" sx={{ width: '100%' }} disabled={isPending} variant="contained">
//               Sign up
//             </Button>
//           </Grid>
//         </Grid>
//       </form>
//       <Modal open={IsModal} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
//         <Box sx={style}>
//           <form action="" onSubmit={formik2.handleSubmit}>
//             <FormControl sx={{ width: '100%' }}>
//               <TextField
//                 sx={{ width: '100%' }}
//                 name="otp"
//                 label="Otp"
//                 value={formik2.values.otp}
//                 onChange={formik2.handleChange}
//                 onBlur={formik2.handleBlur}
//               />
//               {formik2.errors.otp ? (
//                 <Alert sx={{ padding: '0px 0px' }} severity="error">
//                   {formik2.errors.otp}
//                 </Alert>
//               ) : null}
//             </FormControl>
//             <Button sx={{ width: '100%', marginTop: '10px' }} type="submit" variant="contained">
//               ConFirm
//             </Button>
//           </form>
//         </Box>
//       </Modal>
//       <Alert color="warning">Created users are not persisted</Alert>
//     </Stack>
//   );
// }
