import { FlatList, View } from "react-native";
import { Text } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Songmenu } from "src/components/song/Songmenu";

export const RecentModalContent = () => {
  const recents = ["zeynep  bastık", "kenan doğulu"];

  return (
    <FlatList
      data={recents}
      renderItem={({ item, index }) => (
        <View className="mb-6 flex flex-row shadow-none justify-around items-center">
          <Text className="text-[16px] mx-2">0{index + 1}</Text>
          <Icon name="music-box-outline" size={64} color="#aaa" />
          <View className="flex-col py-2">
            <Text variant="bodyLarge" className="font-bold">
              {item}
            </Text>
            <Text variant="bodyLarge" className="text-gray-500">
              Sanatçı | Albüm
            </Text>
          </View>
          <View className="flex-row items-center">
            <Songmenu />
          </View>
        </View>
      )}
    />
  );
};
