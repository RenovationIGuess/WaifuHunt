const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);
const Schema = mongoose.Schema;

const WaifuSchema = new Schema(
  {
    waifuid: { type: Number },
    name: {
      type: String,
      require: true,
    },
    sourceimg: {
      type: String,
      require: true,
    },
    source: {
      type: String,
      require: true,
    },
    image: {
      type: String,
      require: true,
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
