const nop = Symbol("nop");
const curry = (f) => {
  return (a, ..._) => (_.length ? f(a, ..._) : (..._) => f(a, ..._));
};
const take = curry((l, iter) => {
  const res = [];
  iter = iter[Symbol.iterator]();
  return (function recur() {
    let cur;
    while (!(cur = iter.next()).done) {
      const a = cur.value;
      if (a instanceof Promise) {
        return a
          .then((a) => ((res.push(a), res).length === l ? res : recur()))
          .catch((e) => (e === nop ? recur() : Promise.reject(e)));
      }
      res.push(a);
      if (res.length === l) return res;
    }
    return res;
  })();
});
const step = (a, f) => (a instanceof Promise ? a.then(f) : f(a));
const accumulate = (acc, a, f) => {
  if (a instanceof Promise)
    return a.then((a) => f(acc, a), (e) => (e === nop ? acc : Promise.reject(e))); // prettier-ignore
  return f(acc, a);
};
const head = (iter) => step(take(1, iter), ([h]) => h);

const reduce = curry((f, acc, iter) => {
  if (!iter) return reduce(f, head((iter = acc[Symbol.iterator]())), iter);
  iter = iter[Symbol.iterator]();
  return step(acc, function recur(acc) {
    let cur;
    while (!(cur = iter.next()).done) {
      if (acc === false) return false;
      acc = accumulate(acc, cur.value, f);
      if (acc instanceof Promise) return acc.then(recur);
    }
    return acc;
  });
});

export const process = (...args) => reduce((a, f) => f(a), args);
export const pipe = (f, ...fs) => (...as) => process(f(...as), ...fs); // prettier-ignore
