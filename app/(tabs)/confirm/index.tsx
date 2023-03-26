import React, {useState, useRef} from 'react';
import { StatusBar } from "expo-status-bar";
import { View, Text, ScrollView, SafeAreaView, TouchableOpacity , TextInput} from 'react-native';
import ButtonLink from "@Components/ButtonLink"
import OPT from '@Components/OPT';
import Container from '@Components/Container';
const confirm: React.FC = () => {


  return (
    <Container>
      <View className="h-full flex-col justify-around mt-[-42px] items-center">
        <View>
          <Text className="text-white font-bold text-[24px] mb-[30px]">Validar Operação</Text>
          <Text className="text-white mb-[40px]">
            Para validar a transferência, no valor de AOA 79,45, insira o código de confirmação que recebeu por SMS.
          </Text>

          <OPT />
          <TouchableOpacity className="flex-row">
            <Text className="text-white">Não recebi o código de confirmação, R</Text>
            <Text className="text-buttonColor">eenviar</Text>
          </TouchableOpacity>
        </View>

        <View className='w-full'>
          <ButtonLink onClick={()=> {}} text="Confirmar" link='/done' classButton="mb-[12px] bg-buttonColor w-full" />
          <Text className="text-center text-white font-bold text-[13px]">Cancelar Operação</Text>
        </View>
      </View>
    </Container>
  );
}

export default confirm;