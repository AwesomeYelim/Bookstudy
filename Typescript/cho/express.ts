import express, { RequestHandler } from "express";

const app = express();

app.use(express.json()); // body parser
app.use(express.urlencoded({ extended: false }));
app.use("/", express.static("./public"));

/** 미들웨어는 RequestHandler 타입이다. - 문맥적 추론 o */
app.get("/", (req, res) => {});

declare global {
  namespace Express {
    export interface Request {
      name: "yelim";
    }
    export interface Response {
      name: "zzang";
    }
  }
}

/** 이런식으로 바깥으로 뺀다면 문맥적 추론 x */
const middle: RequestHandler = (req, res, next) => {
  req.name;
  req.cookies;
  req.user;
  req.session;
};
app.get("/", middle);

// app.use((err, req, res, next) => {
//   console.log(err);
// });

app.listen(8080, () => {});
