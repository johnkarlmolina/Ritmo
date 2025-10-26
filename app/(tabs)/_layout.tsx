import { Stack } from 'expo-router';
import React from 'react';

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="index" />         {/* Login */}
      <Stack.Screen name="landingpage" />   {/* Landing page */}
      <Stack.Screen name="step" />          {/* Step page if needed */}
    </Stack>
  );
}
