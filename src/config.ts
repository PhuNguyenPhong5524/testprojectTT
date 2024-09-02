import { getSiteURL } from '@/lib/get-site-url';
import { LogLevel } from '@/lib/logger';

export interface Config {
  site: { name: string; description: string; themeColor: string; url: string };
  logLevel: keyof typeof LogLevel;
}

export const config: Config = {
  site: { name: 'Edutekit', description: '', themeColor: '#090a0b', url: getSiteURL() },
  logLevel: (process.env.NEXT_PUBLIC_LOG_LEVEL as keyof typeof LogLevel) ?? LogLevel.ALL,
};

// Set Name Login
export const NameLogin = 'Edutekit';
export const REDIRECT_URL = 'https://edutekit.com';
export const REDIRECT_URL_CMS = 'https://app.edutekit.com/dashboard';

export const DEFAULT_ROLE_TITLE = {
  TEACHER: 'teacher',
  STUDENT: 'student',
};
