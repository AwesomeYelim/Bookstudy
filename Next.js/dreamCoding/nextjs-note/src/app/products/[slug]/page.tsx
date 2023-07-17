import { getProduct, getProducts } from "@/service/products";
import { notFound, redirect } from "next/navigation";
import Image from "next/image";
import clothesImage from "../../../public/images/clothes.jpg";
import GoProductsButton from "./GoProductsButton";

// export const revalidate = 3;

type Props = {
  params: {
    slug: string;
  };
};

export function generateMetadata({ params: { slug } }: Props) {
  return {
    title: `제품의 이름: ${slug}`,
  };
}

export default async function ProductPage({ params: { slug } }: Props) {
  const products = await getProduct(slug);

  if (!products) {
    redirect("/products");
    // notFound();
  }

  /** 서버 파일에 있는 데이터중 해당 제품의 정보를 찾아서 그걸 보여줌  */
  return (
    <>
      <h1>{products.name}제품 설명 페이지</h1>
      <Image src={`/images/${products.image}`} alt={products.name} width="300" height="300" />
      <GoProductsButton />
    </>
  );
}

export async function generateStaticParams() {
  /** 모든 제품의 페이지들을 미리 만들어 둘수 있게 해줄거임(SSG)  */
  const products = await getProducts();

  return products.map((product) => ({
    slug: product.id,
  }));
}
