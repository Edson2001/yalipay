import React from 'react';
import { View, TextInput, Text, Pressable } from 'react-native';

interface Props{
  label: string
  classInput?: string
}

const Input: React.FC<Props> = (props) => {
  return (
    <View className={`${props.classInput}`}>
      { props.label ? <Text className="font-bold text-white text-[12px] mb-[12px]">{props.label}</Text> : <></>}
      <TextInput  className="bg-inputColor border-2 border-[#2D2D2D] p-5 rounded-[10px] ident-[24px] text-white" />
    </View>
  );
}

export default Input;