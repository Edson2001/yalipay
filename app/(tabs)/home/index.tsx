import { StatusBar } from "expo-status-bar";
import { Text, SafeAreaView, View, ScrollView, Image, TouchableOpacity, FlatList} from "react-native";

//import {Feather} from "@expo/vector-icons"
import Card from "@Components/Card"
import Item from "@Components/Item";

export default function Home() {
  return (
    <ScrollView className="bg-background p-5">
      <StatusBar  style="light"  />
      <Text className="text-[#FFF] font-bold text-[24px] mt-10 mb-10">YaliPay</Text>
      <Card />
      <ScrollView>
        <Text className="text-[#FFF] font-bold text-[13px] mt-10 mb-[12px]">Transações Recentes</Text>
        <FlatList data={[1, 2, 3, 5, 6, 7, 8, 9, 10]} renderItem={()=> (<Item />)} />
      </ScrollView>
    </ScrollView>
  );
}