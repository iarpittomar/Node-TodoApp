const http = require("http");
const fs = require("fs");

// const myReadStream = fs.createReadStream(
//   __dirname + "/readBuffer.txt",
//   "utf-8"
// );

// const myWriteStream = fs.createWriteStream(__dirname + "/writeBuffer.txt");

// myReadStream.on("data", (chunk) => {
//   console.log("new chunk received");
//   myWriteStream.write(chunk);
// });

//use pipe on readable streams
// myReadStream.pipe(myWriteStream);
const obj = {
  firstName: "Arpit",
  lastName: "Tomar",
};

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  const obj = {
    firstName: "Arpit",
    lastName: "Tomar",
  };
  //   const myReadStream = fs.createReadStream(__dirname + "/index.html", "utf-8");
  //   myReadStream.pipe(res);
  res.end(JSON.stringify(obj));
});

server.listen(3000, "127.0.0.1");
console.log("Listening to port 3000");
