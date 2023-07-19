import fs from "fs";
import http from "http";
import path from "path";

const server = http
  .createServer((req, res) => {
    const id = setTimeout(() => {
      console.log("hello");
    }, 1000); // node에서 setTimeout 의 return 값은 id

    fs.readFile(path.join(__dirname, "index.html"), (err, data) => {
      res.writeHead(200);
      res.end(data);
    });
  })
  .listen(8080, () => {
    console.log("서버 시작쓰~");
  });

exports = server;
module.exports = server;
