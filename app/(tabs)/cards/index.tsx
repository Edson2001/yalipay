import React from 'react';

import { View, Text, ScrollView } from 'react-native';
import {Feather} from "@expo/vector-icons"
import Card from "@Components/Card"
import Container from '@Components/Container';
import { Link } from 'expo-router';

const cards: React.FC = () => {
  return (
    <Container>
      <View className="flex-row items-center justify-between">
        <Text className="text-white font-bold text-[24px] mb-[30px]">Cartões</Text>
        <Link href="/addcard" >
          <Feather name="file-plus" size={20} color="#FFF" />
        </Link>
      </View>
      <ScrollView className='h-full'>
        <Card />
        <Card color="bg-[#ED1E79]" />
      </ScrollView>
    </Container>
  );
}

export default cards;