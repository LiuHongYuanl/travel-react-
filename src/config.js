module.exports = {
  host: process.env.HOST || 'localhost',
  port: process.env.PORT || (process.env.NODE_ENV === 'production' ? 8080 : 3000),
  apiHost: process.env.APIHOST || 'localhost',
  apiPort: process.env.APIPORT || 3030,
  app: {
    title: 'travel 旅游系统',
    description: 'React Redux 系列刘',
    head: {
      titleTemplate: 'React Redux : %s',
      meta: [
        {
          name: 'description',
          content: 'React Redux系列刘 '
        },
        { charset: 'utf-8' }
      ]
    }
  }
};
