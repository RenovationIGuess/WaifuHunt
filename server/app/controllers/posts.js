const Post = require("../models/Post.js");
const User = require('../app/models/User');

export const getPosts = async (req, res) => {
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
};

export const createPost = async (req, res) => {
	const { title, content } = req.body;
	const user = await User.findById(req.userId);
	const newPost = new Post({ title, content });
	try {
		await newPost.save()
		res.status(200).json({
      success: true,
      message: "Đăng bài thành công",
      newPost,
    });
	} catch (err) {
		res.status(500).json({ success: false, message: err });
	}
};