// /**
//  * 1. 컴포넌트 : client\src\locales\mutiTranslateSheet.js
//  * 2. 작성일 : 2023.05.23 / 14시 09분 06초
//  * 3. 작성자 : 홍예림
//  * 4. 설명 : googleSheet 연동 및 googleSheet => Json 파일(추가 및 수정사항 반영) 자동화
//  */

// import fs from 'fs';
// import * as path from 'path';
// import google from 'google-spreadsheet';
// // import prettier from 'prettier'
// import dotEnv from 'dotEnv';
// import ko from '../ko/translation.json';
// import ja from '../ja/translation.json';

// // google Spreadsheet id
// const doc = new google.GoogleSpreadsheet('15URUcI8eRzi_iTZC7tZhI6BKMSJvmk5wnhSlXwtfch4');

// // google-spreadsheet => Json 연동
// async function Downloader() {
//   // 서버실행 이전에 env path -> 개발환경으로 설정, env file 을 호출
//   dotEnv.config({ path: '.env.development', override: true });

//   await doc.useServiceAccountAuth({
//     client_email: process.env.REACT_APP_GOOGLE_SERVICE_ACCOUNT_EMAIL as string,
//     private_key: process.env.REACT_APP_GOOGLE_PRIVATE_KEY as string,
//   });
//   await doc.loadInfo();
//   const sheet1 = doc.sheetsByIndex[0]; // WorkSheet1 선택
//   const rows = await sheet1.getRows();
//   const sheetHeader = doc.sheetsById[0].headerValues; // WorkSheet1 header
//   const trimHeader = [...sheetHeader].splice(1, sheetHeader.length - 1); // 'ss_numbering' 부분 제외
//   // console.log(sheetHeader); // :FIXME api headerValues 가 [] 로 올때가 있음 - 추후 수정
//   const langArr = [ko, ja];

//   const headers = langArr.map((langVar, i) => {
//     return { [trimHeader[i]]: langVar };
//   });
//   headers.forEach((_, i) => {
//     const sheetLang: { [key in string]: string } = {};
//     let jsonLang: { [key in string]: string } = {};
//     const [strLang, objLang]: [string, { [key in string]: string }] = [trimHeader[i], langArr[i]];
//     rows.forEach((row) => {
//       // 각 header 부분의 value 를 객체 형식으로 만들어줌
//       sheetLang[row.ss_numbering] = row[strLang];
//     });

//     // 각각의 언어 파일내 추가된 key의 여부를 확인
//     const addKeys = Object.keys(sheetLang).filter((key) => !Object.keys(objLang).includes(key));

//     // value 값이 수정된 경우
//     const differValues = Object.entries(sheetLang).filter(([key, value]) => objLang[key] !== value);

//     // // key 또는 value 값이 삭제된 경우
//     // const deleteProps = Object.entries(objLang).filter(
//     //   ([key, value]) => !Object.keys(sheetLang).includes(key) || !Object.values(sheetLang).includes(value)
//     // );

//     // 추가된 키가 있거나 && 수정사항 발생시 && 삭제된 사항이 있을시 파일 수정 실행
//     if ((addKeys && addKeys.length) || (differValues && differValues.length)) {
//       jsonLang = { ...sheetLang };
//       // // 삭제된 key 가 있는경우
//       // if (deleteProps.length) {
//       //   deleteProps.forEach(([key]) => {
//       //     delete jsonLang[key];
//       //   });
//       // }
//       // 추가된 키가 있는경우
//       if (addKeys.length) {
//         addKeys.forEach((key) => {
//           jsonLang[key] = sheetLang[key];
//         });
//       }
//       // 수정된 값이 있는경우
//       if (differValues.length) {
//         differValues.forEach(([key, value]) => {
//           jsonLang[key] = value;
//         });
//       }

//       fs.writeFile(
//         path.join(`src/locales/${strLang}/translation.json`),
//         // prettier.format(JSON.stringify(jsonLang), { filepath: `src/locales/${strLang}/translation.json` }),
//         JSON.stringify(jsonLang, null, 3),
//         (err) => console.log(err)
//       );

//       // literal type 추론 적용
//       if (strLang === 'ko') {
//         fs.writeFile(
//           `src/common/hooks/copyKo.ts`,
//           `export const fixko = ${JSON.stringify(jsonLang, null, 3)} as const`,
//           (err) => console.log(err)
//         );
//       }
//     }
//   });
// }
// Downloader();
