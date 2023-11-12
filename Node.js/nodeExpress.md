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

app.use((req, res, next) => {
  console.log("모든 요청에 다 실행됩니다.");
  next(); // 이걸 써줘야 다음 실행기로 넘어간다
});

app.set("port", process.env.PORT || 3010);

// 하나의 요청에 하나의 res 를 걸수 있다.
app.get("/", (req, res) => {
  res.send("Hello, Express");
});

app.get("/:name", (req, res) => {
  // wildcard 사용
  res.send(`Hello, ${req.params.name}`);
});

app.use((err, req, res, next) => {
  // 에러 처리 미들웨어는 매개변수가 err, req, res, next로 네 개여야함
  console.error(err);
  res.status(500).send(err.message);
});

app.listen(app.get("port"), () => {
  console.log(app.get("port"), "번 포트에서 대기 중");
});
```

## 자주 사용하는 미들웨어

- 미들웨어는 익스프레스의 핵심, `요청`과 `응답`의 `중간(middle)`에 위치하기 때문에 `미들웨어(middleware)`라고 부르는 것

- (위와 같은 코드에서 모든 함수에 공통으로 실행하고 싶을때 사용)미들웨어는 `app.use`와 함께 사용 된다. `app.use(미들웨어)` 꼴

![nodeExpress54](./img/nodeExpress54.png)

> wildcard

- 와일드카드 문자(wildcard character)는 컴퓨터에서 특정 명령어로 명령을 내릴 때, 여러 파일을 한꺼번에 지정할 목적으로 사용하는 기호를 가리킨다.

- (주의점) 위에서 아래로 실행되기 때문에 `/yelim` 주소로 이동하게되면 위의 함수에서 멈추게 되므로 `wildcard` 사용 라우터들(범위가 넓은 라우터들)은 맨 아래쪽에 위치시켜준다.

```js
app.get("/:name", (req, res) => {
  res.send(`Hello, wild`);
});

app.get("*", (req, res) => {
  // 모든 요청에 대해서
  res.send(`Hello, everyone`);
});

app.get("/yelim", (req, res) => {
  res.send(`Hello, yelim`);
});
```

- 다음과 같은 형태로도 사용 가능하다.

```js
app.use(
  (req, res, next) => {
    console.log("1. 모든 요청에 다 실행됩니다.");
    next();
  },
  (req, res, next) => {
    console.log("2. 모든 요청에 다 실행됩니다.");
    next();
  },
  (req, res, next) => {
    console.log("3. 모든 요청에 다 실행됩니다.");
    next();
  },
  (req, res, next) => {
    console.log("4. 모든 요청에 다 실행됩니다.");
    next();
  }
);
```

- 다음구조에서 `next` 인자 값으로 err 넣을시 에러처리 구문의 미들웨어로 이동함

```js
app.use((req, res, next) => {
  console.log(" 모든 요청에 다 실행됩니다.");
  try {
    console.log(asda);
  } catch (err) {
    next(err);
  }
});
...
app.use((err, req, res, next) => {
  // 에러 처리 미들웨어는 매개변수가 err, req, res, next로 네 개
  console.error(err);
  res.status(500).send(err.message);
});
```

- 만약 다음 구조에서 `next` 안에 `route` 를 적는다면 다음 라우터로 이동하게됨

```js
app.get(
  "/",
  (res, req, next) => {
    console.log("실행되나요");
    next("route");
  },
  (res, req, next) => {
    console.log("여기는 실행 x");
  }
);
app.get("/", (res, req, next) => {
  console.log("다음은 여기가 실행됩니다 ~");
});

// 실행되나요
// 다음은 여기가 실행됩니다 ~
```
