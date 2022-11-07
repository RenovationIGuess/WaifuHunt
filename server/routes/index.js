// const userRouter = require('./users');
const waifuRouter = require('./waifu');
const authRouter = require('./auth');
const userRouter = require('./users');
const postRouter = require('./post');
const waifuCommentRouter = require('./waifuComment.js');
const postCommentRouter = require('./postComment');
const waifuCmtRepRouter = require('./waifuCmtRep');
const postCmtRepRouter = require('./postCmtRep');

function route(app) {
  // app.use('/', userRouter);
  app.use('/api/waifu', waifuRouter);
  app.use('/api/auth', authRouter);
  app.use('/api/user/edit', userRouter);
  app.use('/api/post', postRouter);
  app.use('/api/comment/waifu', waifuCommentRouter);
  app.use('/api/comment/waifu/reply', waifuCmtRepRouter);
  app.use('/api/comment/post', postCommentRouter);
  app.use('/api/comment/post/reply', postCmtRepRouter);
}

module.exports = route;

