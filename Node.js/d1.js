// 🚩 순환 참조
// const dep2 = require("./d2");
// console.log("require dep2", dep2);
// module.exports = () => {
//   console.log("dep2", dep2);
// };

// 🚩global 객체 참조
// module.exports = () => global.message;

// const { spawn } = require("child_process");

// const process = spawn("python", ["test.py"]);

// process.stdout.on("data", function (data) {
//   console.log(data.toString());
// }); // 실행 결과

// process.stderr.on("data", function (data) {
//   console.error(data.toString());
// }); // 실행 에러
const http = require("http");
const fs = require("fs").promises;

http
  .createServer(async (req, res) => {
    try {
      const data = await fs.readFile("./test.html");
      res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
      res.end(data);
    } catch (err) {
      console.error(err);
      res.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
      res.end(err.message);
    }
  })

  .listen(8080, () => {
    console.log("8080포트입니다");
  });

const server1 = http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.write("<h1>Hello Node!</h1>"); // stream 방식
    res.write("<h1>8081</h1>");
    res.end("<h1>the end</h1>");
  })

  .listen(8081);

server1.on("listening", () => {
  console.log("8081포트입니다");
});
server1.on("error", (err) => {
  console.log(err);
});
