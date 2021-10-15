export const qiankun = {
  apps: [
    {
      name: 'slave',
      entry: 'https://127.0.0.1:8002',
    },
  ],
  routes: [
    {
      path: '/slave',
      microApp: 'slave',
    },
  ],
};
