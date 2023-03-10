import React from "react"
import {Feather} from "@expo/vector-icons"
import {Stack} from "expo-router"


export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="login" />
      <Stack.Screen name="signup"  /> 
    </Stack>
  );
}