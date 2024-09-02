import React from 'react';
import { Box, Button, Typography } from '@mui/material';

interface DataButton {
  text: string;
  background?: string;
  paddinglg?: string;
  paddingmd?: string;
  paddingsm?: string;
  paddingxs?: string;
  variantbutton?: 'contained' | 'text' | 'outlined';
  backgroundhover?: string;
  border?: string;
  borderradius?: string;
  variantfont?:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'subtitle2'
    | 'subtitle1'
    | 'body1'
    | 'body2'
    | 'button'
    | 'caption'
    | 'overline';
  colortext?: string;
  colortexthover?: string;
  borderhover?: string;
  width?: string;
  icon?: React.ReactNode;
}
export default function ButtonComponentCalBack({
  text,
  background,
  backgroundhover,
  colortext,
  colortexthover,
  paddinglg,
  paddingmd,
  paddingsm,
  paddingxs,
  variantbutton,
  borderradius,
  borderhover,
  border,
  variantfont,
  width,
  icon,
}: DataButton): React.JSX.Element {
  return (
    <Box>
      <Button
        type="submit"
        variant={variantbutton}
        sx={{
          background,
          padding: '0px 0px ',
          '&:hover': { background: backgroundhover, border: borderhover },
          border,
          borderRadius: borderradius,
          width,
        }}
      >
        <Typography
          variant={variantfont}
          sx={{
            padding: { lg: paddinglg, md: paddingmd, sm: paddingsm, xs: paddingxs },
            color: colortext,
            '&:hover': { color: { colortexthover } },
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          {' '}
          {text} {icon ? <span>{icon}</span> : null}
        </Typography>
      </Button>
    </Box>
  );
}
