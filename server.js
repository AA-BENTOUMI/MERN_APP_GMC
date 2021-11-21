const express = require("express");
const connectDB = require("./config/connectDB");
require("dotenv").config();
var cors = require('cors')
//*** middleware global
const app = express();
app.use(cors())
app.use(express.json())
app.use('/uploads', express.static('uploads'));
//**** connect DB
connectDB();
//************************************** */
//*** router****/
app.use("/api/user", require("./router/user"))
app.use("/api/user", require("./router/userProfile"))
app.use("/api/admin", require("./router/admin"))
app.use("/api/room", require("./router/room"))
app.use("/api/mail", require("./router/mailing"))
//***************************** */
const PORT = process.env.PORT;
app.listen(PORT, (err) =>
  err ? console.log(err) : console.log(`server is running in PORT= ${PORT}`)
);