// const userRouter = require('./users');
const waifuRouter = require('./waifu');
const authRouter = require('./auth');
const userRouter = require('./users')

function route(app) {
  // app.use('/', userRouter);
  app.use('/api/waifu', waifuRouter);
  app.use('/api/auth', authRouter);
  app.use('/api/user/edit', userRouter);
}

module.exports = route;

