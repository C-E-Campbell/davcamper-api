const express = require("express");
const dotenv = require("dotenv");
dotenv.config({ path: "./config/config.env" });

// Route Files
const bootcamps = require("./routes/bootcamps");

const app = express();

// Mount Routers
app.use("/api/v1/bootcamps", bootcamps);

const { PORT } = process.env;
app.listen(PORT, () => {
	console.log(`server running on port ${PORT} in ${process.env.NODE_ENV} mode`);
});
