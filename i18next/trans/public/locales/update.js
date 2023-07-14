// /**
//  * 1. 컴포넌트 : client\src\locales\update.js
//  * 2. 작성일 : 2023.05.23 / 14시 09분 06초
//  * 3. 작성자 : 홍예림
//  * 4. 설명 : ko 파일에 있는 key 추출하여 ja 파일 업데이트 시 사용
//  */

// // eslint-disable-next-line @typescript-eslint/no-var-requires, no-import-assign
// const fs = require("fs");
// // eslint-disable-next-line @typescript-eslint/no-var-requires
// const dotEnv = require("dotenv");
// // eslint-disable-next-line @typescript-eslint/no-var-requires
// const axios = require("axios");
// // eslint-disable-next-line @typescript-eslint/no-var-requires
// const prettier = require("prettier");

// // 기존에 있던 json 만 읽어올수 있음, 경로 - 절대 경로로 설정/ utf8 - Buffer 파일로 오는거 방지
// const strKo = fs.readFileSync("src/locales/ko/translation.json", "utf8", (err) => console.log({ err }));

// const ko = JSON.parse(strKo);

// const strJp = fs.readFileSync("src/locales/ja/translation.json", "utf8", (err) => console.log({ err }));

// const ja = JSON.parse(strJp);

// // 기존 ko/translation.json 파일에서의 새로운 key-value 생성여부 확인
// const [differ] = Object.keys(ko).filter((el) => !Object.keys(ja).includes(el));

// // 번역할 ko
// const differVal = ko[differ];
// const translate = async (cont) => {
//   // 서버실행 이전에 env path -> 개발환경으로 설정, env file 을 호출
//   dotEnv.config({ path: ".env.local", override: true });

//   const config = {
//     headers: {
//       "X-Naver-Client-Id": process.env.REACT_APP_PAPAGO_ID,
//       "X-Naver-Client-Secret": process.env.REACT_APP_PAPAGO_SECRET,
//     },
//   };

//   await axios
//     .post("https://openapi.naver.com/v1/papago/n2mt", { source: "ko", target: "ja", text: cont }, config)
//     .then((res) => {
//       ja[differ] = res.data.message.result.translatedText;
//       // 경로 - 절대 경로로 설정, prettier 자동 세팅
//       fs.writeFile(
//         "src/locales/ja/translation.json",
//         prettier.format(JSON.stringify(ja), { filepath: "src/locales/ja/translation.json" }),
//         (err) => console.log(err)
//       );
//     })
//     .catch((err) => {
//       console.log({ err });
//     });
// };

// // ko 파일에 새로운 키 생성시 ja 파일에 번역본을 넣어준다.
// if (differ) {
//   translate(differVal);
// }
