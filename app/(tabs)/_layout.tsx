import React from "react"
import {Feather, FontAwesome} from "@expo/vector-icons"
import {Tabs} from "expo-router"
import SVGImg from '@Images/home.svg';
import IconSend from '@Images/send.svg';
import IconCards from '@Images/folder.svg';

export default function Layout() {
  return (
    <Tabs screenOptions={{
      headerShown: false,
      tabBarStyle:{
        backgroundColor: "#202020",
        borderColor: "#202020",
        borderTopColor: "#202020"
      },
      tabBarShowLabel: false
    }}>
      <Tabs.Screen name="home/index" options={{
        tabBarIcon: ()=> ( <SVGImg width={20} height={21} />)
      }} />
      <Tabs.Screen name="send/index" options={{
        tabBarIcon: ()=> (<IconSend width={20} height={21} />),
        tabBarShowLabel: false
      }}  /> 
      <Tabs.Screen name="cards/index" options={{
        tabBarIcon: ()=> (<IconCards width={20} height={21} />),
        tabBarShowLabel: false
      }}  /> 

      <Tabs.Screen name="confirm/index" options={{
        href: null
      }}   /> 
      <Tabs.Screen name="done/index" options={{
        href: null
      }}   /> 
      <Tabs.Screen name="addcard/index" options={{
        href: null
      }}   />
      <Tabs.Screen name="donecard/index" options={{
        href: null
      }}   /> 
    </Tabs>
  );
}