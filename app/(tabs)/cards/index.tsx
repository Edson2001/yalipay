import React from 'react';
import { StatusBar } from "expo-status-bar";
import { View, Text, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import {Feather} from "@expo/vector-icons"
import Card from "@Components/Card"

const cards: React.FC = () => {
  return (
    <SafeAreaView className="bg-background p-7">
      <StatusBar  style="light"  />
      <SafeAreaView className="flex-col h-screen">
        <View>
          <Text className="text-white font-bold text-[15px]  mb-[40px] mt-[40px]">YaliPay</Text>
          <View className="flex-row items-center justify-between">
            <Text className="text-white font-bold text-[24px] mb-[30px]">Cartões</Text>
            <Feather name="file-plus" size={20} color="#FFF" />
          </View>
        </View>

        <ScrollView>
          <Card />
          <Card color="bg-[#ED1E79]" />
        </ScrollView>
      </SafeAreaView>
    </SafeAreaView>
  );
}

export default cards;