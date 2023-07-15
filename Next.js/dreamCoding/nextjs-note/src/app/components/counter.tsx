"use client";
import React, { useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(0);
  console.log("안녕 ! 클라이언트");

  return (
    <>
      <div>{counter}</div>
      <button onClick={() => setCounter(counter + 1)}>숫자 증가시키기 </button>
    </>
  );
}
