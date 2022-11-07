const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);
const Schema = mongoose.Schema;

const WaifuReplyComment = new Schema(
  {
		replyid: { type: Number },
		content: { type: String },
		userid: { type: Number },
		likeCount: { type: [Number], default: [] },
		commentid: { type: Number },
		replyhostid: { type: Number, default: -1 },
		/* title: { type: String }, */
	},
	{
		timestamps: true,
	},
);

WaifuReplyComment.plugin(AutoIncrement, { inc_field: "replyid" });

const WaifuCommentReply = mongoose.model('waifuCmtRep', WaifuReplyComment);

module.exports = WaifuCommentReply;
