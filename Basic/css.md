# css 헷갈리거나 몰랐던 부분

- `display : contents` 는 box 요소를 생성하지 않고 접근성 tree 에서도 제외됨

- 형제요소 선택자 8번째부터 14번째 까지

```css
&:nth-child(n + 8):nth-child(-n + 14) {
  //
}
```

- css 우선 순위 관련 설명

<https://mong-blog.tistory.com/entry/CSS-%EC%8A%A4%ED%83%80%EC%9D%BC-%EC%9A%B0%EC%84%A0%EC%88%9C%EC%9C%84%EB%A5%BC-%EC%A0%95%ED%95%98%EB%8A%94-Cascade-Layerlayer-1>
