import React from "react";
import { Dimensions } from "react-native";
import { Image, type ImageProps } from "tamagui";

export default function BackgroundImage(props: ImageProps) {
  return (
    <Image
      source={require("../../assets/images/new-bg.webp")}
      position="absolute"
      top={0}
      left={0}
      width={Dimensions.get("screen").width}
      height={Dimensions.get("screen").height}
      blurRadius={25}
      opacity={0.25}
      {...props}
    />
  );
}
