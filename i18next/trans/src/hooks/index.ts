import ''

// /**
//  * 1. 컴포넌트 : client\src\common\hooks\index.ts
//  * 2. 작성일 : 2022.06.16 / 10시 06분 34초
//  * 3. 작성자 : 김원석
//  * 4. 설명 : 공통으로 사용하는 커스텀 hook들 정의
//  */

// import React, { ContextType, useContext, useEffect, useState } from "react";
// import { api } from "common/functions";
// import { useSelector as useReduxSelector, useDispatch as useReduxDispatch, TypedUseSelectorHook } from "react-redux";
// import { RootState, AppDispatch } from "store/configStore";
// import { Blocker, History, Transition } from "history";
// import { Navigator as BaseNavigator, UNSAFE_NavigationContext as NavigationContext } from "react-router-dom";
// import { debounce } from "lodash";
// import { t } from "i18next";
// import { TransType, UseTrans } from "./useTranslation";

// // 간격 호출
// export { useInterval } from "./useInterval";
// // 해당하는 타겟의 스크롤의 밑부분을 감지하면 이벤트 호출
// export { useIntersectionObserver as useObserver } from "./useIntersectionObserver";

// // 컴포넌트가 언마운트될 때 사용하는 useEffect hook
// export const useUnmount = (f: () => void): void => {
//   React.useEffect(() => {
//     return () => {
//       f();
//     };
//   }, []);
// };

// // 컴포넌트가 마운트될 때 사용하는 useEffect hook
// export const useMount = (f: () => void): void => {
//   React.useEffect(() => {
//     f();
//   }, []);
// };

// // 컴포넌트가 언마운트될 때 api 취소 useEffect hook
// export const useApiCancel = (urls: string[]) => {
//   return React.useEffect(() => {
//     return () => {
//       const tokens = urls.map((url: string) => api.token[url]);
//       for (const token of tokens) {
//         if (token) token();
//       }
//     };
//   }, []);
// };

// // useSelector를 사용할때 자동적으로 타입을 정해주는 hook
// export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;

// // useDispatch 사용할때 자동적으로 타입을 정해주는 hook
// export const useDispatch = () => useReduxDispatch<AppDispatch>();

// // 현재 페이지 벗어날시 감지되는 hook
// interface Navigator extends BaseNavigator {
//   block: History["block"];
// }

// type NavigationContextWithBlock = ContextType<typeof NavigationContext> & {
//   navigator: Navigator;
// };

// /** 다른 페이지 이동시 감지되는 hook - 예림 */
// export const useBlocker = (blocker: Blocker, when = true) => {
//   const { navigator } = useContext(NavigationContext) as NavigationContextWithBlock;

//   React.useEffect(() => {
//     if (!when) {
//       return;
//     }

//     const unblock = navigator.block((tx: Transition) => {
//       const autoUnblockingTx = {
//         ...tx,
//         retry() {
//           unblock();
//           tx.retry();
//         },
//       };

//       blocker(autoUnblockingTx);
//     });

//     // eslint-disable-next-line consistent-return
//     return unblock;
//   }, [navigator, blocker, when]);
// };

// /**  단순 text 만 포함시 */
// export const textTrans = <T extends keyof TransType.Ko>({ key, defaultMsg, TagComp, value }: TransType.TransMag<T>) => {
//   /** 단순 text 배열로 들어올시 */
//   if (typeof key === "object" && key.length > 1) {
//     const severalKey = key.map((keyEl) => t(keyEl)).join("");

//     return severalKey;
//   }
//   /** tag 및 가변값 포함시  */
//   if (TagComp || value) {
//     UseTrans({ key, defaultMsg, TagComp, value });
//   }
//   return t(key, { defaultValue: defaultMsg });
// };

// /** window focus 여부 */
// export const useWindowFocus = () => {
//   const [focus, setFocus] = useState(true);

//   useEffect(() => {
//     window.addEventListener(
//       "focus",
//       () => {
//         setFocus(true);
//       },
//       false
//     );
//     window.addEventListener(
//       "blur",
//       () => {
//         setFocus(false);
//       },
//       false
//     );

//     return () => {
//       window.removeEventListener(
//         "focus",
//         () => {
//           setFocus(false);
//         },
//         false
//       );
//       window.removeEventListener(
//         "blur",
//         () => {
//           setFocus(false);
//         },
//         false
//       );
//     };
//   }, []);

//   return { focus };
// };

// export const useWindowResize = () => {
//   const [width, setWidth] = useState(0);
//   const [height, setHeight] = useState(0);

//   useEffect(() => {
//     const setSize = debounce(() => {
//       setWidth(window.innerWidth);
//       setHeight(window.innerHeight);
//     }, 0);

//     window.addEventListener("resize", setSize);

//     return () => {
//       window.removeEventListener("resize", setSize);
//     };
//   }, []);

//   return { width, height };
// };
