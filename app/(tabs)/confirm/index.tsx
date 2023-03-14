import React, {useState, useRef} from 'react';
import { StatusBar } from "expo-status-bar";
import { View, Text, ScrollView, SafeAreaView, TouchableOpacity , TextInput} from 'react-native';
import ButtonLink from "@Components/ButtonLink"

const confirm: React.FC = () => {

  const [pin1, setPin1] = useState(null)
  const refPin2 = useRef(null)


  return (
    <ScrollView className="bg-background p-7">
      <StatusBar  style="light"  />
      <SafeAreaView className="flex-col justify-around h-screen">
        <View>
          <Text className="text-white font-bold text-[15px]  mb-[40px]">YaliPay</Text>
          <Text className="text-white font-bold text-[24px] mb-[30px]">Validar Operação</Text>
          <Text className="text-white mb-[40px]">
            Para validar a transferência, no valor de AOA 79,45, insira o código de confirmação que recebeu por SMS.
          </Text>

          <View className="flex-row justify-between mb-[37px]">
            <View className="w-[76px]">
              <TextInput onChange={(pin1)=>{
                setPin1(pin1)

                if(pin1 != null){
                  refPin2.current.focus()
                }

              }} maxLength={1} className="border-b-2 border-white text-white font-bold text-[32px] text-center" />
            </View>
            <View className="w-[76px]">
              <TextInput ref={refPin2} maxLength={1} className="border-b-2 border-white text-white font-bold text-[32px] text-center" />
            </View>
            <View className="w-[76px]">
              <TextInput maxLength={1} className="border-b-2 border-white text-white font-bold text-[32px] text-center" />
            </View>
            <View className="w-[76px]">
              <TextInput maxLength={1} className="border-b-2 border-white text-white font-bold text-[32px] text-center" />
            </View>
          </View>
          <TouchableOpacity className="flex-row">
              <Text className="text-white">Não recebi o código de confirmação, R</Text>
              <Text className="text-buttonColor">eenviar</Text>
          </TouchableOpacity>
        </View>

        

        <View>
          <ButtonLink onClick={()=> {}} text="Confirmar" link='/done' classButton="mb-[12px] bg-buttonColor" />
          <Text className="text-center text-white font-bold text-[13px]">Cancelar Operação</Text>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

export default confirm;