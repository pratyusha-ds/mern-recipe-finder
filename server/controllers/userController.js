import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "../models/User.js";

export const register = async (req, res) => {
  const { username, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({ username, password: hashedPassword });
    await newUser.save();
    res.status(201).json({ message: "User registered successfully." });
  } catch (error) {
    res.status(500).json({ message: "Error with registration." });
  }
};

export const login = async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username });
  if (!user) {
    return res.status(404).json({ message: "No user found." });
  }
  const value = await bcrypt.compare(password, user.password);
  if (!value) {
    return res.status(400).json({ message: "Password doesn't match." });
  }
  console.log("JWT Secret:", process.env.SECRET);
  const token = jwt.sign({ username, UserId: user._id }, process.env.SECRET, {
    expiresIn: "1h",
  });
  res.cookie("token", token, {
    maxAge: 3600000,
    httpOnly: true,
    secure: true,
    sameSite: "None",
  });
  res.status(200).json({ message: "Login successful" });
};
