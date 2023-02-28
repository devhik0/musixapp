import { Text, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

type TMenuHeaderProps = { title: string; hideModal: () => void };
export const MenuHeader = ({ title, hideModal }: TMenuHeaderProps) => {
  return (
    <View className="container flex-1 flex-row absolute m-0 p-2 top-0 items-center">
      <Icon name="chevron-left" size={32} style={{ marginRight: 128 }} onPress={hideModal} />
      <Text className="font-bold text-xl">{title}</Text>
    </View>
  );
};
