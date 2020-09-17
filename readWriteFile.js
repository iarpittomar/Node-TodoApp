const fs = require("fs");

const readFileSync = fs.readFileSync("README.md", "utf-8");
console.log(readFileSync);
const writeFileSync = fs.writeFileSync("asyncWriteFile.txt", readFileSync);
