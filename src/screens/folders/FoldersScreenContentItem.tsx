import { View } from "react-native";
import { Appbar, Text } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

type TFoldersScreenContentItem = { item: string };
export const FoldersScreenContentItem = ({ item }: TFoldersScreenContentItem) => {
  return (
    <View className="mb-6 flex flex-row shadow-none justify-between">
      <View className="ml-2">
        <Icon name="folder" size={64} color="#7e22ce" />
      </View>
      <View className="flex-col py-2">
        <Text variant="bodyLarge" className="">
          {item}
        </Text>
        <Text variant="bodyLarge" className="text-gray-500">
          120 şarkı | klasor yolu
        </Text>
      </View>
      <View className="flex-row items-center">
        <Appbar.Action icon="dots-vertical" size={32} color="#aaa" />
      </View>
    </View>
  );
};
