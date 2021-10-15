import { defineConfig } from 'umi';

export default defineConfig({
  base: '/',
  nodeModulesTransform: {
    type: 'none',
  },
  fastRefresh: {},
  qiankun: {
    master: {},
    slave: {},
  },
});
