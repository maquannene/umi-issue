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
  styleLoader: {
    insert: (element: any) => {
      const parent = document.querySelector('body');
      if (!parent) {
        return;
      }
      const anyWindow = window as any;
      const lastInsertedElement = anyWindow._lastElementInsertedByStyleLoader;
      if (!lastInsertedElement) {
        parent.insertBefore(element, parent.firstChild);
      } else if (lastInsertedElement.nextSibling) {
        parent.insertBefore(element, lastInsertedElement.nextSibling);
      } else {
        parent.appendChild(element);
      }
      anyWindow._lastElementInsertedByStyleLoader = element;
    },
    injectType: 'singletonStyleTag',
  },
  fastRefresh: {},
  qiankun: {
    slave: {},
  },
});
