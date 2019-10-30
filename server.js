const http = require("http");

const todos = [
	{ id: 1, text: "todo1" },
	{ id: 2, text: "todo2" },
	{ id: 3, text: "todo3" },
	{ id: 4, text: "todo4" },
	{ id: 6, text: "todo5" }
];

const server = http.createServer((req, res) => {
	const { method, url } = req;
	let body = [];
	req
		.on("data", chunk => {
			body.push(chunk);
		})
		.on("end", () => {
			body = Buffer.concat(body).toString();
			let status = 404;
			const response = {
				success: false,
				data: null
			};

			if (method === "GET" && url === "/todos") {
				status = 200;
				response.success = true;
				response.data = todos;
			}

			res.writeHead(200, {
				"Content-Type": "application/json",
				"X-Powered-By": "Node.js"
			});
		});
	res.end(JSON.stringify(response));
});

const PORT = 5000;

server.listen(PORT, () => {
	console.log(`server running on port ${PORT}`);
});
