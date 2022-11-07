const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);
const Schema = mongoose.Schema;

const PostCommentSchema = new Schema(
	{
		postcommentid: { type: Number },
		content: { type: String },
		image: { type: [String], default: [] },
		likeCount: { type: [Number], default: [] },
		postid: { type: Number },
		userid: { type: Number },
		/* reply: { type: [Number] }, */
	},
	{
		timestamps: true,
	}
);

PostCommentSchema.plugin(AutoIncrement, { inc_field: "postcommentid" });

const PostComment = mongoose.model("postComments", PostCommentSchema);

module.exports = PostComment;

