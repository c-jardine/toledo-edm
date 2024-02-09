import React from "react";
import {
  KeyboardAvoidingView as KbdAvoidingView,
  KeyboardAvoidingViewProps,
  Platform,
} from "react-native";

export default function KeyboardAvoidingView(props: KeyboardAvoidingViewProps) {
  return (
    <KbdAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1, backgroundColor: "black" }}
      {...props}
    ></KbdAvoidingView>
  );
}
