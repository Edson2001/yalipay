import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import Options from "@Images/op.svg"
import Visa from "@Images/Group1.png"
import {Feather} from "@expo/vector-icons"
import { StyledComponent } from 'nativewind';


interface Props{
    color?: string
}

const Card: React.FC<Props> = (props) => {
  return (
    <StyledComponent className={`relative bg-[#4F339A] rounded-[10px] w-full h-[180px] flex-col justify-between p-3 mb-3 ${props.color ?? ""}`} component={View} > 
       
       <View>
            <View className="flex-row justify-between">
                <Text className="text-white font-bold text-[25px] mb-[12px]">Saldo  </Text>
                <TouchableOpacity>
                   <Options />
                </TouchableOpacity>
            </View>
            <View className="flex-row">
                <Text className="text-white font-bold text-[16px] mr-[10px]">AOA</Text>
                <Text className="text-white font-medium text-[16px]">123,876,087.00</Text>
            </View>
       </View>

        <View className="flex-row justify-between items-center">

            <View>
                <Text className="text-white font-semibold text-[12px]">Número Do Cartão</Text>
                <Text className="text-white font-medium text-[10px]">1234 4567 6553 1389</Text>
            </View>

            <Image source={Visa} />
        </View>

    </StyledComponent>
  );
}

export default Card;