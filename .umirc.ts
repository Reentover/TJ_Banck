import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  //配置是否让生成的文件包含 hash 后缀，通常用于增量发布和避免浏览器加载缓存,build文件加hash后缀
  hash: true,
  //设置路由前缀，通常用于部署到非根目录。
  //比如，你有路由 / 和 /users，然后设置了 base 为 /foo/，那么就可以通过 /foo/ 和 /foo/users 访问到之前的路由。
  base: '/',
  //静态资源路径，当打包的时候，webpack 会在静态文件路径前面添加 publicPath 的值，当你需要修改静态文件地址时，比如使用 CDN 部署，把 publicPath 的值设为 CDN 的值就可以。
  publicPath: '/',
  //打包后的文件名
  // outputPath: 'dist',
  //浏览器名字,优先级低于route
  title: '天津运营管理系统',
  //浏览器跳转方式
  history: {
    type: 'browser',
  },
  //配置需要兼容的浏览器最低版本，会自动引入 polyfill 和做语法转换。
  targets: { ie: 11 },
  //配置代理 注意：proxy 配置仅在 dev 时生效。
  // 然后访问 /api/users 就能访问到 http://jsonplaceholder.typicode.com/users 的数据。
  // proxy: {
  //   '/api': {
  //     target: 'http://jsonplaceholder.typicode.com/',
  //     changeOrigin: true,
  //     pathRewrite: { '^/api': '' },
  //   },
  // },
  // 配置主题，实际上是配 less 变量。
  theme: {
    '@primary-color': '#1DA57A',
  },
  routes: [{ path: '/', component: '@/pages/index' }],
  fastRefresh: {},
});
