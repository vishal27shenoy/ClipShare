const dotenv = require('dotenv').config();
const express = require('express');
const DBConnection = require('./config/DBConfiguration');
const Route = require('./routes/addText');
const cron = require("node-cron");
const model = require('./model/clipboardmodel');
const app = express();
const cors = require('cors');
DBConnection();
app.use(express.json());
app.use(
	cors({origin: "*"})
);

cron.schedule("0 0 * * *", async () => {
  console.log("Cron job started");
  try {
    const result = await model.deleteMany({});
    console.log("Deletion result:", result);
  } catch (err) {
    console.error("Error deleting documents:", err);
  }
  console.log("Cron job completed");
});


app.use("/note", Route);
app.listen(5000 , () => {
    console.log("Server Connected");
});