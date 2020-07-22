module.exports = {
  env: {
    NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
  },
  webpackDevMiddleware: config => {
    config.watchOptions.poll = 300;
    return config;
  }
}