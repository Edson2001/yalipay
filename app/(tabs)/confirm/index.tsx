import React from 'react';
import { StatusBar } from "expo-status-bar";
import { View, Text, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import ButtonLink from "@Components/ButtonLink"

const confirm: React.FC = () => {
  return (
    <ScrollView className="bg-background p-7">
      <StatusBar  style="light"  />
      <SafeAreaView className="flex-col justify-around h-screen">
        <View>
          <Text className="text-white font-bold text-[15px]  mb-[40px]">YaliPay</Text>
          <Text className="text-white font-bold text-[24px] mb-[30px]">Validar Operação</Text>
          <Text className="text-white">
            Para validar a transferência, no valor de AOA 79,45, insira o código de confirmação que recebeu por SMS.
          </Text>
        </View>

        <TouchableOpacity className="flex-row">
            <Text className="text-white">Não recebi o código de confirmação, R</Text>
            <Text className="text-buttonColor">eenviar</Text>
        </TouchableOpacity>

        <View>
          <ButtonLink onClick={()=> {}} text="Confirmar" link='/done' classButton="mb-[12px] bg-buttonColor" />
          <Text className="text-center text-white font-bold text-[13px]">Cancelar Operação</Text>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

export default confirm;