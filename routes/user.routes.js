const router = require("express").Router();
const UserModel = require("../models/User.model");

// CREATE
router.post("/create-user", async (req, res) => {
  try {
    const newUser = await UserModel.create(req.body);
    return res
      .status(201)
      .json({ message: "User created with success!", newUser });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Error, try again!", error });
  }
});

// READ ALL
router.get("/all-users", async (req, res) => {
  try {
    const allUsers = await UserModel.find().populate("addresses");
    return res.status(200).json({ message: "Success!", allUsers });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Error, try again!", error });
  }
});

// READ DETAILS
router.get("/details/:userId", async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await UserModel.findOne({ _id: userId }).populate("addresses");
    return res.status(200).json({ message: "Success!", user });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Error, try again!", error });
  }
});

// UPDATE
router.patch("/edit/:userId", async (req, res) => {
  try {
    const { userId } = req.params;
    const editedUser = await UserModel.findOneAndUpdate(
      { _id: userId },
      { ...req.body },
      { new: true }
    ).populate("addresses");
    return res.status(200).json({ message: "User updated!", editedUser });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Error, try again!", error });
  }
});

// DELETE
router.delete("/delete/:userId", async (req, res) => {
  try {
    const { userId } = req.params;
    const deletedUser = await UserModel.deleteOne({ _id: userId });
    return res.status(200).json({ message: "User deleted!", deletedUser });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Error, try again!", error });
  }
});

module.exports = router;
