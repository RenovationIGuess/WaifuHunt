const express = require("express");
const User = require("../app/models/User");
const verifyToken = require("../app/middleware/auth");
const PostComment = require("../app/models/PostComment");
const PostCommentReply = require("../app/models/PostCmtReply");
const router = express.Router();

// GET: get all the post comment
router.get("/all", async (req, res) => {
  try {
    const allPostComments = await PostComment.find();
    res.status(200).json({
      success: true,
      message: "Lấy dữ liệu thành công!",
      allPostComments,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err });
  }
});

// POST: create a new post comment
router.post("/new", verifyToken, async (req, res) => {
  const { userid, postid, content, image } = req.body;
  const newCreatedComment = new PostComment({
    userid,
    content,
    postid,
    image,
  });

  try {
    const newComment = await newCreatedComment.save();
    res.status(200).json({
      success: true,
      message: "Đăng comment thành công!",
      newComment,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err });
  }
});

// PATCH: like
router.patch("/like", verifyToken, async (req, res) => {
  try {
    const commentTolike = await PostComment.findOne({
      postcommentid: req.body.postcommentid,
    });
    const user = await User.findById(req.userId);
    commentTolike.likeCount.push(user.userid);
    const updatedComment = await commentTolike.save();
    res.status(200).json({
      success: true,
      message: "Like thành công!",
      updatedComment,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err });
  }
});

// PATCH: unlike
router.patch("/unlike", verifyToken, async (req, res) => {
  try {
    const commentToUnLike = await PostComment.findOne({
      postcommentid: req.body.postcommentid,
    });
    const user = await User.findById(req.userId);
    commentToUnLike.likeCount = commentToUnLike.likeCount.filter(
      (l) => l !== user.userid
    );
    const updatedComment = await commentToUnLike.save();
    res.json({
      success: true,
      message: "Unlike thành công!",
      updatedComment,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// DELETE: delete a comment by the comment host
router.delete("/delete", async (req, res) => {
  try {
    const commentToDel = await PostComment.findOne({
      postcommentid: req.body.postcommentid,
    });
		for await (const item of PostCommentReply.find()) {
			if (item.postcommentid === commentToDel.postcommentid) {
				await item.remove();
			}
		}
    await commentToDel.remove();
    res.status(200).json({ success: true, message: "Xóa comment thành công!" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// PATCH: edit comment content
router.patch("/edit/:id", async (req, res) => {
  try {
    const commentToEdit = await PostComment.findOne({
      postcommentid: req.body.postcommentid,
    });
    commentToEdit.content = req.body.content;
    const updatedComment = await commentToEdit.save();
    res
      .status(200)
      .json({
        success: true,
        message: "Edit comment thành công!",
        updatedComment,
      });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;
