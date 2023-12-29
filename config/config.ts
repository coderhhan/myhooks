import { menus } from './menus';

//dumi默认消费
export default {
  exportStatic: {},
  nodeModulesTransform: {
    type: 'none',
    exclude: [],
  },
  publicPath: '/uni-hooks/',
  history: { type: 'hash' },
  extraBabelPlugins: [//demo组件库 使用按需加载
    [
      'babel-plugin-import',
      {
        libraryName: '@alifd/next',
        style: false,
      },
      'fusion', //ui 组件库
    ],
  ],
  title: 'uni hooks',
  mode: 'site', //站点模式 doc左右分布 或者上下分布site
  favicon: '/uni-hooks/avatar.png',
  logo: '/uni-hooks/avatar.png',
  dynamicImport: {},
  manifest: {},
  hash: true,
  alias: {
    uniHooks: process.cwd() + '/packages/hooks/src/index.ts',
    ['uni-hooks']: process.cwd() + '/packages/hooks/src/index.ts',
    //demo引用时从这里引入import { useLatest } from 'uni-hooks';
  },
  resolve: {
    includes: ['docs', 'packages/hooks/src'],
  },
  links: [
    {
      rel: 'stylesheet',
      href: 'https://unpkg.com/@alifd/theme-design-pro@0.6.2/dist/next-noreset.min.css',
    },
    { rel: 'stylesheet', href: '/style.css' },
  ],
  navs: [
    { title: '指南', path: '/guide' },
    { title: 'Hooks', path: '/hooks' },
    { title: 'GitHub', path: 'xxx' },
  ],
  menus: {
    '/': [
      {
        title: '首页',
        path: 'index',
      },
    ],
    '/guide': [
      {
        title: '介绍',
        path: '/guide',
      },
    ],
    '/hooks': menus,
  },
};
