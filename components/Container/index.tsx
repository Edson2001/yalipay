import React from 'react';
import { View, SafeAreaView, Text, useWindowDimensions } from 'react-native';
import { StatusBar } from "expo-status-bar";

interface Props{
    children?: React.ReactComponentElement
}
const Container: React.FC<Props> = (props) => {
    const windowHeight = useWindowDimensions().height
    const windowWidth = useWindowDimensions().width
    return (
        <SafeAreaView className={`bg-background w-[${windowWidth.toFixed()}px] h-[${windowHeight.toFixed()}px]`}>
            <StatusBar  style="light"  />
            <View className='container pl-[19px] pr-[19px]'>
                <Text className="text-white font-bold text-[15px]">YaliPay {windowHeight.toFixed()} </Text>
                {props.children}
            </View>
        </SafeAreaView>
    );
}

export default Container;