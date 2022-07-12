const express = require("express");
const app = express();

app.use(express.json());

const userRouter = require("./routes/user.route");
app.use("/user", userRouter);

const addressRouter = require("./routes/address.route");
app.use("/address", addressRouter);

app.listen(4000, () => {
  console.log("Server up and running at port 4000");
});
