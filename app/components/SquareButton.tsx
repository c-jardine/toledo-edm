import React from "react";
import {
    Animated,
    TouchableWithoutFeedback,
    TouchableWithoutFeedbackProps,
} from "react-native";
import { View } from "tamagui";

export default function SquareButton({
  children,
  ...props
}: TouchableWithoutFeedbackProps) {
  // Use useRef to persist the animated value without re-rendering the component
  const scale = React.useRef(new Animated.Value(1)).current;

  // Function to scale down the button
  const handlePressIn = () => {
    Animated.timing(scale, {
      toValue: 0.9,
      duration: 50,
      useNativeDriver: true, // Use native driver for better performance
    }).start();
  };

  // Function to scale up the button
  const handlePressOut = () => {
    Animated.timing(scale, {
      toValue: 1,
      duration: 50,
      useNativeDriver: true, // Use native driver for better performance
    }).start();
  };

  return (
    <TouchableWithoutFeedback
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      {...props}
    >
      <Animated.View
        style={[
          {
            transform: [{ scale }],
            width: 72,
            height: 72,
          },
        ]}
      >
        <View
          p="$2"
          bg="$gray1"
          w={72}
          h={72}
          borderRadius="$8"
          borderWidth="$0.5"
          borderColor="$gray6"
        >
          <View
            bg="#f4fa0f"
            w="100%"
            h="100%"
            borderRadius="$6"
            justifyContent="center"
            alignItems="center"
          >
            {children}
          </View>
        </View>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
}
