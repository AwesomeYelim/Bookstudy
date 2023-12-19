# 간단한 chrome-extention 을 만들어 보자

- 리액트 초기 세팅후(npx create-react-app my-react-app --template typescript)
- 다음과 같이 설치

```sh
yarn add -D @craco/craco @types/chrome
```

- 아래와 같이 파일들을 생성해준다

```sh
craco.config.js

src/chrome/content.ts
```

```js
// craco.config.js
module.exports = {
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      return {
        ...webpackConfig,
        entry: {
          main: [
            env === "development" && require.resolve("react-dev-utils/webpackHotDevClient"),
            paths.appIndexJs,
          ].filter(Boolean),
          // 파일이름: 현재 path
          content: "./src/chrome/content.ts",
        },
        output: {
          ...webpackConfig.output,
          // build 폴더 안에 생성될 path
          filename: "static/js/[name].js",
        },
        optimization: {
          ...webpackConfig.optimization,
          runtimeChunk: false,
        },
      };
    },
  },
};
```
