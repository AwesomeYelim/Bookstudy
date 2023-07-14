/**
 * 1. 컴포넌트 : client\src\locales\mutiTranslateSheet.js
 * 2. 작성일 : 2023.05.23 / 14시 09분 06초
 * 3. 작성자 : 홍예림
 * 4. 설명 : googleSheet 연동 및 Json 파일 => googleSheet(수정사항만 반영) 자동화
 */

// eslint-disable-next-line @typescript-eslint/no-var-requires, no-import-assign
const fs = require('fs');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { GoogleSpreadsheet } = require('google-spreadsheet');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const prettier = require('prettier');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const dotEnv = require('dotenv');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const ko = require('../ko/translation.json');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const ja = require('../ja/translation.json');

// google Spreadsheet id
const doc = new GoogleSpreadsheet('15URUcI8eRzi_iTZC7tZhI6BKMSJvmk5wnhSlXwtfch4');

// Json => google-spreadsheet 연동
async function Uploader() {
  // 서버실행 이전에 env path -> 개발환경으로 설정, env file 을 호출
  dotEnv.config({ path: '.env.development', override: true });

  await doc.useServiceAccountAuth({
    client_email: process.env.REACT_APP_GOOGLE_SERVICE_ACCOUNT_EMAIL,
    private_key: process.env.REACT_APP_GOOGLE_PRIVATE_KEY,
  });
  await doc.loadInfo();
  const sheet1 = doc.sheetsByIndex[0]; // WorkSheet1 선택
  const rows = await sheet1.getRows(); // 전체 row
  const sheetHeader = doc.sheetsById[0].headerValues; // WorkSheet1 header -> sheet의 header 가 기준
  const header = [...sheetHeader].shift(); // 'ss_numbering' 부분 제외

  // sheetHeader.forEach(
  //   (lang) =>
  //     rows.forEach((row) => {
  //       console.log(row[lang]);
  //     }) // sheet에 있는 ko, ja
  // );

  await sheet1.addRow({ ss_numbering: 'ss_7', ko: '자산 관리', ja: '資産管理' });
}
Uploader();
// async function Run() {
//   await doc.useServiceAccountAuth(credentials);
//   await doc.loadInfo();
//   const sheet1 = doc.sheetsByIndex[0]; // WorkSheet 선택
//   const result = await sheet1.getRows();
//   await sheet1.addRows([
//     { 'ss_numbering': 'ss_numbering', ko: 'ko', ja: 'ja', en: 'en' },
//     { ko: '자산 설정', ja: '資産設定', en: 'asset setup' },
//     { ko: '탐지 내역', ja: '検出履歴' },
//     { 'ss_numbering': 'ss_3', ko: '자산 관리', ja: '資産管理' },
//   ]);
//   result[2].ko = '추가되는 ko'; // 수정만 가능함
//   await result[2].save(); // save updates

//   // await sheet1.insertDimension('ROWS', { startIndex: 1, endIndex: 2 }, false);
//   // await sheet1.addRows([{ ㅁㄴㅇㅁㄴㅇ: 'ko' }]);
//   // await doc.addSheet({ title: '시트2' }); // 시트 추가
//   // await doc.updateProperties({ title: 'ssrTranslation' , }); // 구글 시트 이름 변경
//   // await doc.addSheet({ headerValues: ['', 'name', 'email'] }); // 시트 추가 및 header 설정
//   // eslint-disable-next-line no-underscore-dangle
//   console.log(result);
// }

// Run();
