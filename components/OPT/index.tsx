import React, {useState, useRef} from 'react';
import { View , TextInput} from 'react-native';

const OPT: React.FC = () => {
  
  const [pin1, setPin1] = useState(null)
  const [pin2, setPin2] = useState(null)
  const [pin3, setPin3] = useState(null)
  const [pin4, setPin4] = useState(null)

  const refPin2 = useRef(null)
  const refPin3 = useRef(null)
  const refPin4 = useRef(null)


  return (
    <View className="flex-row justify-between mb-[37px]">
      <View className="w-[76px]">
        <TextInput onChange={(value)=>{
          setPin1(value)
          if(value != null){
            refPin2.current.focus()
          }
        }} maxLength={1} className="border-b-2 border-white text-white font-bold text-[32px] text-center" />
      </View>
      <View className="w-[76px]">
        <TextInput  onChange={(value)=>{
          setPin2(value)
          if(value != null){
            refPin3.current.focus()
          }
        }} ref={refPin2} maxLength={1} className="border-b-2 border-white text-white font-bold text-[32px] text-center" />
      </View>
      <View  className="w-[76px]">
        <TextInput ref={refPin3} onChange={(value)=>{
          setPin2(value)
          if(value != null){
            refPin4.current.focus()
          }
        }} maxLength={1} className="border-b-2 border-white text-white font-bold text-[32px] text-center" />
      </View>
      <View  className="w-[76px]">
        <TextInput ref={refPin4} maxLength={1} className="border-b-2 border-white text-white font-bold text-[32px] text-center" />
      </View>
    </View>
  );
}

export default OPT;