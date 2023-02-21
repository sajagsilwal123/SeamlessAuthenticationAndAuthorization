import mongoose from "mongoose";
const schema = mongoose.Schema;

const UserSchema = new schema(
  {
    username: { type: String, unique: true },
    password: { type: String },
    firstName: { type: String },
    lastName: { type: String },
    email: { type: String, unique: true },
    accessToken: { type: String },
    emailToken: { type: String },
    isEmailVerified: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

const userModel = mongoose.model("User", UserSchema);

export default userModel;
