const express = require("express");
// const Waifu = require("../app/models/Waifu.js");
const User = require("../app/models/User");
const WaifuComment = require("../app/models/WaifuComment.js");
const WaifuCommentReply = require("../app/models/WaifuCmtRep");
const router = express.Router();
const verifyToken = require("../app/middleware/auth.js");

// GET: get all the comment
router.get("/all", async (req, res) => {
  try {
    const allWaifuComments = await WaifuComment.find();
    res.status(200).json({
      success: true,
      message: "Lấy dữ liệu thành công!",
      allWaifuComments,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err });
  }
});

// POST: create a new comment
router.post("/new", verifyToken, async (req, res) => {
  const { value, waifuid, image } = req.body;
  /* if (value === "") {
		return res.status(400).json({
			success: false,
			message: "Thiếu content sao comment :v",
		});
	} */
  const user = await User.findById(req.userId);
  const newCreateComment = new WaifuComment({
    waifuid,
    value,
    image,
  });
  newCreateComment.userid = user.userid;

  try {
    const newComment = await newCreateComment.save();
    res.status(200).json({
      success: true,
      message: "Đăng comment thành công!",
      newComment,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err });
  }
});

// PATCH: leave a like
router.patch("/like", verifyToken, async (req, res) => {
  try {
    const commentToLike = await WaifuComment.findOne({
      commentid: req.body.commentid,
    });
    const user = await User.findById(req.userId);
    commentToLike.likeCount.push(user.userid);

    const updatedComment = await commentToLike.save();
    res.json({
      success: true,
      message: "Like thành công!",
      updatedComment,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// PATCH: unlike
router.patch("/unlike", verifyToken, async (req, res) => {
  try {
    const commentToUnLike = await WaifuComment.findOne({
      commentid: req.body.commentid,
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

// PATCH: add a reply
/* router.patch("/reply", verifyToken, async (req, res) => {
	try {
		const replyValue = req.body.reply;
    const commentToReply = await WaifuComment.findOne({ commentid: req.body.commentid });
    // const user = await User.findById(req.userId);
    commentToReply.reply.push(replyValue);

    const updatedComment = await commentToReply.save();
    res.status(200).json({
      success: true,
      message: "Reply to comment thành công!",
      updatedComment,
    });
	} catch (err) {
		res.status(500).json({ success: false, message: err.message });
	}
}); */

// delete a comment by a comment host
router.delete("/delete", verifyToken, async (req, res) => {
  try {
    const commentToDel = await WaifuComment.findOne({
      commentid: req.body.commentid,
    });
    for await (const item of WaifuCommentReply.find()) {
      if (item.commentid === commentToDel.commentid) {
        await item.remove();
      }
    }
    await commentToDel.remove();
    res.status(200).json({ success: true, message: "Xóa comment thành công!" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// PATCH: edit the comment value
router.patch("/edit/:id", async (req, res) => {
  try {
    const commentToEdit = await WaifuComment.findOne({
      commentid: req.body.commentid,
    });
    commentToEdit.value = req.body.value;
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
