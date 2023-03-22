import React from 'react';
import { View, SafeAreaView, Text, useWindowDimensions, Platform } from 'react-native';
import { StatusBar } from "expo-status-bar";

interface Props{
    children?: React.ReactComponentElement
}
const Container: React.FC<Props> = (props) => {
    const windowHeight = useWindowDimensions().height
    const windowWidth = useWindowDimensions().width

    const windowPaddingTop = Platform.OS == "android" ? "pt-[42px]" : ""

    return (
        <SafeAreaView className={`bg-background w-[${windowWidth.toFixed()}px] h-[${windowHeight.toFixed()}px]`}>
            <StatusBar  style="light"  />
            <View className={`container  pl-[19px] pr-[19px] ${windowPaddingTop} `}>
                <Text className="text-white font-bold text-[15px] mb-[42px]">YaliPay </Text>
                {props.children}
            </View>
        </SafeAreaView>
    );
}

export default Container;