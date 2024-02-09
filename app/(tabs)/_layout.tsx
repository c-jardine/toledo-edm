import { Calendar, Home, Settings } from "@tamagui/lucide-icons";
import { Tabs } from "expo-router";
import { Button } from "tamagui";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "black",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ focused }) => (
            <Button
              unstyled
              scaleIcon={1.5}
              icon={<Home />}
              color={focused ? "$purple9" : "whiteA10"}
            ></Button>
          ),
        }}
      />
      <Tabs.Screen
        name="events"
        options={{
          tabBarIcon: ({ focused }) => (
            <Button
              unstyled
              scaleIcon={1.5}
              icon={<Calendar />}
              color={focused ? "$purple9" : "whiteA10"}
            ></Button>
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          tabBarIcon: ({ focused }) => (
            <Button
              unstyled
              scaleIcon={1.5}
              icon={<Settings />}
              color={focused ? "$purple9" : "whiteA10"}
            ></Button>
          ),
        }}
      />
    </Tabs>
  );
}
