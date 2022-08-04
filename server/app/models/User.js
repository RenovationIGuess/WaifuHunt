const mongoose = require("mongoose");
const AutoIncrement = require('mongoose-sequence')(mongoose);

const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    userid: { type: Number, },
    name: { 
      type: String, 
      require: true,
      default: 'Waifu Hunter :D', 
    },
    sign: { 
      type: String,
      default: 'Chưa có', 
    },
    avatar: { 
      type: String,
      default: 'RaidenAva', 
    },
    background: { 
      type: String,
      default: 'InazumaBg', 
    },
    username: {
        type: String, 
        require: true,
        unique: true,
        trim: true, 
    },
    password: { 
        type: String, 
        require: true,
        unique: true,
        trim: true,
        /* minlength: 8, */ 
    },
    title: [{ 
      className: { type: String, }, 
      titleName: { type: String, },
    }],
    roll_count: { type: Number, default: 0 },
    waifulist: [{
      type: Schema.Types.ObjectId,
      ref: 'waifus',
    }],
    wishlist: [{ 
      type: Schema.Types.ObjectId,
      ref: 'waifus', 
    }],
    role: {
      type: String,
      default: 'user',
    },
  },
  {
    /* _id: false, */
    timestamps: true,
  }
);

UserSchema.plugin(AutoIncrement, {inc_field: 'userid'});

const User = mongoose.model("users", UserSchema);

module.exports = User;
