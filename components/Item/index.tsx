import React from 'react';
import { View, Text, Image } from 'react-native';
import Picture from "@Images/Ellipse.png"
import Down from "@Images/Vector(2).png"

const Item: React.FC = () => {
  return (

    <View className="bg-itemlist flex-row justify-between items-center p-3 rounded-[10px] mb-[20px]">
       
        <View className="flex-row items-center">
          <Image source={Picture} className="h-[41px] w-[41px] rounded-full" />
          <View>
            <Text className="text-white ml-4 text-bold">Edson Santos</Text>
            <Text className="text-[#B6B6B6] ml-4 text-[10px] font-medium">Transferência </Text>
          </View>
        </View>
        <View className="flex-row items-center"> 
            <Image source={Down} className="mr-3" />
            <Text className="text-white font-semibold">AOA 120.56</Text>
        </View>
    </View>

  );
}

export default Item;