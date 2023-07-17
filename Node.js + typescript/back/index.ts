import * as express from "express";
import * as morgan from "morgan";
import * as cors from "cors";
import * as cookieParser from "cookie-parser";
import helmet from "helmet";
import * as expressSession from "express-session";
import * as dotenv from "dotenv";
import * as passport from "passport";
import * as hpp from "hpp";

import { sequelize } from "./models";
import userRouter from "./routes/user";
import postRouter from "./routes/post";
import postsRouter from "./routes/posts";
import hashtagRouter from "./routes/hashtag";

dotenv.config();
const app = express();
const prod: boolean = process.env.NODE_ENV === "production";

app.set("port", prod ? process.env.PORT : 3056);
// force true 로 하면 테이블 다시 만들어짐(초기화)
sequelize
  .sync({ force: false })
  .then(() => {
    console.log("데이터 베이스 연결 성공");
  })
  .catch((err: Error) => {
    console.log(err);
  });

if (prod) {
  app.use(hpp());
  app.use(helmet());
  app.use(morgan("combined"));
  app.use(cors({ origin: /nodebird\.com$/, credentials: true }));
} else {
  app.use(morgan("dev"));
  app.use(
    cors({
      origin: true,
      credentials: true,
    })
  );
}

app.use("/", express.static("uploads"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(
  expressSession({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET!,
    cookie: {
      httpOnly: true,
      secure: false, // https -> true
      domain: prod ? ".nodebird.com" : undefined,
    },
    name: "rnbck",
  })
);
app.use("/user", userRouter);
app.use("/post", postRouter);
app.use("/posts", postsRouter);
app.use("/hashtag", hashtagRouter);
app.get("/", (req, res, next) => {
  res.send("백앤드 정상임");
});

app.listen(app.get("port"), () => {
  console.log(`server is running on ${process.env.PORT}`);
});
