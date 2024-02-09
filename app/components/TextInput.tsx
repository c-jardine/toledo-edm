import { Input, InputProps } from "tamagui";

export default function TextInput(props: InputProps) {
  return (
    <Input
      size="$5"
      borderRadius="$8"
      pl="$10"
      bg="$blackA8"
      borderColor="$whiteA6"
      letterSpacing={0.64}
      focusStyle={{
        borderColor: "$whiteA6",
      }}
      {...props}
    />
  );
}
