import { TouchableOpacity } from "react-native";
import { Menu } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

type TSongOptionsMenuItemsProps = { item: string; index: number };
export const SongOptionsMenuItems = ({ item, index }: TSongOptionsMenuItemsProps) => {
  const menuIcons = ["timer-outline", "bell-outline", "pencil-outline", "share-outline", "close"];

  return (
    <TouchableOpacity className="flex-row items-center">
      <Icon name={menuIcons[index]} size={24} />
      <Menu.Item onPress={() => "hey"} title={item} />
    </TouchableOpacity>
  );
};
