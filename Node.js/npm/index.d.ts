export interface TitleEl extends Element {
  clientWidth: number;
  scrollWidth: number;
  title: string;
  innerText: string;
  children: HTMLCollectionOf<Element>;
}

export type TitleType<T = { display?: "block" }> = {
  onFocus: (e: React.FocusEvent<TitleEl | SVGElement>) => void;
  onMouseOver: (e: React.MouseEvent<TitleEl | SVGElement>) => void;
  style?: React.CSSProperties & T;
};

declare const titleCondition: TitleType;
export default titleCondition;
