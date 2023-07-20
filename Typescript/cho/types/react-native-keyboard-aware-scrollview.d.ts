declare module "react-native-keyboard-aware-scrollview" {
  import { Component } from "react";
  // declare const KeyboardAwareScrollView: React.Component;
  class KeyboardAwareScrollViewComponent extends Component<ViewProps> {}
  export class KeyboardAwareScrollView extends KeyboardAwareScrollViewComponent {}

  export { KeyboardAwareScrollView };
}
