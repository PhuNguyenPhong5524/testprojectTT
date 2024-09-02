import HomeIcon from '@mui/icons-material/Home';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import SignalCellularAltOutlinedIcon from '@mui/icons-material/SignalCellularAltOutlined';
import { MapPin, Smiley } from '@phosphor-icons/react';
import type { Icon } from '@phosphor-icons/react/dist/lib/types';
import { PlugsConnected as PlugsConnectedIcon } from '@phosphor-icons/react/dist/ssr/PlugsConnected';
import { User as UserIcon } from '@phosphor-icons/react/dist/ssr/User';
import { Users as UsersIcon } from '@phosphor-icons/react/dist/ssr/Users';
import { XSquare } from '@phosphor-icons/react/dist/ssr/XSquare';

export const navIcons = {
  dashboard: HomeIcon,
  school: SchoolOutlinedIcon,
  edit: ModeEditOutlineOutlinedIcon,
  analytics: SignalCellularAltOutlinedIcon,
  setting: SettingsOutlinedIcon,
  logout: LogoutOutlinedIcon,
  'map-ping': MapPin,
  emoji: Smiley,
  'plugs-connected': PlugsConnectedIcon,
  'x-square': XSquare,
  user: UserIcon,
  users: UsersIcon,
} as unknown as Record<string, Icon>;
