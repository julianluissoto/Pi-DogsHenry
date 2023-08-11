const server = require("./src/app.js");
const { conn } = require("./src/db.js");
require("dotenv").config();
const axios = require("axios");
const { Dog, Temperament } = require("./src/db");
const { PORT } = process.env;

conn.sync({ force: false }).then(() => {
  server.listen(PORT, () => {
    console.log("listening on port", PORT);
  });
});
