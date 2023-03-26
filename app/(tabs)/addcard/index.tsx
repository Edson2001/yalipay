import { Text, SafeAreaView, View, ScrollView, Image} from "react-native";
import Input from "@Components/Input";
import Container from "@Components/Container";
import ButtonLink from '@Components/ButtonLink';

export default function addcard() {
  return (
    <Container>
      <View className="h-full flex-col justify-around mt-[-42px] items-center">
        <View className="w-full">
          <Text className="text-white font-bold text-[24px] mt-10 mb-[32px]">Adicionar Cartão</Text>
          <Input label="Número do Cartão" classInput="mb-[30px]" />
        </View>

        <View className="w-full">
          <ButtonLink link="/donecard" text="Confirmar" classButton="mb-[12px] bg-buttonColor" />
          <Text className="text-center text-white font-bold text-[13px]">Cancelar Operação</Text>
        </View>
      </View>
    </Container>
  );
}