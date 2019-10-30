const express = require("express");
const dotenv = require("dotenv");
dotenv.config({ path: "./congif/config.env" });

const app = express();

const { PORT } = process.env;
app.listen(PORT, () => {
	console.log("server running");
});
