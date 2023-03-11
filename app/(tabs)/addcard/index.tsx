import { StatusBar } from "expo-status-bar";
import { Text, SafeAreaView, View, ScrollView, Image} from "react-native";
import Input from "@Components/Input";

import ButtonLink from '@Components/ButtonLink';

export default function addcard() {
  return (
    <ScrollView className="bg-background p-7">
      <StatusBar  style="light"  />
      <SafeAreaView className="flex-col justify-around h-screen">
        <View>
          <Text className="text-white font-bold text-[15px]">YaliPay</Text>
          <Text className="text-white font-bold text-[24px] mt-10 mb-[32px]">Add Cartão</Text>
          <Input label="Número do Cartão" classInput="mb-[30px]" />
        </View>

        <View>
          <ButtonLink link="/donecard" text="Confirmar" classButton="mb-[12px] bg-buttonColor" />
          <Text className="text-center text-white font-bold text-[13px]">Cancelar Operação</Text>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}