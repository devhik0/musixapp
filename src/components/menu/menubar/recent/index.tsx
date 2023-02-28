import { FlatList, View } from "react-native";
import { Appbar, Text } from "react-native-paper";
import { Icon } from "react-native-vector-icons/Icon";
import { SongMenu } from "src/components/songs/SongMenu";

export const RecentModalButton = () => <Appbar.Action icon="trash-can-outline" size={24} />;
type TRecentModalContentProps = { recents: string[] };
export const RecentModalContent = ({ recents }: TRecentModalContentProps) => {
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
            <SongMenu />
          </View>
        </View>
      )}
    />
  );
};
