import { Text, View} from "react-native";
import Input from "@Components/Input";
import Container from "@Components/Container";
import ButtonLink from '@Components/ButtonLink';

export default function Send() {
  return (
    <Container>
      <View className={`flex-col items-center h-full justify-around mt-[-42px] `}>
        <View className="w-full">
          <Text className="text-white font-bold text-[24px]">Transferir </Text>
          <Input label="IBAN" classInput="w-full" />
          <Input label="Montante"  />
        </View>
        <View className="w-full">
          <ButtonLink link="/confirm" text="Transferir" classButton="bg-buttonColor mb-[12px]" />
          <Text className="text-center text-white font-bold text-[13px]">Cancelar Operação</Text>
        </View>
      </View>
    </Container>
  );
}