// @desc   get all bootcamps
// @route  GET /api/v1/bootcamps
// @access Public
exports.getBootcamps = (req, res, next) => {
	res.status(200).json({ success: true, msg: "Show all bootcamps" });
};

// @desc   get a single bootcamps
// @route  GET /api/v1/bootcamps/:id
// @access Public
exports.getBootcamp = (req, res, next) => {
	res.status(200).json({ success: true, msg: "Show one bootcamps" });
};

// @desc   create a bootcamp
// @route  POST /api/v1/bootcamps/
// @access Private
exports.createBootcamp = (req, res, next) => {
	res.status(200).json({ success: true, msg: "create new bootcamp" });
};

// @desc   update a bootcamp
// @route  PUT /api/v1/bootcamps/:id
// @access Private
exports.updateBootcamp = (req, res, next) => {
	res.status(200).json({ success: true, msg: "update a  bootcamp" });
};

// @desc   delete a bootcamp
// @route  DELETE /api/v1/bootcamps/:id
// @access Private
exports.deleteBootcamp = (req, res, next) => {
	res.status(200).json({ success: true, msg: "delete bootcamp" });
};
