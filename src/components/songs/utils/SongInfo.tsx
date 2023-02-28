import { Text, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { SongOptions } from "../options/SongOptions";

type TSongInfoProps = { hideModal: () => void };
export const SongInfo = ({ hideModal }: TSongInfoProps) => {
  return (
    <View className="container flex-1 flex-row absolute top-0 p-2 justify-between items-center">
      <Icon name="chevron-down" size={28} color="#e5e7eb" onPress={hideModal} />
      <Text className="text-lg ml-1 text-gray-300">Şarkı bilgileri</Text>
      <SongOptions />
    </View>
  );
};
