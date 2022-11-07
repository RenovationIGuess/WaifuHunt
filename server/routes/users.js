const express = require("express");
const router = express.Router();
const User = require("../app/models/User");
const Waifu = require("../app/models/Waifu");
const Post = require("../app/models/Post");
const WaifuComment = require("../app/models/WaifuComment");
const WaifuCommentReply = require("../app/models/WaifuCmtRep");
const PostComment = require("../app/models/PostComment");
const PostCommentReply = require("../app/models/PostCmtReply");
const verifyToken = require("../app/middleware/auth");

// GET all users
router.get("/allusers", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({
      success: true,
      message: "Lấy tất cả thông tin của các user thành công",
      users,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err });
  }
});

// PATCH change user avatar
router.patch("/ava", verifyToken, async (req, res) => {
  const { newAva } = req.body;

  try {
    const user = await User.findById(req.userId);
    user.avatar = newAva;
    const updatedUser = await user.save();
    res.json({
      success: true,
      message: "Ava updated successful!",
      updatedUser,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, message: err.message });
  }
});

// PATCH change user title
router.patch("/title", verifyToken, async (req, res) => {
  try {
    const user = await User.findById(req.userId);

    if (user.roll_count >= 0) {
      if (user.title.length !== 0) {
        const searchIndex = user.title.findIndex(
          (item) => item.titleName === "Newbie 🍼"
        );
        if (searchIndex === -1) {
          user.title.push({
            className: "begin-title",
            titleName: "Newbie 🍼",
          });
        }
      } else {
        user.title.push({
          className: "begin-title",
          titleName: "Newbie 🍼",
        });
      }
    }

    // "👑"
    // #f1496b
    // #4cc2ff

    if (user.roll_count >= 100) {
      const searchIndex = user.title.findIndex(
        (item) => item.titleName === "Starter ✨"
      );
      if (searchIndex === -1) {
        user.title.push({
          className: "normal-title",
          titleName: "Starter ✨",
        });
      }
    }

    if (user.roll_count >= 1000) {
      const searchIndex = user.title.findIndex(
        (item) => item.titleName === "God of roll 🎲"
      );
      if (searchIndex === -1) {
        user.title.push({
          className: "elite-title",
          titleName: "God of roll 🎲",
        });
      }
    }

    const updatedUser = await user.save();
    res.json({ success: true, message: "Get title successful!", updatedUser });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, message: err.message });
  }
});

// PATCH change user background
router.patch("/background", verifyToken, async (req, res) => {
  const { newBg } = req.body;

  try {
    const user = await User.findById(req.userId);
    user.background = newBg;
    const updatedUser = await user.save();
    res.json({
      success: true,
      message: "Background updated successful!",
      updatedUser,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, message: err.message });
  }
});

// PATCH change user info: name and sign
router.patch("/info", verifyToken, async (req, res) => {
  try {
    const user = await User.findById(req.userId);
    if (req.body.name !== "") {
      user.name = req.body.name;
    }
    if (req.body.sign !== "") {
      user.sign = req.body.sign;
    }
    const updatedUser = await user.save();
    res.json({
      success: true,
      message: "Info updated successful!",
      updatedUser,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, message: err.message });
  }
});

// PATCH UPDATE ROLL TIMES
router.patch("/incroll", verifyToken, async (req, res) => {
  try {
    const user = await User.findById(req.userId);
    user.roll_count = user.roll_count + 1;
    const updatedUser = await user.save();
    res.json({
      success: true,
      message: "Increase roll_count success successful!",
      updatedUser,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, message: err.message });
  }
});

// PATCH UPDATE GET WAIFU
router.patch("/getwaifu", verifyToken, async (req, res) => {
  try {
    const waifuToAdd = await Waifu.findOne({ waifuid: req.body.waifuid });
    const user = await User.findById(req.userId);
    user.waifulist.push(waifuToAdd);
    waifuToAdd.user.push(user._id);
    await waifuToAdd.save();
    const updatedUser = await user.save();
    res.json({ success: true, message: "Get waifu successful!", updatedUser });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, message: err.message });
  }
});

// PATCH add wishlist
router.patch("/wishwaifu", verifyToken, async (req, res) => {
  try {
    const waifuToWish = await Waifu.findOne({ waifuid: req.body.waifuid });
    const user = await User.findById(req.userId);
    user.wishlist.push(waifuToWish);
    const updatedUser = await user.save();
    res.json({
      success: true,
      message: "Add wishlist successful!",
      updatedUser,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, message: err.message });
  }
});

// PATCH remove from wishlist
router.patch("/unwish", verifyToken, async (req, res) => {
  try {
    const waifuToWish = await Waifu.findOne({ waifuid: req.body.waifuid });
    const user = await User.findById(req.userId).populate("wishlist");
    user.wishlist = user.wishlist.filter(
      (item) => item.waifuid !== waifuToWish.waifuid
    );
    const updatedUser = await user.save();
    res.json({
      success: true,
      message: "Remove from wishlist successful!",
      updatedUser,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, message: err.message });
  }
});

// PATCH remove from waifulist
router.patch("/delwaifu", verifyToken, async (req, res) => {
  try {
    const waifuToWish = await Waifu.findOne({
      waifuid: req.body.waifuid,
    }).populate("user");
    const user = await User.findById(req.userId).populate("waifulist");
    user.waifulist = user.waifulist.filter(
      (item) => item.waifuid !== waifuToWish.waifuid
    );
    waifuToWish.user = waifuToWish.user.filter(
      (item) => item.userid !== user.userid
    );
    await waifuToWish.save();
    const updatedUser = await user.save();
    res.json({
      success: true,
      message: "Remove from waifulist successful!",
      updatedUser,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, message: err.message });
  }
});

// PATCH: follow a user
router.patch("/follow/:id", verifyToken, async (req, res) => {
  try {
    const user = await User.findById(req.userId);
    user.follow.push(req.body.followid);

    const afterUpdated = await user.save();
    res.json({ success: true, message: "Follow thành công!", afterUpdated });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// PATCH: unfollow a user
router.patch("/unfollow/:id", verifyToken, async (req, res) => {
  try {
    const user = await User.findById(req.userId);
    user.follow = user.follow.filter((f) => f !== req.body.followid);

    const afterUpdated = await user.save();
    res.json({ success: true, message: "Unfollow thành công!", afterUpdated });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// PATCH: update user role
router.patch("/role/patch", verifyToken, async (req, res) => {
  try {
    const users = await User.find();
    const findIndex = users.findIndex((u) => u.userid === req.body.userid);
    const userToUpdate = users[findIndex];
    if (userToUpdate.role === "admin") {
      userToUpdate.role = "user";
    } else userToUpdate.role = "admin";

    const afterUpdated = await userToUpdate.save();
    res
      .status(200)
      .json({ success: true, message: "Cấp role thành công!", afterUpdated });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// delete a user
router.delete("/delete/:id", async (req, res) => {
  try {
    let users = await User.find();
    /* let waifus = await Waifu.find();
    let posts = await Post.find();
    let waifuComments = await WaifuComment.find(); */
    const findIndex = users.findIndex((u) => u.userid === req.body.userid);
    const userToDelete = users[findIndex];

    for await (const item of Waifu.find()) {
      item.user = item.user.filter((u) => u.equals(userToDelete._id) === false);
      item.rating = {
        ...item.rating,
        five: item.rating.five.filter((r) => r !== userToDelete.userid),
        four: item.rating.four.filter((r) => r !== userToDelete.userid),
        three: item.rating.three.filter((r) => r !== userToDelete.userid),
        two: item.rating.two.filter((r) => r !== userToDelete.userid),
        one: item.rating.one.filter((r) => r !== userToDelete.userid),
      };
      item.ratedUser = item.ratedUser.filter((r) => r !== userToDelete.userid);
      await item.save();
    }

    for await (const item of User.find()) {
      item.follow = item.follow.filter((f) => f !== userToDelete.userid);
      await item.save();
    }

    for await (const item of WaifuComment.find()) {
      if (item.userid !== userToDelete.userid) {
        item.likeCount = item.likeCount.filter(
          (l) => l !== userToDelete.userid
        );
        await item.save();
      } else await item.remove();
    }

    for await (const item of WaifuCommentReply.find()) {
      if (item.userid !== userToDelete.userid) {
        if (item.replyhostid === userToDelete.userid) {
          item.replyhostid = -1;
        }
        item.likeCount = item.likeCount.filter(
          (l) => l !== userToDelete.userid
        )
        await item.save();
      } else await item.remove();
    }

    for await (const item of Post.find()) {
      if (item.postAuthor.equals(userToDelete._id) === false) {
        item.postLikes = item.postLikes.filter(
          (p) => p !== userToDelete.userid
        );
        await item.save();
      } else item.remove();
    }

    for await (const item of PostComment.find()) {
      if (item.userid !== userToDelete.userid) {
        item.likeCount = item.likeCount.filter(
          (l) => l !== userToDelete.userid
        )
        await item.save()
      } else await item.remove()
    }

    for await (const item of PostCommentReply.find()) {
      if (item.userid !== userToDelete.userid) {
        if (item.replyhostid === userToDelete.userid) {
          item.replyhostid = -1;
        }
        item.likeCount = item.likeCount.filter(
          (l) => l !== userToDelete.userid
        )
        await item.save();
      } else await item.remove();
    }
    
    await userToDelete.remove();
    res.status(200).json({ success: true, message: "Xóa user thành công!" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;
