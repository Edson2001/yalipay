import { StatusBar } from "expo-status-bar";
import { Text, View, ScrollView, Pressable} from "react-native";
import ButtonLink from "@Components/ButtonLink"

import { Link } from "expo-router";
import Input from "@Components/Input";

const login: React.FC = () => {
  return (

    <ScrollView className="bg-background p-5">
     
        <StatusBar  style="light"  />
        
        <View  className="w-full h-screen flex-col justify-center items-center" >
            <Text className="text-white font-bold text-4xl ">YaliPay </Text>
            <Text className="text-white font-medium text-sm mb-[60px]">Entre no seu cofre</Text>
            
            <Input classInput="mb-[30px]" label="Número Telefone" />
            <Input classInput="mb-[17px]" label="Senha" />
            
            <Pressable className="flex-row justify-end w-[350px] mb-[85px]">
                <Text className="text-white font-medium text-[12px]">squeci minha senha.</Text>
                <Text className="text-buttonColor font-medium text-[12px]">Recuperar</Text>
            </Pressable>

            <View className="flex-col">
                <ButtonLink classButton="bg-buttonColor mb-5" text="Entrar" link="/home" />
            </View>
            <Link href="/signup" className="flex-row justify-end ">
                <Text className="text-white font-medium text-[12px]">Não tenho conta </Text>
                <Text className="text-buttonColor font-medium text-[12px]">Criar</Text>
            </Link>
        </View>
    
    </ScrollView>

  );
}

export default login;