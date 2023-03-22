import React from 'react';
import { StatusBar } from "expo-status-bar";
import { View, Text, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import {Feather} from "@expo/vector-icons"
import Card from "@Components/Card"

import { Link } from 'expo-router';

const cards: React.FC = () => {
  return (
    <SafeAreaView className="bg-background p-7">
      <StatusBar  style="light"  />
      <SafeAreaView className="flex-col h-screen">
        <View>
          <Text className="text-white font-bold text-[15px]  mb-[40px] mt-[40px]">YaliPay</Text>
          <View className="flex-row items-center justify-between">
            <Text className="text-white font-bold text-[24px] mb-[30px]">Cartões</Text>
            <Link href="/addcard" >
              <Feather name="file-plus" size={20} color="#FFF" />
            </Link>
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