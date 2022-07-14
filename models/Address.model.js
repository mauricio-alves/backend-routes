const { Schema, model } = require("mongoose");

const addressSchema = new Schema({
  address: { type: String, required: true },
  number: { type: Number, required: true },
  district: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  zipCode: { type: Number, required: true, minLength: 8 },
});

const AddressModel = model("Address", addressSchema);

module.exports = AddressModel;
