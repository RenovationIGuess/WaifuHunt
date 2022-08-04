const express = require('express');
const router = express.Router();
const argon2 = require('argon2');
const jwt = require('jsonwebtoken');
const verifyToken = require('../app/middleware/auth');
require('dotenv').config()

const User = require('../app/models/User');

// @route GET api/auth
// @desc Check if user is logged in
// @access Public
router.get('/', verifyToken, async (req, res) => {
	try {
		const user = await User.findById(req.userId).select('-password')
		if (!user) {
			return res.status(400).json({
				success: false,
				message: 'User not found!',
			})
		}

		res.json({
			success: true,
			user,
		})
	} catch (err) {
		console.log(err)
		res.status(500).json({
			success: false,
			message: 'Internal server error',
		})
	}
})

// @route POST api/auth/register
// @desc Register User
// @access Public
router.post('/register', async (req, res) => {
	const { username, password } = req.body
	
	// Simple validation
	if (!username || !password) {
		return res.status(400).json({ 
			success: false, 
			message: 'Thiếu tài khoản/mật khẩu',
		})
	}

	try {
		// Check for existing user
		const user = await User.findOne({ username })
		if (user) {
			return res.status(400).json({
				success: false,
				message: 'Tên tài khoản đã tồn tại!',
			})
		}

		// All ok
		const hashedPassword = await argon2.hash(password)
		const newUser = await User({ 
			username, 
			password: hashedPassword, 
		})
		await newUser.save()

		// Return access token
		const accessToken = jwt.sign(
			{ userId: newUser._id }, 
			process.env.ACCESS_TOKEN_SECRET
		)

		res.json({ 
			success: true,
			message: 'Tạo tài khoản thành công!',
			accessToken,
		})
	} catch (err) {
		console.log(err)
		res.status(500).json({
			success: false,
			message: 'Internal server error',
		})
	}
})

// @route POST api/auth/login
// @desc Login User
// @access Public
router.post('/login', async (req, res) => {
	const { username, password } = req.body

	// Validation
	if (!username || !password) {
		return res.status(400).json({ 
			success: false, 
			message: 'Thiếu tài khoản/mật khẩu',
		})
	}

	try {
		const user = await User.findOne({ username })

		// Username not found
		if(!user) {
			return res.status(400).json({
				success: false,
				message: 'Tên tài khoản không tồn tại!',
			})
		}

		// Username found 
		const passwordValid = await argon2.verify(user.password, password)
		if (!passwordValid) {
			return res.status(400).json({
				success: false,
				message: 'Sai mật khẩu!',
			})
		}

		// All good
		// Return access token
		const accessToken = jwt.sign(
			{ userId: user._id }, 
			process.env.ACCESS_TOKEN_SECRET
		)

		res.json({ 
			success: true,
			message: 'Đăng nhập thành công!',
			accessToken,
		})
	} catch (err) {
		console.log(err)
		res.status(500).json({
			success: false,
			message: 'Internal server error',
		})
	}
})

module.exports = router;