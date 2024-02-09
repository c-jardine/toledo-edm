import { supabase } from "@/supabase";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronRight, Lock, Mail } from "@tamagui/lucide-icons";
import React from "react";
import { Controller, Path, useForm } from "react-hook-form";
import { Alert, AppState } from "react-native";
import { Button, Text, View } from "tamagui";
import z from "zod";
import BackgroundImage from "./BackgroundImage";
import KeyboardAvoidingView from "./KeyboardAvoidingView";
import ResponsiveLogo from "./ResponsiveLogo";
import SquareButton from "./SquareButton";
import TextInput from "./TextInput";

interface AuthFormInput {
  email: string;
  password: string;
}

const authSchema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(8, "Must be at least 8 characters"),
});

// Tells Supabase Auth to continuously refresh the session automatically if
// the app is in the foreground. When this is added, you will continue to receive
// `onAuthStateChange` events with the `TOKEN_REFRESHED` or `SIGNED_OUT` event
// if the user's session is terminated. This should only be registered once.
AppState.addEventListener("change", (state) => {
  if (state === "active") {
    supabase.auth.startAutoRefresh();
  } else {
    supabase.auth.stopAutoRefresh();
  }
});

export default function Auth() {
  const { control, handleSubmit, formState } = useForm<AuthFormInput>({
    mode: "onChange",
    resolver: zodResolver(authSchema),
  });

  async function signInWithEmail({ email, password }: AuthFormInput) {
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) Alert.alert(error.message);
  }

  async function signUpWithEmail({ email, password }: AuthFormInput) {
    const {
      data: { session },
      error,
    } = await supabase.auth.signUp({
      email: email,
      password: password,
    });

    if (error) Alert.alert(error.message);
    if (!session)
      Alert.alert("Please check your inbox for email verification!");
  }

  const getFieldStyles = (fieldName: Path<AuthFormInput>) => {
    if (formState.dirtyFields[fieldName] && !formState.errors[fieldName]) {
      return {
        borderColor: "$green7",
        backgroundColor: "rgba(57,108,77,0.15)",
        iconColor: "$green7",
      };
    } else if (formState.errors[fieldName]) {
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
    <KeyboardAvoidingView>
      <BackgroundImage />

      {/* Logo */}
      <View h="50%" justifyContent="center">
        <ResponsiveLogo />
      </View>

      <View gap={16} flex={1} px="$4">
        <View gap={16}>
          {/* Email input */}
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
              <Mail color={getFieldStyles("email").iconColor} />
            </View>
            <Controller
              control={control}
              name="email"
              render={({ field: { value, onChange, onBlur } }) => (
                <TextInput
                  borderColor={getFieldStyles("email").borderColor}
                  bg={getFieldStyles("email").backgroundColor}
                  focusStyle={{
                    borderColor: getFieldStyles("email").borderColor,
                  }}
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  placeholder="Email"
                  autoCapitalize={"none"}
                  keyboardType="email-address"
                />
              )}
            />
          </View>

          {/* Password input */}
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
              <Lock color={getFieldStyles("password").iconColor} />
            </View>
            <Controller
              control={control}
              name="password"
              render={({ field: { value, onChange, onBlur } }) => (
                <TextInput
                  borderColor={getFieldStyles("password").borderColor}
                  focusStyle={{
                    borderColor: getFieldStyles("password").borderColor,
                  }}
                  bg={getFieldStyles("password").backgroundColor}
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  placeholder="Password"
                  secureTextEntry
                  autoCapitalize={"none"}
                />
              )}
            />
          </View>
        </View>

        {/* Sign in button */}
        <View alignItems="flex-end">
          <SquareButton onPress={handleSubmit(signInWithEmail)}>
            <ChevronRight color="black" size="$2" strokeWidth={4} />
          </SquareButton>
        </View>
      </View>

      {/* Sign up button */}
      <View
        py="$8"
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        gap="$2"
      >
        <Text color="$whiteA11">Need an account?</Text>
        <Button
          unstyled
          textProps={{
            textTransform: "uppercase",
            letterSpacing: 0.64,
            fontSize: 16,
            color: "#f4fa0f",
          }}
          disabled={
            formState.isSubmitting || !formState.isDirty || !formState.isValid
          }
          onPress={handleSubmit(signUpWithEmail)}
        >
          Sign up
        </Button>
      </View>
    </KeyboardAvoidingView>
  );
}
