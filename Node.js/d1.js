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
