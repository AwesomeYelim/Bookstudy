import Image from "next/image";
import { Inter } from "@next/font/google";
import { notFound } from "next/navigation";
import os from "os";
import Counter from "./components/counter";
import styles from "./page.module.css";

export default function Home() {
  console.log("안녕 ! 서버");
  console.log(os.hostname());

  return (
    <>
      <h1>마! 홈페이지다!!2</h1>
      <Counter />
      <Image src="https://images.unsplash.com/photo-1441986300917-64674bd600d8" alt="shop" width={400} height={400} />
    </>
  );
}
