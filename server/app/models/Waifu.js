const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);
const Schema = mongoose.Schema;

const WaifuSchema = new Schema(
  {
    waifuid: { type: Number },
    name: {
      type: String,
      required: true,
    },
    sourceimg: {
      type: String,
      /* required: true, */
    },
    source: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    sourcelink: {
      type: String,
      default: 'Chưa có',
    },
    imagesrc: {
      type: String,
      default: 'Chưa có',
    },
    desc: {
      type: String,
      default: 'Chưa có',
    },
    rank: { type: Number },
    user: [
      {
        type: Schema.Types.ObjectId,
        ref: "users",
      },
    ],
  },
  {
    /* _id: false, */
    timestamps: true,
  }
);

WaifuSchema.plugin(AutoIncrement, { inc_field: "waifuid" });

const Waifu = mongoose.model("waifus", WaifuSchema);

module.exports = Waifu;
