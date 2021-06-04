module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
      ? '/cicd_test/'   //任意
      : '/'
  }