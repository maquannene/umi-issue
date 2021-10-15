import { defineConfig } from 'umi';

export default defineConfig({
  base: '/',
  nodeModulesTransform: {
    type: 'none',
  },
  // styleLoader: {
  //   insert: 'body',
  //   injectType: 'singletonStyleTag',
  // },
  qiankun: {
    master: {},
  },
});
