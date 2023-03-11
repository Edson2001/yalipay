import React from 'react';
import { StatusBar } from "expo-status-bar";
import { View, Text, ScrollView, SafeAreaView } from 'react-native';
import Input from "@Components/Input";
import Button from "@Components/Button";
// import { Container } from './styles';

const confirm: React.FC = () => {
  return (
    <ScrollView className="bg-background p-7">
      <StatusBar  style="light"  />
      <SafeAreaView className="flex-col justify-around h-screen">
        <View>
          <Text className="text-white font-bold text-[15px]  mb-10">YaliPay</Text>
          <Text className="text-white font-bold text-[24px] mt-10 mb-[62px]">Validar Operação</Text>
          <Text>
            Para validar a transferência, no valor de AOA 79,45, insira o código de confirmação que recebeu por SMS.
          </Text>
        </View>

        <View className="flex-row">
            <Text>Não recebi o código de confirmação, </Text>
            <Text className="text-buttonColor">Reenviar</Text>
        </View>

        <View>
          <Button onClick={()=> {}} text="Confirmar" classButton="mb-[12px]" />
          <Text className="text-center text-white font-bold text-[13px]">Cancelar Operação</Text>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

export default confirm;