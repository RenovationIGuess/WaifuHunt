const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);
const Schema = mongoose.Schema;

const PostReplyComment = new Schema(
  {
		postreplyid: { type: Number },
		content: { type: String },
		userid: { type: Number },
		likeCount: { type: [Number], default: [] },
		postcommentid: { type: Number },
		replyhostid: { type: Number, default: -1 },
		/* title: { type: String }, */
	},
	{
		timestamps: true,
	},
);

PostReplyComment.plugin(AutoIncrement, { inc_field: "postreplyid" });

const PostCommentReply = mongoose.model('postCmtRep', PostReplyComment);

module.exports = PostCommentReply;
