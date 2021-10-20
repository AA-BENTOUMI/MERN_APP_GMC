const express = require("express");
const connectDB = require("./config/connectDB");
require("dotenv").config();
//*** middleware global
const app = express();
app.use(express.json())
//**** connect DB
connectDB();
//************************************** */
//*** router****/
app.use("/api/user", require("./router/user"))
app.use("/api/user", require("./router/userProfile"))
app.use("/api/admin", require("./router/admin"))
app.use("/api/room", require("./router/room"))
//***************************** */
const PORT = process.env.PORT;
app.listen(PORT, (err) =>
  err ? console.log(err) : console.log(`server is running in PORT= ${PORT}`)
);