import { type TypeNav } from '@/types/nav';
import { paths } from '@/paths';

// import { navIcons } from './nav-icons';
// import AcUnitIcon from '@mui/icons-material/AcUnit';

export const navItems = [
  {
    index: 1,
    name: 'Dashboard',
    href: paths.dashboard.overview,
    icon: '',
  },
] satisfies TypeNav[];
