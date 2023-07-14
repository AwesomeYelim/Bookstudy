## 번역 작업시 참고사항 - 예림

- googleSpreadSheet 자동화 진행 : googleSpreadSheet에 생성되는 추가 및 수정사항 => Json에 반영
- 오름 차순으로 정렬후 추후 수정작업 진행
- global alert 문구 통일하며 진행
- 언어 추가시 :ADD 부분에 추가

## textTrans 와 UseTrans 라는 custom hook 을 사용한다.

개요) 사용시 명시적인 부분과 가독성을 중시, 여러 케이스들을 생각하여 내장 모듈 t()와 `<Trans/>`를 customizing 함

- test case

  1. 일반 text 만 사용하는 경우

  ```tsx
  textTrans({ key: 'ss_1293', defaultMsg: '탐지 경로 설정' });
  ```

      1-1. key 를 여러 개 쓰는 경우

  ```tsx
  textTrans({
    key: ['ss_1437', 'ss_524'],
    defaultMsg: '현재 진행 중인 작업이 있습니다. 변경사항을 저장하지 않고 작업을 취소하시겠습니까?',
  });
  ```

      1-2. key를 여러개 쓰는데 중간에 \n(개행) 을 넣어야 되는 경우

  ```tsx
  <pre>
    {textTrans({
      key: ['ss_1437', '\n', 'ss_524'],
      defaultMsg: '현재 진행 중인 작업이 있습니다. 변경사항을 저장하지 않고 작업을 취소하시겠습니까?',
    })}
  </pre>
  ```

  2. 가변값이 들어갈 경우

  ```tsx
  UseTrans({ key: 'ss_3', defaultMsg: '개 대상', count: csaData.assetCnt }); // count 는 해당 value 내 가변값의 named
  ```

      2-1. 가변값이 2개 이상 들어가는 경우

      - ts 모듈일 경우

  ```ts
  t('ss_47', { min, compValue, defaultValue: '{{min}} ~ {{compValue}} 사이의 숫자만 입력 가능합니다.' });
  ```

      - tsx 모듈일 경우

  ```tsx
  // tsx 모듈에 가변값이 2개이상 들어가는 경우가 없어서 예시로 반영합니다.
  UseTrans({
    key: 'ss_19',
    defaultMsg: '{{compValue}} ~ {{max}} 사이의 숫자만 입력 가능합니다.',
    value: { compValue, max },
  });
  ```

      - hook call error 가 발생하는 경우

  ```tsx
  t('ss_55', { msg: status.msg, defaultValue: '파일 업로드에 {{msg}}' });
  ```

  3. tag 가 들어가는 경우

  ```tsx
  UseTrans({
    key: 'ss_250',
    defaultMsg: '가용 일정을 설정하지 않은 경우 <span>기본값(24시간)</span>으로 설정됩니다.',
    TagComp: { components: { span: <span /> } },
  });
  ```

      3-1. tag 내 가변값이 들어가는 경우, 함께 들어가는 경우  {{count}}, {{context}} 으로 naming 제한

  ```tsx
  UseTrans({
    key: 'ss_79',
    defaultMsg: '{{context}}개<span>(예외: {{count}})</span>',
    TagComp: {
      components: { span: <span /> },
      value: { count: state.summary.exceptDirCnt, context: String(state.summary.targetDirCnt) },
    },
  });
  ```
