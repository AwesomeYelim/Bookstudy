export interface TitleEl extends Element {
  clientWidth: number;
  scrollWidth: number;
  title: string;
  innerText: string;
  children: HTMLCollectionOf<Element>;
}

export type TitleType = {
  ref: (e: HTMLDivElement | HTMLAnchorElement | null) => void;
};

declare const titleCondition: TitleType;
export default titleCondition;
