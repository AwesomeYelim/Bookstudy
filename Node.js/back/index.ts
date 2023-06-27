import * as express from "express";

const app = express();
const prod: boolean = process.env.NODE_ENV === "production";

app.set("port", prod ? process.env.PORT : 3056);

app.get("/", (req, res, next) => {
  res.send("백앤드 정상임");
});

app.listen(app.get("port"), () => {
  console.log(`server is running on ${process.env.PORT}`);
});
