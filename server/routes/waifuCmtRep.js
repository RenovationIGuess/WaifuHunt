const express = require("express");
const verifyToken = require("../app/middleware/auth");
const WaifuCommentReply = require("../app/models/WaifuCmtRep");
const User = require("../app/models/User");
const router = express.Router();

// GET: get all replies
router.get("/all", async (req, res) => {
  try {
    const allWaifuCommentReplies = await WaifuCommentReply.find();
    res.status(200).json({
      success: true,
      message: "Lấy dữ liệu thành công!",
      allWaifuCommentReplies,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// POST: upload a reply
router.post("/new", async (req, res) => {
  const { 
    userid,
    content,
    commentid,
    replyhostid,
  } = req.body;
  const newCreatedReply = new WaifuCommentReply({
    userid,
    content,
    commentid,
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
    res.status(500).json({ success: false, message: err.message });
  }
});

// PATCH: like
router.patch("/like", verifyToken, async (req, res) => {
  try {
    const replyToLike = await WaifuCommentReply.findOne({
      replyid: req.body.replyid,
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
    res.status(500).json({ success: false, message: err.message });
  }
});

// PATCH: unlike
router.patch("/unlike", verifyToken, async (req, res) => {
  try {
    const replyToUnlike = await WaifuCommentReply.findOne({
      replyid: req.body.replyid,
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
    res.status(500).json({ success: false, message: err.message });
  }
});

// PATCH: edit the reply value
router.patch("/edit/:id", async (req, res) => {
  try {
    const replyToEdit = await WaifuCommentReply.findOne({
      replyid: req.body.replyid,
    });
    replyToEdit.content = req.body.content;
    const updatedReply = await replyToEdit.save();
    res.status(200).json({
      success: true,
      message: "Edit reply thành công!",
      updatedReply,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// DELETE: delete reply
router.delete("/delete", async (req, res) => {
  try {
    const replyToDelete = await WaifuCommentReply.findOne({
      replyid: req.body.replyid,
    });
    await replyToDelete.remove();
    res.status(200).json({ success: true, message: "Xóa reply thành công!" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;
