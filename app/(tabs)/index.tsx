import { supabase } from "@/supabase";
import { Button, Image, View } from "tamagui";

export default function TabHomeScreen() {
  return (
    <View flex={1} alignItems="center">
      <View mt={64} width="100%" height={64}>
        <Image
          source={require("../../assets/images/logo.png")}
          width="100%"
          height="100%"
          resizeMode="contain"
        />
      </View>
      <Button onPress={() => supabase.auth.signOut()}>Sign out</Button>
    </View>
  );
}
