const mongoose = require("mongoose");
const User = mongoose.model("users");

const createUser = async (req, res) => {
  try {
    const newUser = new User({
      name: "do thanh dat",
      email: "aaa@gmail.com",
      status: 0,
    });
    const user = await newUser.save();
    return res.json({ data: user });
  } catch (err) {
    console.error(err);
  }
};

const getUser = async (req, res) => {
  try {
    const user = await User.find();
    return res.json({ data: user });
  } catch (error) {
    console.error(err);
  }
};

module.exports = { getUser, createUser };
