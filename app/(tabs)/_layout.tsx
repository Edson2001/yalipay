import React from "react"
import {Feather, FontAwesome} from "@expo/vector-icons"
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
        tabBarIcon: ()=> (<FontAwesome name="chevron-right" color={"#FFF"} size={20} />)
      }} />
      <Tabs.Screen name="send/index" options={{
        tabBarIcon: ()=> (<Feather name="activity" color={"#FFF"} size={20} />),
        tabBarShowLabel: false
      }}  /> 
      <Tabs.Screen name="cards/index" options={{
        tabBarIcon: ()=> (<Feather name="activity" color={"#FFF"} size={20} />),
        tabBarShowLabel: false
      }}  /> 

      <Tabs.Screen name="confirm/index" options={{
        href: null
      }}   /> 
      <Tabs.Screen name="done/index" options={{
        href: null
      }}   /> 
    </Tabs>
  );
}