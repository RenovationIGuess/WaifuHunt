const express = require("express");
const verifyToken = require("../app/middleware/auth");
const Waifu = require("../app/models/Waifu");
const User = require("../app/models/User");
const router = express.Router();

// Getting all waifus in db
router.get("/", async (req, res) => {
  try {
    const waifus = await Waifu.find();
    res.json({
      success: true,
      message: "Lấy dữ liệu thành công!",
      waifus,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// [GET] all waifu of a user
router.get("/user/:id", verifyToken, async (req, res) => {
  try {
    const waifus = await Waifu.find({ user: req.userId }).populate(
      "user",
      "-password"
    );
    res.json({
      success: true,
      waifus,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Getting one waifu
router.get("/:id", getWaifu, (req, res) => {
  /* const foundWaifu = res.waifu
  res.json({
    success: true,
    message: "Lấy dữ liệu thành công!",
    foundWaifu,
  }); */
  res.json(res.waifu);
});

// [POST]
// Create 1 waifu - only admin can create
router.post("/create", async (req, res) => {
  const { name, source, sourceimg, image } = req.body;
  if (!name || !image || !source || !sourceimg) {
    return res.status(400).json({
      success: false,
      message: "Thiếu thông tin nhân vật!",
    });
  }

  const createdWaifu = new Waifu({
    name,
    image,
    source,
    sourceimg,
  });

  try {
    const newWaifu = await createdWaifu.save();
    res.status(201).json({
      success: true,
      message: "Thêm nhân vật thành công!",
      newWaifu,
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// [PATCH]
// Updating one waifu information - only admin can update
router.patch("/edit/:id", getWaifu, async (req, res) => {
  if (req.body.name) {
    res.waifu.name = req.body.name;
  }
  if (req.body.source) {
    res.waifu.source = req.body.source;
  }
  if (req.body.image) {
    res.waifu.image = req.body.image;
  }
  if (req.body.sourceimg) {
    res.waifu.sourceimg = req.body.sourceimg;
  }
  if (req.body.sourcelink) {
    res.waifu.sourcelink = req.body.sourcelink;
  }
  if (req.body.imagesrc) {
    res.waifu.imagesrc = req.body.imagesrc;
  }
  if (req.body.desc) {
    res.waifu.desc = req.body.desc;
  }

  try {
    const updatedWaifu = await res.waifu.save();
    res.json({
      success: true,
      message: "Update thành công!",
      updatedWaifu,
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// [DELETE]
// Deleting one waifu
router.delete("/delete/:id", verifyToken, async (req, res) => {
  try {
    const waifuToWish = await Waifu.findOne({ waifuid: req.body.waifuid });
    let user = await User.findById(req.userId)/* .populate("waifulist"); */
    /* user = {
      ...user,
      waifulist: user.waifulist.filter(
        (item) => item.valueOf() !== waifuToWish._id.valueOf()
      ),
      wishlist: user.wishlist.filter(
        (item) => item.valueOf() !== waifuToWish._id.valueOf()
      ),
    } */
    user.waifulist = user.waifulist.filter(
      (item) => item.equals(waifuToWish._id) === false
    );
    user.wishlist = user.wishlist.filter(
      (item) => item.equals(waifuToWish._id) === false
    );
    await waifuToWish.remove();
    await user.save();
    res.json({ success: true, message: "Delete successful!" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// PATCH: update when user rate a character
router.patch("/rating/:id", verifyToken, async (req, res) => {
  try {
    const waifuToRate = await Waifu.findOne({ waifuid: req.body.waifuid });
    let rating = { ...waifuToRate.rating };
    const user = await User.findById(req.userId);
    if (req.body.ratingNum === 5) {
      /* waifuToRate.rating.five.push(user.userid); */
      rating.five.push(user.userid);
      rating = {
        ...rating,
        four: rating.four.filter((r) => r !== user.userid),
        three: rating.three.filter((r) => r !== user.userid),
        two: rating.two.filter((r) => r !== user.userid),
        one: rating.one.filter((r) => r !== user.userid),
      };
    } else if (req.body.ratingNum === 4) {
      /* waifuToRate.rating.four.push(user.userid); */
      rating.four.push(user.userid);
      rating = {
        ...rating,
        five: rating.five.filter((r) => r !== user.userid),
        three: rating.three.filter((r) => r !== user.userid),
        two: rating.two.filter((r) => r !== user.userid),
        one: rating.one.filter((r) => r !== user.userid),
      };
    } else if (req.body.ratingNum === 3) {
      /* waifuToRate.rating.three.push(user.userid); */
      rating.three.push(user.userid);
      rating = {
        ...rating,
        five: rating.five.filter((r) => r !== user.userid),
        four: rating.four.filter((r) => r !== user.userid),

        two: rating.two.filter((r) => r !== user.userid),
        one: rating.one.filter((r) => r !== user.userid),
      };
    } else if (req.body.ratingNum === 2) {
      /* waifuToRate.rating.two.push(user.userid); */
      rating.two.push(user.userid);
      rating = {
        ...rating,
        five: rating.five.filter((r) => r !== user.userid),
        four: rating.four.filter((r) => r !== user.userid),
        three: rating.three.filter((r) => r !== user.userid),
        one: rating.one.filter((r) => r !== user.userid),
      };
    } else {
      /* waifuToRate.rating.one.push(user.userid); */
      rating.one.push(user.userid);
      rating = {
        ...rating,
        five: rating.five.filter((r) => r !== user.userid),
        four: rating.four.filter((r) => r !== user.userid),
        three: rating.three.filter((r) => r !== user.userid),
        two: rating.two.filter((r) => r !== user.userid),
      };
    }
    waifuToRate.rating = { ...rating };
    const hasRated = waifuToRate.ratedUser.includes(user.userid);
    if (!hasRated) waifuToRate.ratedUser.push(user.userid);

    const updatedWaifu = await waifuToRate.save();
    res
      .status(200)
      .json({ success: true, message: "Rating thành công!", updatedWaifu });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

async function getWaifu(req, res, next) {
  let waifu;
  try {
    waifu = await Waifu.findOne({ waifuid: req.params.id });
    if (waifu === null) {
      return res.status(404).json({ message: "Cannot find!" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.waifu = waifu;
  next();
}

module.exports = router;
