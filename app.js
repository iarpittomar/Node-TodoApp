const http = require("http");
const fs = require("fs");

const myReadStream = fs.createReadStream(
  __dirname + "/readBuffer.txt",
  "utf-8"
);

myReadStream.on("data", (chunk) => {
  console.log("new chunk received");
  console.log(chunk);
});

// let server = http.createServer((req, res) => {
//   console.log(req.url);
//   res.writeHead(200, { "Content-Type": "text/plain" });
//   res.end("Hey guys");
// });

// server.listen(3000, "127.0.0.1");
// console.log("Listening to port 3000");
