# ESLint 에러

- 다음과 같은 에러 => `엔드라인 시퀀스`를 수정하자

```sh
Delete `␍` eslint (prettier/prettier)
```

- `.esLint.js` 다음 파일을 찾아서 `rule`에 다음을 추가해주자

```js
module.exports = {
...
    rules: {
        ...
        'prettier/prettier': [
            'error',
            {
                endOfLine: 'auto',
            },
        ],
    },
}

```

- 안된다면 에디터를 껐다가 키면 반영됨
