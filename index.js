const express = require("express");
const cors = require("cors");
const fs = require("fs");
const router = express.Router();
require("dotenv").config();
const app = express();
const port = process.env.PORT;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(router)
const routes = require("./routes/index.route")
app.use('/', routes)
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
