import { redirect } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  console.log("middleware 가 실행되고 있음! 체크중");
  if (request.nextUrl.pathname.startsWith("/products/1004")) {
    console.log("middleware 경로를 redirect 함");
    return NextResponse.redirect(new URL("products", request.url));
  }
}

// 제품 경로에 한에서만 middleware 실행함
export const config = {
  matcher: ["/products/:path"],
};
