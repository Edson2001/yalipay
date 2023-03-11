import { StatusBar } from "expo-status-bar";
import { Text, SafeAreaView, View, ScrollView, Image} from "react-native";
import Input from "@Components/Input";
import Button from "@Components/Button";
export default function Send() {
  return (
    <ScrollView className="bg-background p-7">
      <StatusBar  style="light"  />
      <SafeAreaView className="flex-col justify-around h-screen">
        <View>
          <Text className="text-white font-bold text-[15px]  mb-10">YaliPay</Text>
          <Text className="text-white font-bold text-[24px] mt-10 mb-[62px]">Transferir</Text>
          <Input label="IBAN" classInput="mb-[30px]" />
          <Input label="Montante"  />
        </View>

        <View>
          <Button onClick={()=> {}} text="Transferir" classButton="mb-[12px]" />
          <Text className="text-center text-white font-bold text-[13px]">Cancelar Operação</Text>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}