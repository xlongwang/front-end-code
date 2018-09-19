module.exports = {
    base: "/",
    dest: "./dist",
    title: '前端组件库',
    description: 'Just playing around',
    configureWebpack: {
        resolve: {
          alias: {
            '@alias': 'path/to/some/dir'
          }
        }
      }
  }