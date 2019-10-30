const express = require("express");
const dotenv = require("dotenv");
dotenv.config({ path: "./config/config.env" });

const app = express();

const { PORT } = process.env;
app.listen(PORT, () => {
	console.log(`server running on port ${PORT} in ${process.env.NODE_ENV} mode`);
});
