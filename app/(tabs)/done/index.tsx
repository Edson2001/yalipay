import React from 'react';
import { View, ScrollView, Text, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import { StatusBar } from "expo-status-bar";
import ButtonLink from '@Components/ButtonLink';

const done: React.FC = () => {
  return (
    <ScrollView className="bg-background p-7">
      <StatusBar  style="light"  />
      <SafeAreaView className="flex-col  h-screen">
        
        <Text className="text-white font-bold text-[15px]  mb-[40px] mt-[40px]">YaliPay</Text>
        
        <View className="flex-col h-full items-center justify-center">
            <Image className="mb-[20px]" source={require("@Images/cloud.png")} />
            <Text className="text-white w-[247px] text-center mb-[84px]">Sua transferência foi realizada com sucesso</Text>
            <ButtonLink classText="text-buttonColor" link='/home' text='Voltar ao Inicio' />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

export default done;