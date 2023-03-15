import { StatusBar } from "expo-status-bar";
import { Text, View, ScrollView} from "react-native";
import ButtonLink from "@Components/ButtonLink"

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