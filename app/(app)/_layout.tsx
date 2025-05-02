import { Text } from "react-native";
import { Redirect, Stack } from "expo-router";
import { useSession } from "@/contexts/AuthContext";

export default function AppLayout() {
  // This layout can be deferred because it's not the root layout.
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="login" options={{ headerShown: false }} />
      <Stack.Screen name="register" options={{ headerShown: false }} />
      <Stack.Screen name="category" />
    </Stack>
  );
}
