import { FC, MouseEvent, ReactNode, useCallback, useEffect, useRef, useState } from "react";

interface Props {
  data?: number;
  children?: ReactNode | undefined;
}

export const ReactC: FC<Props> = (p: Props) => {
  const [s, setS] = useState("");
  const divRef = useRef<HTMLDivElement>(document.querySelector("div")!);
  const inputRef = useRef(0);

  const call = useCallback((e: MouseEvent<HTMLDivElement>) => {
    return <div></div>;
  }, []);

  useEffect(() => {
    console.log("asda?");
    inputRef.current += 1;
  }, []);
  return (
    <div className="div" onClick={call} ref={divRef}>
      <input />
    </div>
  );
};
