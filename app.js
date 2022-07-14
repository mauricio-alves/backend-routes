const express = require("express");
require("dotenv").config();

const app = express();
const dbConnect = require("./config/db.config");
dbConnect();

app.use(express.json());

const userRouter = require("./routes/user.routes");
app.use("/user", userRouter);

const addressRouter = require("./routes/address.routes");
app.use("/address", addressRouter);

app.listen(Number(process.env.PORT), () => {
  console.log(`Server up and running at port ${process.env.PORT}`);
});
