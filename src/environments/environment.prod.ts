const HOST = 'https://rcvmonitor.com/public';
// const URL_PUBLIC = 'https://localhost:8000';

export const environment = {
  production: true,
  HOST,
  STORAGE_URL: HOST + '/storage',
  // URL_PUBLIC,
  URL_PRIVATE: HOST,
  API_URL: HOST + '/api/',
  VERSION: '1.0.1',
};
