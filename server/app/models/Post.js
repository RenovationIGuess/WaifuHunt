const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);
const Schema = mongoose.Schema;

const PostSchema = new Schema(
  {
    postid: { type: Number },
    postTitle: { type: String, required: true },
    postContent: { type: String, required: true },
    postImage: { type: String },
    postAuthor: { type: Schema.Types.ObjectId, ref: "users" },
    postLikes: { type: [Number], default: [] },
    hashtag: { type: [String], default: [] },
    comment: { type: [String], default: [] },
  },
  {
    timestamps: true,
  }
);

PostSchema.plugin(AutoIncrement, { inc_field: "postid" });

const Post = mongoose.model("posts", PostSchema);

module.exports = Post;
