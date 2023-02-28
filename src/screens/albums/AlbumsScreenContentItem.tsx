import { View } from "react-native";
import { Appbar, Text } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

type TAlbumsScreenContentItemProps = { item: string };
export const AlbumsScreenContentItem = ({ item }: TAlbumsScreenContentItemProps) => {
  return (
    <View className="mb-6 flex flex-row shadow-none justify-between">
      <View>
        <Icon name="music-box-outline" size={64} color="#aaa" />
      </View>
      <View className="flex-col py-2">
        <Text variant="bodyLarge" className="font-bold">
          {item}
        </Text>
        <Text variant="bodyLarge" className="text-gray-500">
          Sanatçı
        </Text>
      </View>
      <View className="flex-row items-center">
        <Appbar.Action icon="chevron-right" size={32} color="#aaa" />
      </View>
    </View>
  );
};
