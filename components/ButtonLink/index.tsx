import React from 'react';
import { View, Pressable, Text } from 'react-native';
import { Link } from 'expo-router';


interface Props {
    text: string,
    classButton?: string,
    classText?: string,
    link: string
}

const Button: React.FC<Props> = (props) => {
  return (
    <Pressable className={` w-[345px] h-[70px]  rounded-[10px] flex-row justify-center items-center  ${props.classButton}`}>
        <Link href={`${props.link}`} className={`${props.classText} text-[13px] font-bold`}>{props.text}</Link> 
    </Pressable>
  );
}

export default Button;