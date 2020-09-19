const http = require("http");
const fs = require("fs");

const myReadStream = fs.createReadStream(
  __dirname + "/readBuffer.txt",
  "utf-8"
);

const myWriteStream = fs.createWriteStream(__dirname + "/writeBuffer.txt");

// myReadStream.on("data", (chunk) => {
//   console.log("new chunk received");
//   myWriteStream.write(chunk);
// });

//use pipe on readable streams
myReadStream.pipe(myWriteStream);

// let server = http.createServer((req, res) => {
//   console.log(req.url);
//   res.writeHead(200, { "Content-Type": "text/plain" });
//   res.end("Hey guys");
// });

// server.listen(3000, "127.0.0.1");
// console.log("Listening to port 3000");
