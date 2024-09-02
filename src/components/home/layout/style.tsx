import { keyframes } from '@mui/material';

export const StyleNavHome = {
  color: '#027ac1',
  fontSize: { lg: '16px', md: '15px', sm: '11px' },
  cursor: 'pointer',
};

export const StyleButtonNavHome = {
  color: '#027ac1',
  fontSize: { lg: '16px', md: '15px', sm: '11px' },
  padding: { lg: '10px 60px 5px 60px', md: '10px 60px 5px 60px', sm: '10px 60px 5px 60px' },
};

export const StyleNavHomeMobile = {
  color: '#331E14',
  padding: '15px 0px',
};
export const StyleTitleHome = {
  color: '#fff',
  textAlign: 'center',
  textShadow: '1px 1px 10px #00000075',
  letterSpacing: '1px',
  maxWidth: { lg: '60%', md: '65%', sm: '79%', xs: '100%' },
};

export const StyleBoxTitle = {
  backgroundColor: '#FFFFFF',
  '&:hover': { backgroundColor: '#FFFFFF', border: '1px solid #000000' },
  fontSize: '16px',
  color: '#000000',
  padding: { lg: '7px 20px 2px 20px ', md: '7px 20px 2px 20px ', sm: '7px 20px 2px 20px ', xs: '4px 15px 2px 15px ' },
  border: '1px solid #000000',
};

export const StyleTitleHome1 = {
  textAlign: 'center',
  maxWidth: { lg: '55%', md: '64%', sm: '80%', xs: '95%' },
  wordWrap: 'break-word',
};

export const StyleTextFieldHome = {
  background: 'white',
  marginTop: '10px',
};

export const StyleBackGroundRight = {
  height: '310px',
  backgroundColor: '#000000',
  clipPath: {
    lg: 'polygon(20% 0, 100% 0, 100% 100%, 0 100%)',
    md: 'polygon(20% 0, 100% 0, 100% 100%, 0 100%)',
    sm: '',
  },
  xs: '',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

export const StyleSlider = {
  height: '100px',
  margin: 'auto',
  overflow: 'hidden',
  position: 'relative',
  width: 'auto',
  marginTop: '30px',
};

const animationSpeed = '6s';
const scroll = keyframes`
0% { transform: translateX(0); }
100% { transform: translateX(calc(-150px * 8)) }
`;

export const StyleSlideTrack = {
  animation: `${scroll} ${animationSpeed} linear infinite`,
  display: 'flex',
  justifyContent: 'space-around',
  width: 'calc(150px * 16)',
};

export const StyleStar = {
  fontSize: '16px',
  color: '#FEB83D',
};

export const StyleButtonReposive = {
  display: 'flex',
  justifyContent: { lg: 'flex-start', md: 'flex-start', sm: 'center', xs: 'center' },
};

export const StyleColorPlant = {
  color: { lg: '#FFFFFF', md: '#FFFFFF', sm: '#FFFFFF', xs: '#000000' },
  display: 'flex',
  alignItems: 'center',
  gap: '20px',
};

export const StyleTextNav = {
  padding: '5px 0px 0px 25px',
  color: '#000000',
  textAlign: 'start',
};

export const StyleBoxNav = {
  '&:hover': { background: '#d5d1d1' },
  width: '100%',
  cursor: 'pointer',
};

export const StlyeTextNav = {
  padding: '5px 0px 0px 25px',
  color: '#000000',
  textAlign: 'start',
};
