import React from "react";
import {
  Controller,
  FieldValue,
  FieldValues,
  useFormContext,
} from "react-hook-form";
import { Input, InputProps, View } from "tamagui";

interface TextInputProps<T extends FieldValues> {
  name: FieldValue<T>;
  inputProps?: InputProps;
  icon?: React.ElementType;
}

export default function TextInput<T extends FieldValues>({
  inputProps,
  icon,
  name,
}: TextInputProps<T>) {
  const { control, formState } = useFormContext<T>();

  const getFieldStyles = () => {
    if (formState.dirtyFields[name] && !formState.errors[name]) {
      return {
        borderColor: "$green7",
        backgroundColor: "rgba(57,108,77,0.15)",
        iconColor: "$green7",
      };
    } else if (formState.errors[name]) {
      return {
        borderColor: "$red7",
        backgroundColor: "rgba(156,49,47,0.15)",
        iconColor: "$red7",
      };
    }
    return {
      borderColor: "$whiteA6",
      backgroundColor: "$blackA8",
      iconColor: "$gray4",
    };
  };

  return (
    <View>
      <View
        position="absolute"
        zIndex={1}
        display="flex"
        justifyContent="center"
        pl="$4"
        h="100%"
        pointerEvents="none"
      >
        {icon &&
          React.createElement(icon, { color: getFieldStyles().iconColor })}
      </View>
      <Controller
        control={control}
        name={name}
        render={({ field: { value, onChange, onBlur } }) => (
          <Input
            size="$5"
            pl={icon && "$10"}
            borderRadius="$8"
            borderColor={getFieldStyles().borderColor}
            bg={getFieldStyles().backgroundColor}
            letterSpacing={0.64}
            focusStyle={{
              borderColor: getFieldStyles().borderColor,
            }}
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
            {...inputProps}
          />
        )}
      />
    </View>
  );
}
