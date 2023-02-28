import { FlatList, Text, View } from "react-native";
import { Appbar } from "react-native-paper";
import { ScreenContent } from "./shared/ScreenContent";
import { ScreenHeader } from "./shared/ScreenHeader";

const ArtistsScreenHeader = () => {
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
    </Appbar.Header>
  );
};
const ArtistsScreenContent = () => {
  const artists = ["Ahmet", "Mehmet", "Veli", "Fatma", "Ceylin", "Ayşe", "Deniz", "Zeynep"].sort();

  return (
    <FlatList
      data={artists}
      renderItem={({ item }) => (
        <View className="m-2 mx-3">
          <Text className="">{item[0]}</Text>
          <Text className="">{item}</Text>
          <Text className="">1 şarkı</Text>
        </View>
      )}
      showsVerticalScrollIndicator={false}
    />
  );
};
export const ArtistsScreen = () => {
  return (
    <View className="flex-1 bg-white">
      <ScreenHeader header={<ArtistsScreenHeader />} />
      <ScreenContent content={<ArtistsScreenContent />} />
    </View>
  );
};
