import mongoose from "mongoose";
const mongoUrl = "mongodb://localhost:27017/UserSessionManagement";

const ConnectDB = () => {
  mongoose
    .set("strictQuery", false)
    .connect(mongoUrl)
    .then(
      console.log(`Successfully connected to the database: \n \t ${mongoUrl}`)
    )
    .catch((err) => {
      console.log(`Database Connection Failed!!`);
      console.log(err);
    });
};

export default ConnectDB;
