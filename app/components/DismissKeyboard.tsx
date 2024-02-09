import React from "react";
import {
  Keyboard,
  TouchableWithoutFeedback,
  TouchableWithoutFeedbackProps,
} from "react-native";

export default function DismissKeyboard({
  children,
  ...props
}: TouchableWithoutFeedbackProps) {
  function onDismiss() {
    Keyboard.dismiss();
  }

  return (
    <TouchableWithoutFeedback onPress={onDismiss} {...props}>
      {children}
    </TouchableWithoutFeedback>
  );
}
