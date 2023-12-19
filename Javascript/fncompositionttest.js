// 합성 함수 연습

// const arr = [
//   { name: "yelim_1", age: 28 },
//   { name: "hh_2", age: 20 },
//   { name: "jj_3", age: 18 },
//   { name: "kk_4", age: 8 },
// ];

const input = "yelim_1hh_2jj_3kk_4";

const { remove, split } = {
  remove(name) {
    // console.log(name.match(/_\d/g));
    return name.replace(/_\d/g, "_");
  },
  split(name) {
    console.log(name);
    return name.split("_");
  },
};
const pipe =
  (...fn) =>
  (init) =>
    fn.reduce((acc, n_fn) => n_fn(acc), init);

console.log(pipe(remove, split)(input));
