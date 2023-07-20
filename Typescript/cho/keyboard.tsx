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
        {children}
      </KeyboardAwareScrollView>
    </TouchableWithoutFeedback>
  );
};
