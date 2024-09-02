import { createTheme } from '@mui/material';

import { bold, medium } from '@/styles/font';

export const theme = createTheme({
  typography: {
    fontFamily: medium.style.fontFamily,
    fontSize: 14,
    h1: {
      fontFamily: bold.style.fontFamily,
      fontWeight: 700, // Bold font
      fontSize: '5rem',
      '@media (max-width:600px)': {
        fontSize: '3rem',
      },
    },
    h2: {
      fontFamily: bold.style.fontFamily,
      fontWeight: 700,
      fontSize: '3.75rem',
      '@media (max-width:600px)': {
        fontSize: '2rem',
      },
    },
    h3: {
      fontFamily: bold.style.fontFamily,
      fontWeight: 700,
      fontSize: '2.55rem',
      lineHeight: 1.3,
      textTransform: 'none',
      '@media (max-width:600px)': {
        fontSize: '1.7rem',
      },
    },
    h4: {
      fontFamily: bold.style.fontFamily,
      fontWeight: 700,
      fontSize: '2.125rem',
      lineHeight: 1.3,
      '@media (max-width:600px)': {
        fontSize: '1.3rem',
      },
    },
    h5: {
      fontFamily: bold.style.fontFamily,
      fontWeight: 700,
      fontSize: '1.25rem',
      lineHeight: 1.3,
      '@media (max-width:600px)': {
        fontSize: '1rem',
      },
    },
    h6: {
      fontFamily: bold.style.fontFamily,
      fontWeight: 700,
      fontSize: '1rem',
      lineHeight: 1.4,
      textTransform: 'none',
      '@media (max-width:600px)': {
        fontSize: '0.7rem',
      },
    },
    subtitle1: {
      fontFamily: medium.style.fontFamily,
      fontWeight: 400,
      fontSize: '1.75rem',
      lineHeight: 1.75,
      '@media (max-width:600px)': {
        fontSize: '1rem',
      },
    },
    subtitle2: {
      fontFamily: medium.style.fontFamily,
      fontWeight: 700,
      fontSize: '1.2rem',
      lineHeight: 1.57,
      '@media (max-width:600px)': {
        fontSize: '0.5rem',
      },
    },
    body1: {
      fontFamily: medium.style.fontFamily,
      fontWeight: 400,
      fontSize: '1rem',
      lineHeight: 1.5,
      '@media (max-width:600px)': {
        fontSize: '0.75rem',
      },
    },
    body2: {
      fontFamily: medium.style.fontFamily,
      fontWeight: 400,
      fontSize: '0.875rem',
      lineHeight: 1.43,
      '@media (max-width:600px)': {
        fontSize: '0.6rem',
      },
    },
    button: {
      fontFamily: bold.style.fontFamily,
      fontWeight: 7800,
      fontSize: '1rem',
      lineHeight: 1.75,
      textTransform: 'none',
      '@media (max-width:600px)': {
        fontSize: '0.65rem',
      },
    },
    caption: {
      fontFamily: medium.style.fontFamily,
      fontSize: '1rem',
      lineHeight: '1.5',
      '@media (max-width:600px)': {
        fontSize: '1.5rem',
      },
    },
    overline: {
      fontFamily: medium.style.fontFamily,
      fontWeight: 400,
      fontSize: '0.75rem',
      lineHeight: 2.66,
      textTransform: 'uppercase',
      '@media (max-width:600px)': {
        fontSize: '0.625rem',
      },
    },
  },
});
