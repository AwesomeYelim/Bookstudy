import ''

/**
 * 1. 컴포넌트 : client\src\common\functions\ellipsis.ts
 * 2. 작성일 : 2023.06.14 / 15시 59분 00초
 * 3. 작성자 : 홍예림
 * 4. 설명 : **외국어 적용시** 말줄임표 (...) ellipsis 가 적용된 태그에만 title을 표시
 */

//  import i18n from 'locales/i18n';

//  export interface TitleEl extends Element {
//    clientWidth: number;
//    scrollWidth: number;
//    title: string;
//    innerText: string;
//    children: HTMLCollectionOf<Element>;
//  }
 
//  export type TitleType = {
//    ref: (e: HTMLDivElement | HTMLAnchorElement | null) => void;
//    // onFocus: (e: React.FocusEvent<TitleEl>) => void;
//    // onMouseOver: (e: React.MouseEvent<TitleEl>) => void;
//    style?: React.CSSProperties;
//  };
 
//  const ellipsisStyle = (e: HTMLDivElement) => {
//    e.style.overflow = 'hidden';
//    e.style.textOverflow = 'ellipsis';
//    e.style.whiteSpace = 'nowrap';
//    e.style.display = 'block';
//    e.title = e.innerText;
 
//    return e;
//  };
 
//  /** children 이 있을경우 */
//  const depth = (currentTarget: TitleEl) => {
//    if (currentTarget) {
//      const { clientWidth, scrollWidth, children } = currentTarget;
 
//      if (!children?.length && currentTarget?.innerText && clientWidth < scrollWidth) {
//        ellipsisStyle(currentTarget as HTMLDivElement);
//      } else {
//        Array.prototype.filter.call(children, (el: TitleEl & HTMLCollectionOf<Element>) => depth(el));
//      }
//    }
//  };
 
//  /** 글자 width 값을 연산하여 ellipsis (...) 적용 및 title 태그를 반영해준다 */
//  export const titleCondition: TitleType = {
//    ref: (e) => {
//      //  전체 filter 모달내 checkbox text 적용제외
//      const exceptClass = ['ssr__checkbox__label', 'text', 'main-title', 'title', 'notice', 'part__item'];
 
//      if (e && i18n.language !== 'ko') {
//        const { children } = e;
 
//        if (!children.length) {
//          if (e.clientWidth < e.scrollWidth) {
//            ellipsisStyle(e as HTMLDivElement);
//          }
 
//          // 화면에 딱 맞는 경우 flex 적용
//          if (e.clientWidth === e.scrollWidth) {
//            ellipsisStyle(e as HTMLDivElement);
 
//            if (!exceptClass.some((el) => e.className.includes(el))) {
//              e.style.display = 'flex';
//            }
//          }
//        } else {
//          depth(e);
//        }
//      }
//    },
 
//    // onFocus: (e) => {
//    //   e.stopPropagation();
//    // },
//    // onMouseOver: (e) => {
//    //   e.stopPropagation();
 
//    //   const { style, children, clientWidth, scrollWidth, innerText } = e.currentTarget as EventTarget &
//    //     TitleEl & { style: { [key in string]: string } };
 
//    //   /** 한글에 이미 ellipsis 가 적용되어 (...) 이 나오는 경우  */
//    //   if (
//    //     style.overflow === 'hidden' &&
//    //     style.textOverflow === 'ellipsis' &&
//    //     style.whiteSpace === 'nowrap' &&
//    //     clientWidth < scrollWidth
//    //   ) {
//    //     e.currentTarget.title = e.currentTarget.innerText;
//    //   }
 
//    //   if (i18n.language !== 'ko') {
//    //     if (!children.length && innerText && clientWidth < scrollWidth) {
//    //       e.currentTarget.title = innerText;
//    //     } else if (children.length) {
//    //       depth(e.currentTarget);
//    //     }
//    //   }
//    // },
//  };
 