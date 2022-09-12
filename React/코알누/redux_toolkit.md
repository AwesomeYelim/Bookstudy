# Redux Toolkit 

### **Redux Toolkit 왜 만들어졌을까?**

- Redux 저장소 구성이 너무 복잡해서
- Redux 에서 작업수행시 많은 패키지를 추가해야해서
- Redux 에서는 너무 많은 <mark>상용구</mark> 코드가 필요해서

**📌 상용구 코드란(boilerplate-code) ?**

    수정하지 않거나 최소한의 수정만을 거쳐 여러 곳에 필수적으로 사용되는 코드를 말한다, 프로그램의 로직이나 언어의 필수 구문은 아니면서, 관례적으로 소스 파일 시작 부분에 추가되는 선언들과 같은 것

👉🏻 참고) https://blog.naver.com/oioioq/222339375293

**_Redux 툴킷 은 Redux 코드를 개선하는 데 도움이 될 수 있다._**


### **Redux Toolkit 설치**

- 새로운 프로젝트 시작시

```
# Redux + Plain JS template
npx create-react-app my-app --template redux

# Redux + TypeScript template
npx create-react-app my-app --template redux-typescript
```

- 기존 프로젝트로 시작시
```
# NPM
npm install @reduxjs/toolkit

# Yarn
yarn add @reduxjs/toolkit
```

**다음과 같이 기존 리덕스를 제거해주어도 상관없다**

```
npm uninstall redux
```




📚 참고) 

https://redux-toolkit.js.org/introduction/getting-started
https://www.youtube.com/watch?v=UKnLwVm9suY&t=563s
