import { StatusBar } from "expo-status-bar";
import { Text, SafeAreaView, View, ScrollView, Image, TouchableOpacity, FlatList} from "react-native";

import Card from "@Components/Card"
import Item from "@Components/Item";

export default function Home() {
  return (
    <SafeAreaView className="bg-background p-5">
      <StatusBar  style="light"  />
      <Text className="text-[#FFF] font-bold text-[24px] mt-10 mb-10">YaliPay</Text>
      <Card />
      <View className="flex-row mt-[45px]  mb-[25px]">
          <Text className="text-[#FFF] font-bold text-[13px]  mr-[4px]">Movimentos </Text>
          <Text className="text-[#FFF] font-light text-[13px]  ">Recentes</Text>
        </View>
      <ScrollView>
        <FlatList data={[1, 2, 3, 5, 6, 7, 8, 9, 10]} renderItem={()=> (<Item />)} />
      </ScrollView>
    </SafeAreaView>
  );
}