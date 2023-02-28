import { View } from "react-native";
import { Appbar, Text } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { SongMenu } from "src/components/songs/menu/SongMenu";

type TSongsScreenContentItemProps = { item: string };
export const SongsScreenContentItem = ({ item }: TSongsScreenContentItemProps) => {
  return (
    <View className="mb-6 flex flex-row shadow-none justify-between">
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
        <Appbar.Action icon="share-outline" size={32} color="#aaa" />
        <SongMenu />
      </View>
    </View>
  );
};
