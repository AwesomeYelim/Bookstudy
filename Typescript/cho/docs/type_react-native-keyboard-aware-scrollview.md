# react-native-keyboard-aware-scrollview 직접 타이핑하기

- react-native &react-native-keyboard-aware-scrollview 설치

```sh
yarn add react-native react-native-keyboard-aware-scrollview
```

- 만약 다음과 같이 type이 없는 라이브러리는

```ts
import {} from "react-native-keyboard-aware-scrollview"; // error
```

- types/react-native-keyboard-aware-scrollview.d.ts 파일을 생성하여 직접 타이핑해준다

```ts
declare module "react-native-keyboard-aware-scrollview" {}
```

- ❓ 다음과 같이 타입 모듈이 없는 KeyboardAwareScrollView의 타이핑을 어떻게 할수 있을까

```tsx
/** keyboard.tsx  */
import { FC, ReactNode } from "react";
import { Keyboard, StyleSheetProperties, TouchableWithoutFeedback } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scrollview";

interface Props {
  children: ReactNode;
  style: StyleSheetProperties;
}

export const DismisskeyboardView: FC<Props> = ({ children, ...props }): JSX.Element => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <KeyboardAwareScrollView {...props} style={props.style}>
        {/* error*/}
        {children}
      </KeyboardAwareScrollView>
    </TouchableWithoutFeedback>
  );
};
```

- 부모 컴포넌트인 TouchableWithoutFeedback 를 타고 들어가서 자식컴포넌트의 타입을 유추해보자

```ts
declare class TouchableWithoutFeedbackComponent extends React.Component<TouchableWithoutFeedbackProps> {}
declare const TouchableWithoutFeedbackBase: Constructor<TimerMixin> &
  Constructor<TouchableMixin> &
  typeof TouchableWithoutFeedbackComponent;
export class TouchableWithoutFeedback extends TouchableWithoutFeedbackBase {}
```

- 그러면 다음과 같이 타이핑을 해줄수 있다.

```ts
declare module "react-native-keyboard-aware-scrollview" {
  import { Component } from "react";
  class KeyboardAwareScrollViewComponent extends Component<ViewProps> {}
  export class KeyboardAwareScrollView extends KeyboardAwareScrollViewComponent {}

  export { KeyboardAwareScrollView };
}
```
