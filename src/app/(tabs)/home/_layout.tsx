import { Stack } from "expo-router";

export default function HomeStack() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="createProduct" />
      <Stack.Screen name="preview" />
      <Stack.Screen name="[id]" />
    </Stack>
  );
}
