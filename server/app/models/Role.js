const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RoleSchema = new Schema(
  {
    name: { 
      type: String,  
    },
  },
);

const Role = mongoose.model("role", RoleSchema);

module.exports = User;
