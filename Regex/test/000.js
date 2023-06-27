const str = "Hello, my name is Yelim. I really hope you guys have good day~!";

const arr = [
  "yelim1.jpg",
  "yelim2.jpg",
  "yeil3.png",
  "yein1.xls",
  "nun2.jpg",
  "dong1.xls",
  "don2.xls",
  "dong3.xls",
  "don4.xls",
  "sal.png",
  "sal2.png",
];

function test(e) {
  for (let i of e) {
    i.match("don..") && console.log(i.match("don..")[0]);
  }

  // return console.log(e.match('m\\.')[0])
}

test(arr);