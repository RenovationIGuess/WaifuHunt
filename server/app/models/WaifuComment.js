const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);
const Schema = mongoose.Schema;

const WaifuCommentSchema = new Schema(
  {
    commentid: { type: Number },
    value: { type: String },
    image: { type: [String], default: [] },
    likeCount: { type: [Number], default: [] },
    waifuid: { type: Number },
    userid: { type: Number },
  },
  {
    /* _id: false, */
    timestamps: true,
  }
);

WaifuCommentSchema.plugin(AutoIncrement, { inc_field: "commentid" });

const WaifuComment = mongoose.model("waifuComments", WaifuCommentSchema);

module.exports = WaifuComment;

