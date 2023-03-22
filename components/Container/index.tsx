import React from 'react';
import { View, SafeAreaView, Text } from 'react-native';
import { StatusBar } from "expo-status-bar";

interface Props{
    children?: React.ReactComponentElement
}
const Container: React.FC<Props> = (props) => {
  return (
    <SafeAreaView className="bg-background h-full">
        <StatusBar  style="light"  />
        <View className='container pt-10 pl-[19px] pr-[19px]'>
            <Text className="text-white font-bold text-[15px] mb-[40px]">YaliPay</Text>
            {props.children}
        </View>
    </SafeAreaView>
  );
}

export default Container;