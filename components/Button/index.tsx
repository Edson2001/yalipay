import React from 'react';
import { View, Pressable, Text } from 'react-native';
import { Link } from 'expo-router';


interface Props {
  text: string,
  classButton?: string,
  classText?: string,
  onClick(value: {} | string): void
}

const Button: React.FC<Props> = (props) => {
  return (
    <Pressable onPress={()=> props.onClick} className={` bg-buttonColor w-full h-[70px]  rounded-[10px] flex-row justify-center items-center  ${props.classButton}`}>
      <Text  className={`${props.classText} text-[13px] font-bold`}>{props.text}</Text> 
    </Pressable>
  );
}

export default Button;