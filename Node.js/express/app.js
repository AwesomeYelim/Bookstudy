const express = require("express");
const app = express();
const session = require("express-session");
const morgan = require("morgan");
const multer = require("multer");
const cookieParser = require("cookie-parser");
const fs = require("fs");
const path = require("path");
const indexRouter = require("./router");
const userRouter = require("./router/user");

app.set("port", process.env.PORT || 3011);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(morgan("dev"));
app.use("/", indexRouter);
app.use("/user", userRouter);

app.use((req, res, next) => {
  res.status(404).send("Not Found");
});

app.use(morgan("dev"));
app.use(cookieParser("yelimcho"));
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: "yelimcho",
    cookie: {
      httpOnly: true,
      secure: false,
    },
    name: "session-cookie",
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 모든 요청에 대해서
app.get("/", (req, res) => {
  res.send(`Hello, everyone`);
});

app.listen(app.get("port"), () => {
  console.log(app.get("port"), "번 포트에서 대기 중");
});
