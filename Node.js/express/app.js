const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log(" 모든 요청에 다 실행됩니다.");
  try {
    console.log(asda)
  } catch (err) {
    next(err)
  }
});

app.set("port", process.env.PORT || 3010);

app.get("*", (req, res) => {
  // 모든 요청에 대해서
  res.send(`Hello, everyone`);
});
app.get("/yelim", (req, res) => {
  res.send(`Hello, yelim`);
});
app.get("/:name", (req, res) => {
  res.send(`Hello, ${req.params.name}`);
});
// app.get("/", (req, res) => {
//   res.send("Hello, Express");
// });

app.use((err, req, res, next) => {
  // 에러 처리 미들웨어는 매개변수가 err, req, res, next로 네 개
  console.error(err);
  res.status(500).send(err.message);
});

app.listen(app.get("port"), () => {
  console.log(app.get("port"), "번 포트에서 대기 중");
});
