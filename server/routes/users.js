const express = require("express");
const router = express.Router();
const User = require("../app/models/User");
const Waifu = require("../app/models/Waifu");
const verifyToken = require("../app/middleware/auth");
const { verify } = require("jsonwebtoken");

router.patch("/ava", verifyToken, async (req, res) => {
  const { newAva } = req.body;

  try {
    const user = await User.findById(req.userId);
    user.avatar = newAva;
    await user.save();
    res.json({ success: true, message: "Ava updated successful!" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, message: err.message });
  }
});

// Get title
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

    await user.save();
    res.json({ success: true, message: "Get title successful!" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, message: err.message });
  }
});

router.patch("/background", verifyToken, async (req, res) => {
  const { newBg } = req.body;

  try {
    const user = await User.findById(req.userId);
    user.background = newBg;
    await user.save();
    res.json({ success: true, message: "Background updated successful!" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, message: err.message });
  }
});

router.patch("/info", verifyToken, async (req, res) => {
  try {
    const user = await User.findById(req.userId);
    if (req.body.name !== "") {
      user.name = req.body.name;
    }
    if (req.body.sign !== "") {
      user.sign = req.body.sign;
    }
    await user.save();
    res.json({ success: true, message: "Info updated successful!" });
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
    await user.save();
    res.json({
      success: true,
      message: "Increase roll_count success successful!",
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
    await user.save();
    res.json({ success: true, message: "Get waifu successful!" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, message: err.message });
  }
});

router.patch("/wishwaifu", verifyToken, async (req, res) => {
  try {
    const waifuToWish = await Waifu.findOne({ waifuid: req.body.waifuid });
    const user = await User.findById(req.userId);
    user.wishlist.push(waifuToWish);
    await user.save();
    res.json({ success: true, message: "Add wishlist successful!" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, message: err.message });
  }
});

router.patch("/unwish", verifyToken, async (req, res) => {
  try {
    const waifuToWish = await Waifu.findOne({ waifuid: req.body.waifuid });
    const user = await User.findById(req.userId).populate("wishlist");
    user.wishlist = user.wishlist.filter(
      (item) => item.waifuid !== waifuToWish.waifuid
    );
    await user.save();
    res.json({ success: true, message: "Remove from wishlist successful!" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, message: err.message });
  }
});

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
    await user.save();
    res.json({ success: true, message: "Remove from waifulist successful!" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;
