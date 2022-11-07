const express = require("express");
const Post = require("../app/models/Post.js");
const User = require("../app/models/User");
const router = express.Router();
const verifyToken = require("../app/middleware/auth.js");

// GET
// Get all the posts
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json({
      success: true,
      message: "Lấy dữ liệu thành công!",
      posts,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err });
  }
});

// POST - createPost
router.post("/create", verifyToken, async (req, res) => {
  const { 
    postTitle, 
    postContent, 
    postTag, 
    postImage, 
    type, 
    videoUrl,
  } = req.body;
  if (!postTitle || !postContent) {
    return res.status(400).json({
      success: false,
      message: "Thiếu thông tin bài viết!",
    });
  }
  const user = await User.findById(req.userId);
  const newCreatedPost = new Post({
    postTitle,
    postContent,
    postImage,
    type,
    videoUrl,
  });
  newCreatedPost.hashtag = [...postTag];
  newCreatedPost.postAuthor = user._id;
  try {
    const newPost = await newCreatedPost.save();
    res.status(200).json({
      success: true,
      message: "Đăng bài thành công",
      newPost,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err });
  }
});

// PATCH: Handle when a user click like
router.patch("/like/:id", verifyToken, async (req, res) => {
  try {
    /* const postToLike = await Post.findOne({ postid: req.params.id }); */
    const postToLike = await Post.findOne({ postid: req.body.postid });
    const user = await User.findById(req.userId);
    /* postToLike.postLikes = [...postToLike.postLikes, user.name]; */
    /* const hadUserLiked = postToLike.postLikes.findIndex((p) => p === user.name)
    if (hadUserLiked === -1) {
      postToLike.postLikes.push(user.name);
    } else {
      return res.status(500).json({ success: false, message: "Bài viết này đã được like" });
    } */
    postToLike.postLikes.push(user.userid);

    const updatedPost = await postToLike.save();
    res.json({
      success: true,
      message: "Like thành công!",
      updatedPost,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// PATCH: handle when a user unlike the post
router.patch("/unlike/:id", verifyToken, async (req, res) => {
  try {
    const postToLike = await Post.findOne({ postid: req.body.postid });
    const user = await User.findById(req.userId);
    postToLike.postLikes = postToLike.postLikes.filter(
      (liked) => liked !== user.userid
    );

    const updatedPost = await postToLike.save();
    res.json({
      success: true,
      message: "Unlike thành công!",
      updatedPost,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// PATCH: handle when a user post a comment
/* router.patch("/comment/:id", verifyToken, async (req, res) => {
  try {
    const commentValue = req.body.comment;
    const postToComment = await Post.findOne({ postid: req.body.postid });
    // const user = await User.findById(req.userId);
    postToComment.comment.push(commentValue);

    const updatedPost = await postToComment.save();
    res.status(200).json({
      success: true,
      message: "Comment thành công!",
      updatedPost,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
}); */

// PATCH: edit post
router.patch("/edit/:id", async (req, res) => {
  const postToEdit = await Post.findOne({ postid: req.body.postid });
  const { 
    postTitle, 
    postContent, 
    postTag, 
    postImage, 
    type, 
    videoUrl, 
  } = req.body;
  if (postTitle !== "") postToEdit.postTitle = postTitle;
  if (postContent !== "") postToEdit.postContent = postContent;
  if (postTag.length !== 0) postToEdit.hashtag = [...postTag];
  if (postImage.length !== 0) {
    postToEdit.postImage = [...postImage];
    postToEdit.videoUrl = "";
  };
  if (videoUrl !== "") {
    postToEdit.postImage = [];
    postToEdit.videoUrl = videoUrl;
  }
  if (type !== postToEdit.type) postToEdit.type = type;
  try {
    const updatedPost = await postToEdit.save();
    res.status(200).json({
      success: true,
      message: "Edit post thành công!",
      updatedPost,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// PATCH: delete a post comment
/* router.patch("/delete/cmt/:id", async (req, res) => {
  try {
    const postToEdit = await Post.findOne({ postid: req.body.postid });
    postToEdit.comment = postToEdit.comment.filter((c) => c !== req.body.value);

    const updatedPost = await postToEdit.save();
    res.status(200).json({
      success: true,
      message: "Xóa comment thành công!",
      updatedPost,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
}); */

// DELETE: delete a post
router.delete("/delete/:id", async (req, res) => {
  try {
    const postToDelete = await Post.findOne({ postid: req.body.postid });
    await postToDelete.remove();
    res.json({ success: true, message: "Xóa bài viết thành thành công!" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;
