import { View } from "react-native";
import { Text } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { SongPlayMenu } from "../play/SongPlayMenu";

export const SongContent = () => {
  return (
    <View className="justify-center items-center h-[75%]">
      <Icon name="music-box" size={312} color="#a56bd6" />
      <View className="flex w-[80%] gap-y-1">
        <View className="flex-row justify-between">
          <Text className="text-lg font-bold text-gray-200">Şarkı adı</Text>
          <Icon name="heart-outline" size={28} color="#e5e7eb" />
        </View>
        <Text className="text-gray-400">Albüm</Text>
      </View>
      <SongPlayMenu />
    </View>
  );
};
