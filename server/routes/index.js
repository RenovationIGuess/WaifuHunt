// const userRouter = require('./users');
const waifuRouter = require('./waifu');
const authRouter = require('./auth');
const userRouter = require('./users');
const postRouter = require('./post');

function route(app) {
  // app.use('/', userRouter);
  app.use('/api/waifu', waifuRouter);
  app.use('/api/auth', authRouter);
  app.use('/api/user/edit', userRouter);
  app.use('/api/post', postRouter);
}

module.exports = route;

