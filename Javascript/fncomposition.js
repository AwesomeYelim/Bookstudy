// 합성함수 pipe

const str = "Benefit Of Doubt";

const s = (str) => str.split(" ");
const l = (str) => str.map((el) => el.toLowerCase());
const j = (str) => str.join("");

// 왼쪽에서 오른쪽 실행
const pipe =
  (...fn) =>
  (input) => {
    return fn.reduce((acc, fn) => {
      return fn(acc);
    }, input);
  };

// 오른쪽에서 왼쪽 실행
const compose =
  (...fn) =>
  (input) => {
    return fn.reduceRight((acc, fn) => {
      return fn(acc);
    }, input);
  };

console.log(pipe(s, l, j)(str)); // benefitofdoubt
console.log(compose(j, l, s)(str)); // benefitofdoubt
