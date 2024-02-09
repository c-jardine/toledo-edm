import React from "react";
import { Image, View, type ImageProps, type ViewProps } from "tamagui";

interface ResponsiveLogoProps {
  containerProps?: ViewProps;
  imageProps?: ImageProps;
}

export default function ResponsiveLogo({
  containerProps,
  imageProps,
}: ResponsiveLogoProps) {
  return (
    <View width="100%" height={64} {...containerProps}>
      <Image
        source={require("../../assets/images/logo.png")}
        width="100%"
        height="100%"
        resizeMode="contain"
        {...imageProps}
      />
    </View>
  );
}
