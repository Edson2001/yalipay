import React from 'react';
import { View,  Text,  Image } from 'react-native';

import ButtonLink from '@Components/ButtonLink';
import Container from '@Components/Container';
const donecard: React.FC = () => {
  return (
    <Container>
      <View className="h-full flex-col justify-around mt-[-42px] items-center">
        <View className="flex-col h-full items-center justify-center">
          <Image className="mb-[20px]" source={require("@Images/cloud.png")} />
          <Text className="text-white w-[247px] text-center mb-[84px]">Seu cartão foi adicionado com sucesso</Text>
          <ButtonLink classText="text-buttonColor" link='/home' text='Voltar ao Inicio' />
        </View>
      </View>
    </Container>
  );
}

export default donecard;