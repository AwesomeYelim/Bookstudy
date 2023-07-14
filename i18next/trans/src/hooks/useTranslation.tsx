// //

// /**
//  * 1. 컴포넌트 : client\src\locales\temp.ts
//  * 2. 작성일 : 2023.05.17 / 18시 09분 06초
//  * 3. 작성자 : 홍예림
//  * 4. 설명 : 언어 번역시 사용하는 hook 커스텀
//  */

// // import { t, TOptionsBase } from 'i18next';
// import React from 'react';
// import { Trans, useTranslation } from 'react-i18next';
// import { fixko } from './copyKo';

// export declare namespace TransType {
//   type Ko = typeof fixko;
//   interface TransComp {
//     defaults?: string;
//     compvalue?:
//       | {
//           count?: number | string;
//           context?: number | string;
//         }
//       | { readonly [key: string]: number | string };
//     components: { [key in string]: JSX.Element };
//   }

//   interface TransMag<T extends keyof Ko, B = T> {
//     key: T | T[] | string[];
//     /** key 가 T[] 으로 들어올시 타입을 Ko[T] 타입이 아닌 string 으로 처리   */
//     defaultMsg: T extends B ? ([B] extends [T] ? Ko[T] : string) : Ko[T];
//     TagComp?: TransType.TransComp;
//     value?: { [key in string]: number | string };
//     text?: string;
//   }
// }

// /** tag 및 가변값 포함시  */
// export function UseTrans<T extends keyof TransType.Ko>({ key, defaultMsg, TagComp, value }: TransType.TransMag<T>) {
//   const { t } = useTranslation();

//   /** HTML 태그 가 들어갈 시 Translate 사용하는 Component  */
//   if (TagComp) {
//     return (
//       <Trans
//         i18nKey={key}
//         defaultsValue={defaultMsg} // JSON 의 key가 없을때 보여주는 메세지
//         defaults={TagComp?.defaults} // 받는 key 값의 있고 번역 대상 value가 없을 때 메세지를 보여준다.
//         components={TagComp?.components}
//         // {...TagComp.compvalue} // tag 와 가변값을 함께 사용
//         values={TagComp.compvalue}
//       />
//     );
//   }

//   if (value) return t(key, value);
// }


export {}