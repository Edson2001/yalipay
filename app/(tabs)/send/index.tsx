import { StatusBar } from "expo-status-bar";
import { Text, SafeAreaView, View, ScrollView, Image, TouchableOpacity, FlatList} from "react-native";

import {Feather} from "@expo/vector-icons"
import Card from "@Components/Card"
import Item from "@Components/Item";
import Input from "@Components/Input";
import Button from "@Components/Button";
export default function Send() {
  return (
    <ScrollView className="bg-background p-7">
     
        <StatusBar  style="light"  />
      
        <SafeAreaView className="flex-col justify-around h-screen">
           
            <View>
                <Text className="text-white font-bold text-3xl mt-10 mb-[62px]">Transferir</Text>
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