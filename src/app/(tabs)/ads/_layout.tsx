import { Stack } from "expo-router";

export default function AdsStack() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="editProduct" />
      <Stack.Screen name="[id]" />
    </Stack>
  );
}
