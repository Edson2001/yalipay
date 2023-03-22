import { StatusBar } from "expo-status-bar";
import { Text, SafeAreaView, View, ScrollView, Image, TouchableOpacity, Pressable} from "react-native";
import ButtonLink from "@Components/ButtonLink"
import {Feather} from "@expo/vector-icons"
import Card from "@Components/Card"
import Item from "@Components/Item"
import { Link } from "expo-router";
import Input from "@Components/Input";

const signup: React.FC = () => {
  return (

    <ScrollView className="bg-background p-5">
     
        <StatusBar  style="light"  />
        
        <View  className="w-full h-screen flex-col justify-center items-center" >
            <Text className="text-[#FFF] font-bold text-4xl ">YaliPay </Text>
            <Text className="text-[#FFF] font-medium text-sm mb-[60px]">Entre no seu cofre</Text>
            
            <Input classInput="mb-[30px]" label="Número Telefone" />
            <Input classInput="mb-[17px]" label="E-mail" />
            <Input classInput="mb-[85px]" label="Senha" />
            
            
            <View className="flex-col w-full">
              <ButtonLink classButton="bg-buttonColor mb-5" text="Entrar" link="/login" />
            </View>

            <Link href="/login" className="flex-row justify-end ">
              <Text className="text-white font-medium text-[12px]">Já tenho conta </Text>
              <Text className="text-buttonColor font-medium text-[12px]">Entrar</Text>
            </Link>
        </View>
    
    </ScrollView>

  );
}

export default signup;