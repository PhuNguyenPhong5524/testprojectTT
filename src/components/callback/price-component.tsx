import React from 'react';
import DoneIcon from '@mui/icons-material/Done';
import { Box, Button, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

import { type PackageCourse } from '@/types/interface';

import { StyleFontSizePrice, StyleIconDonePrice } from '../auth/style';

interface DataPrice {
  data: PackageCourse[];
  lg: number;
  md: number;
  sm: number;
  xs: number;
}

export default function PriceComponentCallBack({ data, lg, md, sm, xs }: DataPrice): React.JSX.Element {
  return (
    <Box sx={{ padding: '30px 30px' }}>
      <Grid container spacing={3}>
        {data.map((item) => (
          <Grid key={item.id} lg={lg} md={md} sm={sm} xs={xs}>
            <Box
              sx={{
                border: '1px solid #ECECEC',
                cursor: 'pointer',
                borderRadius: '8px',
                padding: '20px 20px',
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                gap: '10px',
                '&:hover': { background: '#F7F7F7' },
              }}
            >
              <Box sx={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <Typography variant="body2" sx={{ color: '#A9A9A9' }}>
                  {item.package_name}
                </Typography>
                {item.package_price !== 0 ? (
                  <Typography variant="h5" sx={StyleFontSizePrice()}>
                    {new Intl.NumberFormat('vi-VN', {
                      style: 'currency',
                      currency: 'VND',
                      maximumFractionDigits: 0,
                    }).format(item.package_price)}
                    /Tháng
                  </Typography>
                ) : (
                  <Typography variant="h5" sx={StyleFontSizePrice()}>
                    Miễn Phí
                  </Typography>
                )}
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Box sx={{ textAlign: 'center', minHeight: { lg: '80px', md: '100px', sm: '100px', xs: '50px' } }}>
                  <Typography sx={{ fontSize: '0.8rem' }}>{item.package_description}</Typography>
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    minHeight: { lg: '300px', md: '420px', sm: '390px', xs: '300px' },
                    flexDirection: 'column',
                    gap: { lg: '10px', md: '20px', sm: '18px', xs: '15px' },
                    padding: '0px 4px',
                  }}
                >
                  <Box sx={{ borderBottom: '1px solid #EBEBEB' }} />
                  {/* limit course */}
                  {item.limit_course !== 9999 ? (
                    <Typography variant="body2" sx={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                      {' '}
                      <DoneIcon sx={StyleIconDonePrice()} /> {item.limit_course} khoá học{' '}
                    </Typography>
                  ) : (
                    <Typography variant="body2" sx={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                      {' '}
                      <DoneIcon sx={StyleIconDonePrice()} /> Số lượng khoá học không giới hạn{' '}
                    </Typography>
                  )}
                  {/* Limit student */}
                  <Typography variant="body2" sx={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                    {' '}
                    <DoneIcon sx={StyleIconDonePrice()} /> {item.limit_student} học viên{' '}
                  </Typography>
                  {/* Limit admin */}
                  <Typography variant="body2" sx={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                    {' '}
                    <DoneIcon sx={StyleIconDonePrice()} /> {item.limit_administrator} quản trị viên{' '}
                  </Typography>
                  {/* limit teacher */}
                  {item.limit_teacher !== 9999 ? (
                    <Typography variant="body2" sx={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                      {' '}
                      <DoneIcon sx={StyleIconDonePrice()} /> {item.limit_teacher} giảng viên{' '}
                    </Typography>
                  ) : (
                    <Typography variant="body2" sx={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                      {' '}
                      <DoneIcon sx={StyleIconDonePrice()} />
                      Số lượng giảng viên không giới hạn
                    </Typography>
                  )}
                  {/* fee */}
                  <Typography variant="body2" sx={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                    {' '}
                    <DoneIcon sx={StyleIconDonePrice()} /> {item.transaction_fee}% phí giao dịch{' '}
                  </Typography>
                  {/* Affiliate  */}
                  {item.is_affiliate ? (
                    <Typography variant="body2" sx={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                      {' '}
                      <DoneIcon sx={StyleIconDonePrice()} />
                      Chương trình Affiliate{' '}
                    </Typography>
                  ) : (
                    <Typography variant="body2" sx={{ textAlign: 'center' }}>
                      -
                    </Typography>
                  )}
                  {/* brand */}
                  {item.is_personal_branding ? (
                    <Typography variant="body2" sx={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                      {' '}
                      <DoneIcon sx={StyleIconDonePrice()} />
                      Thương hiệu nhãn trắng
                    </Typography>
                  ) : (
                    <Typography variant="body2" sx={{ textAlign: 'center' }}>
                      -
                    </Typography>
                  )}
                  {/*sale*/}
                  {item.is_business_and_sale_course ? (
                    <Typography variant="body2" sx={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                      {' '}
                      <DoneIcon sx={StyleIconDonePrice()} />
                      Truy cập khoá học kinh doanh và cách bán hàng
                    </Typography>
                  ) : (
                    <Typography variant="body2" sx={{ textAlign: 'center' }}>
                      -
                    </Typography>
                  )}
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                  <Button
                    sx={{
                      width: 'auto',
                      padding: '10px 20px 7px 20px',
                      color: '#000000',
                      border: '1px solid #5B5B5B',
                      '&:hover': { border: '1px solid #5B5B5B', background: '#5B5B5B', color: '#FFFFFF' },
                    }}
                    variant="outlined"
                  >
                    {' '}
                    <Typography variant="body2">Tìm hiểu thêm</Typography>
                  </Button>
                </Box>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
