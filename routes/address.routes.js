const router = require("express").Router();
const AddressModel = require("../models/Address.model");
const UserModel = require("../models/User.model");

// CREATE
router.post("/create-address/:userId", async (req, res) => {
  try {
    const { userId } = req.params;
    const newAddress = await AddressModel.create({
      ...req.body,
      address: userId,
    });
    const editedUser = await UserModel.findOneAndUpdate(
      { _id: userId },
      { $push: { addresses: newAddress._id } },
      { new: true }
    );
    return res.status(201).json({
      message: "Address created with success!",
      newAddress,
      editedUser,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Error, try again!", error });
  }
});

// READ ALL
router.get("/all-address/:userId", async (req, res) => {
  // SAME AS USER DETAILS ?
});

// READ DETAILS
router.get("/details/:userId", async (req, res) => {
  // SAME AS USER DETAILS ?
});

// UPDATE
router.patch("/edit/:addressId", async (req, res) => {
  try {
    const { addressId } = req.params;
    const editedAddress = await AddressModel.findOneAndUpdate(
      { _id: addressId },
      { ...req.body },
      { new: true }
    );
    return res
      .status(200)
      .json({ message: "Address edited with success!", editedAddress });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Error, try again!", error });
  }
});

// DELETE
router.delete("/delete/:addressId", async (req, res) => {
  try {
    const { addressId } = req.params;
    const deletedAddress = await AddressModel.deleteOne({ _id: addressId });
    return res
      .status(200)
      .json({ message: "Address deleted with success!", deletedAddress });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Error, try again!", error });
  }
});
module.exports = router;
