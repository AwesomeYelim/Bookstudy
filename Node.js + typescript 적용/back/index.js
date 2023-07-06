"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
var prod = process.env.NODE_ENV === "production";
app.set("port", prod ? process.env.PORT : 3056);
app.get("/", function (req, res, next) {
    res.send("백앤드 정상임");
});
app.listen(app.get("port"), function () {
    console.log("server is running on ".concat(process.env.PORT));
});
