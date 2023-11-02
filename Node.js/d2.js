// 🚩순환참조
// const dep2 = require("./d1");
// console.log("require dep2", dep2);
// module.exports = () => {
//   console.log("dep2", dep2);
// };

// 🚩global 객체 참조
// const A = require("./d1");
// global.message = "안녕하세요";
// console.log(A());

// 🚩다양한 console.log 기능
// const string = "abc";
// const number = 1;
// const boolean = true;
// const obj = {
//   outside: {
//     inside: {
//       key: "value",
//     },
//   },
// };
// console.time("전체 시간");
// console.log("평범한 로그입니다 쉼표로 구분해 여러 값을 찍을 수 있습니다");
// console.log(string, number, boolean);
// console.error("에러 메시지는 console.error에 담아주세요");

// console.table([
//   { name: "제로", birth: 1994 },
//   { name: "hero", birth: 1988 },
// ]);

// console.dir(obj, { colors: false, depth: 2 });
// console.dir(obj, { colors: true, depth: 1 });

// console.time("시간 측정");
// for (let i = 0; i < 100000; i++) {}
// console.timeEnd("시간 측정");

// function b() {
//   console.trace("에러 위치 추적");
// }
// function a() {
//   b();
// }
// a();

// console.timeEnd("전체 시간");
