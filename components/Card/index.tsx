import React from 'react';
import { View, Image, Text } from 'react-native';

import CardImage from "@Images/Card.png"
import CardChip from "@Images/Group.png"
import Visa from "@Images/Group1.png"

import { StyledComponent } from 'nativewind';

const Card: React.FC = () => {
  return (
    <StyledComponent className="relative w-[282px] h-[180px] flex-col justify-between p-3 ml-2" component={View} > 
       <Image source={CardImage} className="w-[282px] h-[180px] absolute" />
       <Image source={CardChip} />
       <Text className="text-[#FFF] font-bold text-[16px]">AOA 123,876,087,00</Text>

        <View className="flex-row justify-between">

            <View>
                <Text className="text-[#FFF] font-bold text-[9px]">Card Holder name</Text>
                <Text className="text-[#FFF] font-bold">Edson Bandola</Text>
            </View>

            <View className="flex-row items-center">
                <View className="mr-2"> 
                    <Text className="text-[#FFF] text-[9px] ">Expiry Date</Text>
                    <Text className="text-[#FFF] text-[12px] font-bold">02/27</Text>
                </View>
                <View>
                    <Image source={Visa} />
                </View>
            </View>

        </View>

    </StyledComponent>
  );
}

export default Card;