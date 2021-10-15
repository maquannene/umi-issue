import { defineConfig } from 'umi';

export default defineConfig({
  base: '/',
  alias: {
    '@': '../src',
  },
  hash: false,
  styleLoader: {},
  devServer: {
    https: true,
  },
  targets: {
    ie: 11,
  },
  title: false,
  qiankun: {
    master: {},
  } as any,
  mountElementId: 'root',
  publicPath: './',
});
