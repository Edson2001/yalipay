
import { Text, View, FlatList} from "react-native";
import Container from "@Components/Container";
import Card from "@Components/Card"
import Item from "@Components/Item";

export default function Home() {
  return (
    <Container>
      <Card />
      <View className="flex-row mt-[45px]  mb-[25px]">
        <Text className="text-white font-bold text-[13px]  mr-[4px]">Movimentos </Text>
        <Text className="text-white font-light text-[13px]  ">Recentes</Text>
      </View>
      <FlatList scrollEnabled={true} data={[1, 2, 3, 5, 6, 7, 8, 9, 10]} renderItem={()=> (<Item />)} />
    </Container>
  );
}