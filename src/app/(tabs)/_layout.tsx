import { colors } from "@/styles/colors";
import { Tabs } from "expo-router";
import { House, SignOut, Tag } from "phosphor-react-native";
import { Platform } from "react-native";

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.gray[1],
        tabBarInactiveTintColor: colors.gray[4],
        tabBarStyle: {
          borderTopWidth: 0,
          paddingTop: 12,
          height: 82,
          backgroundColor: colors.gray[7],
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          tabBarIcon: ({ color }) => <House size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="ads"
        options={{
          tabBarIcon: ({ color }) => <Tag size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="logout"
        options={{
          tabBarIcon: ({ color }) => (
            <SignOut size={24} color={colors.red_light} />
          ),
        }}
      />
    </Tabs>
  );
}
