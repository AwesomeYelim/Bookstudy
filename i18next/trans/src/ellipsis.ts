import ''

// /**
//  * 1. 컴포넌트 : client\src\common\functions\ellipsis.ts
//  * 2. 작성일 : 2023.06.14 / 15시 59분 00초
//  * 3. 작성자 : 홍예림
//  * 4. 설명 : **외국어 적용시** 말줄임표 (...) ellipsis 가 적용된 태그에만 title을 표시
//  */

//  import i18n from 'locales/i18n';

//  export interface TitleEl extends Element {
//    clientWidth: number;
//    scrollWidth: number;
//    title: string;
//    innerText: string;
//    children: HTMLCollectionOf<Element>;
//  }
 
//  export type TitleType = {
//    ref: (e: HTMLDivElement) => void;
//    onFocus: (e: React.FocusEvent<TitleEl>) => void;
//    onMouseOver: (e: React.MouseEvent<TitleEl>) => void;
//    style?: React.CSSProperties;
//  };
 
//  const ellipsisStyle = (e: HTMLDivElement) => {
//    e.style.overflow = 'hidden';
//    e.style.textOverflow = 'ellipsis';
//    e.style.whiteSpace = 'nowrap';
//    e.style.display = 'block';
//    return e;
//  };
 
//  export const titleCondition: TitleType = {
//    // style: (() => {
//    //   if (i18n.language !== 'ko') {
//    //     return { overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', display: 'block' };
//    //   }
//    //   return {};
//    // })(),
//    ref: (e) => {
//      if (e && i18n.language !== 'ko') {
//        if (e.clientWidth < e.scrollWidth) {
//          ellipsisStyle(e);
//        }
//        // controller option 글씨 적용
//        if (e.className === 'title') {
//          if (e.clientWidth <= e.scrollWidth) {
//            ellipsisStyle(e);
//            e.style.paddingTop = '10px';
//          }
//        }
//        // 화면에 딱 맞는 경우 flex 적용
//        if (e.clientWidth === e.scrollWidth) {
//          ellipsisStyle(e);
//          e.style.display = 'flex';
//        }
//      }
//    },
 
//    onFocus: (e) => {
//      e.stopPropagation();
//    },
//    onMouseOver: (e) => {
//      e.stopPropagation();
//      if (
//        i18n.language !== 'ko' &&
//        !e.currentTarget.children.length &&
//        e.currentTarget.innerText &&
//        e.currentTarget.clientWidth < e.currentTarget.scrollWidth
//      ) {
//        e.currentTarget.title = e.currentTarget.innerText;
//      }
//    },
//  };
 