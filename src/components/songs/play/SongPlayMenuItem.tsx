import { View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

type TSongPlayMenuItemProps = { item: string; showModalList: () => void };
export const SongPlayMenuItem = ({ item, showModalList }: TSongPlayMenuItemProps) => {
  return (
    <View className="gap-x-2 mx-4">
      <Icon name={item} size={32} color="#e5e7eb" onPress={showModalList} />
    </View>
  );
};
