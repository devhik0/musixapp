import { FlatList, View } from "react-native";
import { Appbar, Text } from "react-native-paper";
import { Icon } from "react-native-vector-icons/Icon";
import { ScreenContent } from "./ScreenContent";
import { ScreenHeader } from "./ScreenHeader";

const AlbumsScreenHeader = () => {
  return (
    <Appbar.Header className="bg-white">
      <Appbar.Action
        icon="play-circle"
        size={48}
        color="#7e22ce"
        className="m-0 p-0"
        onPress={() => console.log("play !")}
      />
      <Appbar.Content title="Karışık Çal" titleStyle={{ fontSize: 18, fontWeight: "bold" }} />
      <Appbar.Action icon="sort" />
    </Appbar.Header>
  );
};
const AlbumsScreenContent = () => {
  const albums = ["Dargın Zeynep", "Kül Merve", "ceylin", "deniz", "ayse", "mehmet", "yesim"];

  return (
    <FlatList
      data={albums}
      renderItem={({ item }) => (
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
      )}
      showsVerticalScrollIndicator={false}
    />
  );
};
export const AlbumsScreen = () => {
  return (
    <View className="flex-1 bg-white">
      <ScreenHeader header={<AlbumsScreenHeader />} />
      <ScreenContent content={<AlbumsScreenContent />} />
    </View>
  );
};
