const express = require("express");
const verifyToken = require("../app/middleware/auth");
const PostCommentReply = require("../app/models/PostCmtReply");
const User = require("../app/models/User");
const router = express.Router();

// GET: get all replies
router.get("/all", async (req, res) => {
  try {
    const allPostCommentReplies = await PostCommentReply.find();
    res.status(200).json({
      success: true,
      message: "Lấy dữ liệu thành công!",
      allPostCommentReplies,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// POST: upload a reply
router.post("/new", async (req, res) => {
  const { 
    content, 
    userid, 
    postcommentid,
    replyhostid, 
  } = req.body;
  const newCreatedReply = new PostCommentReply({
    content,
    userid,
    postcommentid,
    replyhostid,
  });

  try {
    const newReply = await newCreatedReply.save();
    res.status(200).json({
      success: true,
      message: "Đăng reply thành công!",
      newReply,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err });
  }
});

// PATCH: like
router.patch("/like", verifyToken, async (req, res) => {
  try {
    const replyToLike = await PostCommentReply.findOne({
      postreplyid: req.body.postreplyid,
    });
    const user = await User.findById(req.userId);
    replyToLike.likeCount.push(user.userid);
    const updatedReply = await replyToLike.save();
    res.json({
      success: true,
      message: "Like thành công!",
      updatedReply,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err });
  }
});

// PATCH: unlike
router.patch("/unlike", verifyToken, async (req, res) => {
  try {
    const replyToUnlike = await PostCommentReply.findOne({
      postreplyid: req.body.postreplyid,
    });
    const user = await User.findById(req.userId);
    replyToUnlike.likeCount = replyToUnlike.likeCount.filter(
      (l) => l !== user.userid
    );
    const updatedReply = await replyToUnlike.save();
    res.json({
      success: true,
      message: "Unlike thành công!",
      updatedReply,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err });
  }
});

// PATCH: edit the reply value
router.patch("/edit/:id", async (req, res) => {
  try {
    const replyToEdit = await PostCommentReply.findOne({
      postreplyid: req.body.postreplyid,
    });
    replyToEdit.content = req.body.content;
    const updatedReply = await replyToEdit.save();
    res.status(200).json({
      success: true,
      message: "Edit reply thành công!",
      updatedReply,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err });
  }
});

// DELETE: delete reply
router.delete("/delete", async (req, res) => {
  try {
    const replyToDelete = await PostCommentReply.findOne({
      postreplyid: req.body.postreplyid,
    });
    await replyToDelete.remove();
    res.status(200).json({ success: true, message: "Xóa reply thành công!" });
  } catch (err) {
    res.status(500).json({ success: false, message: err });
  }
});

module.exports = router;
