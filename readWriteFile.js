const fs = require("fs");

const readFileSync = fs.readFileSync("README.md", "utf-8");
console.log(readFileSync);
const writeFileSync = fs.writeFileSync("syncWriteFile.txt", readFileSync);

fs.readFile("README.md", "utf-8", (err, data) => {
  if (data) {
    console.log(data);
    fs.writeFile("asyncWriteFile.txt", data, (error, res) => {
      if (error) throw error;
      console.log("file has been saved");
    });
  } else {
    console.log(err);
  }
});
