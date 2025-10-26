import { Stack } from 'expo-router';
import React from 'react';

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="landingpage" />
      <Stack.Screen name="step" />
      <Stack.Screen name="typename" />
      <Stack.Screen name="greetings" />
      <Stack.Screen name="home" /> {/* ✅ Add this */}
    </Stack>
  );
}
