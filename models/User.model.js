const { Schema, model, Types } = require("mongoose");

const userSchema = new Schema({
  name: { type: String, required: true },
  addresses: [{ type: Types.ObjectId, ref: "Address" }],
});

const UserModel = model("User", userSchema);

module.exports = UserModel;
