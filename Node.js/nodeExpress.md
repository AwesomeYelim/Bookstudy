# express

## 필요 모듈 설치

- nodemon : 서버 코드에 수정 사항이 생길 때마다 매번 서버를 재시작하기는 귀찮으므로 nodemon 모듈로 서버를 자동으로 재시작한다.(배포이후에는 서버코드가 빈번하게 변경될일이 없으므로 개발용으로만 사용)

```sh
 npm i express
 npm i -D nodemon
```

- `app.js` 에 다음과 같은 코드를 작성

```js
const express = require("express");

const app = express();
app.set("port", process.env.PORT || 3010);

app.get("/", (req, res) => {
  res.send("Hello, Express");
});

app.listen(app.get("port"), () => {
  console.log(app.get("port"), "번 포트에서 대기 중");
});
```

## 자주 사용하는 미들웨어

- 미들웨어는 익스프레스의 핵심, `요청`과 `응답`의 `중간(middle)`에 위치하기 때문에 `미들웨어(middleware)`라고 부르는 것

- 미들웨어는 `app.use`와 함께 사용 된다. `app.use(미들웨어)` 꼴
