import React from "react"
import {Feather} from "@expo/vector-icons"
import {Tabs} from "expo-router"


export default function Layout() {
  return (
    <Tabs screenOptions={{
      headerShown: false,
      tabBarStyle:{
        backgroundColor: "#202020",
      },
      tabBarShowLabel: false
    }}>
      <Tabs.Screen name="home/index" options={{
        tabBarIcon: ()=> (<Feather name="home" color={"#FFF"} size={20} />)
      }} />
      <Tabs.Screen name="send/index" options={{
        tabBarIcon: ()=> (<Feather name="send" color={"#FFF"} size={20} />),
        tabBarShowLabel: false
      }}  /> 
    </Tabs>
  );
}