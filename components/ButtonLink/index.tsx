import React from 'react';
import {Pressable, Text } from 'react-native';
import {useRouter } from 'expo-router';


interface Props {
  text: string,
  classButton?: string,
  classText?: string,
  link: string
}

const Button: React.FC<Props> = (props) => {
  
  const router = useRouter()

  const navigate = ()=>{
    router.push(props.link)
  }

  return (
    <Pressable onPress={()=> navigate()} className={` w-full h-[70px]  rounded-[10px]   ${props.classButton}  flex-col justify-center items-center`} href={`${props.link}`} >
      <Text className={`${props.classText} text-[13px] font-bold`}>
        {props.text}
      </Text>
    </Pressable> 
  );
}

export default Button;