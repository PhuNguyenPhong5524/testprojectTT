const DEV = {
  TYPE: 'Develop',
  BASE_URL: 'https://api-pro.teklearner.com',
};
const PATHS = {
  authenticate: {
    login: 'oauth/token',
    register: '',
    refresh: '',
  },
  user: {
    list: '',
    update: '',
    delete: '',
  },
  image: {
    avatar: '',
  },
};

const ENV = DEV;

function getURL(path: string): string {
  return path;
}

export { ENV, PATHS, getURL };
