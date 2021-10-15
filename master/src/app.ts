export const qiankun = {
  apps: [
    {
      name: 'slave',
      entry: 'https://127.0.0.1:8002',
    },
    {
      name: 'grandson',
      entry: 'https://127.0.0.1:8003',
    },
  ],
  routes: [
    {
      path: '/slave',
      microApp: 'slave',
    },
    {
      path: '/grandson',
      microApp: 'grandson'
    },
  ],
};
