require('dotenv').config();
const cors = require("cors");
const express = require("express");
const app = express();

global.__basedir = __dirname;

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

const initRoutes = require("./src/routes");

app.use(express.urlencoded({ extended: true }));
initRoutes(app);

let PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Running at localhost:${PORT}`);
});
