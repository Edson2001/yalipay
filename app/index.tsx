import { StatusBar } from "expo-status-bar";
import { Text, SafeAreaView, View, ScrollView, Image, TouchableOpacity, Pressable} from "react-native";
import ButtonLink from "@Components/ButtonLink"
//import {Feather} from "@expo/vector-icons"
//import Card from "@Components/Card"
//import Item from "@Components/Item"
//import { Link } from "expo-router";
//import SVGImg from '@Images/home.svg';
export default function Page() {
  return (
    <ScrollView className="bg-background p-5">
     
      <StatusBar  style="light"  />
     
      <View  className="w-full h-screen flex-col justify-center items-center" >
        <Text className="text-white font-bold text-4xl mb-7">YaliPay</Text>
        <Text className="text-white font-medium text-sm ">Confiaça não tem preço</Text>
        <Text className="text-white font-medium text-sm mb-[142px]">Seu dinheiro está seguro aqui</Text>

        <View className="flex-col">
          <ButtonLink classButton="bg-buttonColor mb-5" text="Já tenho uma conta" link="/login" />
          <ButtonLink classButton="border-2 border-buttonColor" classText="text-white" text="Me cadastrar" link="/signup" />
        </View>
      </View>
     
    </ScrollView>
  );
}