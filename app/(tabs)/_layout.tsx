import React from "react"
import { StatusBar } from "expo-status-bar";
import { Text, SafeAreaView, View, ScrollView, Image, TouchableOpacity, FlatList} from "react-native";
import {Feather} from "@expo/vector-icons"
import {Tabs} from "expo-router"


export default function Layout() {
  return (
    <Tabs screenOptions={{ headerShown: false, headerStyle:{backgroundColor: "#202020"}}}>
        <Tabs.Screen name="home"/>
        <Tabs.Screen name="send" />
        <Tabs.Screen name="card" />
    </Tabs>
  );
}