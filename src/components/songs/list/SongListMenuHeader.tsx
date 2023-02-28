import { Text, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export const SongListMenuHeader = () => {
  return (
    <View className="w-full py-2 flex-row justify-between">
      <View className="flex-row gap-x-4 ml-2">
        <Icon name="shuffle" size={32} color="gray" />
        <Text className="text-lg text-gray-600">Karıştır</Text>
      </View>
      <View className="flex-row mr-6 gap-x-4">
        <Icon name="pencil-outline" size={32} color="gray" />
        <Icon name="trash-can-outline" size={32} color="gray" />
      </View>
    </View>
  );
};
