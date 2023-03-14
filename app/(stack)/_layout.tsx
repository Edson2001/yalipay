import React from "react"
import {Feather} from "@expo/vector-icons"
import {Stack} from "expo-router"

export default function Layout() {
  return (
    <Stack screenOptions={{
        headerShown: false
    }}>
      <Stack.Screen name="login/index" />
      <Stack.Screen name="signup/index"  /> 
    </Stack>
  );
}