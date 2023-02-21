import express from "express";
import { registerUser } from "../controllers/userRegisterController.js";
const userRegisterRouter = express.Router();

userRegisterRouter
  .get("/", (req, res) => {
    res.status(405).json({ success: false, message: "Method not Allowed!!" });
  })
  .put("/", (req, res) => {
    res.status(405).json({ success: false, message: "Method not Allowed!!" });
  })
  .delete("/", (req, res) => {
    res.status(405).json({ success: false, message: "Method not Allowed!!" });
  })
  .post("/", register);

export default userRegisterRouter;
