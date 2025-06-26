import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="home screen" options={{ headerShown: false }} />
    </Stack>
  );
}
