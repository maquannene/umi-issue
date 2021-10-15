import { defineConfig } from 'umi';

export default defineConfig({
  base: '/',
  nodeModulesTransform: {
    type: 'none',
  },
  qiankun: {
    master: {},
  },
});
