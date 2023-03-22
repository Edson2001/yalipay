import React from 'react';
import { View } from 'react-native';

interface Props{
    children?: JSX.Element
}
const Container: React.FC<Props> = (props) => {
  return (
    <View className='container'>
        {props.children}
    </View>
  );
}

export default Container;