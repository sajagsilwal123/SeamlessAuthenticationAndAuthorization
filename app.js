import express from "express";
import ConnectDB from "./config/database.js";
import userRegisterRoute from "./routes/userRegisterRoute.js";
import userLoginRoute from "./routes/userLoginRoute.js";

const app = express();
const PORT = 5001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.use(express.json());

//Routing
app.use("/register", userRegisterRoute);
app.use("/login", userLoginRoute);

//Database Connection
ConnectDB();

export default app;
