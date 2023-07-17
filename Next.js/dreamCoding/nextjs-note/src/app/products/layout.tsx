import Link from "next/link";
import { Metadata } from "next/types";
import styles from "./layout.module.css";

export const metadata: Metadata = {
  title: "멋진 제품 사이트 | 전체 제품 확인",
  description: "멋진 제품을 확인해 보세요",
};

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <nav className={styles.nav}>
        <Link href="/products/women">여성복</Link>
        <Link href="/products/men">남성복</Link>
      </nav>
      <section className={styles.product}>{children}</section>
    </>
  );
}
