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

//fs.unlink --> for delete the file

//make a directory asyncs way
fs.mkdir("stuff", () => {
  fs.readFile("readme.txt", "utf-8", (err, data) => {
    fs.writeFile("./stuff/writeMe.txt", data, () => {
      console.log("Created the directory and written");
    });
  });
});

setTimeout(() => {
  fs.unlink("./stuff/writeMe.txt", () => {
    fs.rmdir("stuff", () => {
      console.log("your directory has been removed");
    });
  });
}, 5000);
