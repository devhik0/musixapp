import { FlatList, Text, View } from "react-native";
import { Appbar } from "react-native-paper";
import { ScreenContent } from "./ScreenContent";
import { ScreenHeader } from "./ScreenHeader";

const artists = ["Ahmet", "Mehmet", "Veli", "Fatma", "Ceylin", "Ayşe", "Deniz", "Zeynep"].sort();

const Header = () => {
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

const Content = () => {
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

export function ArtistsScreen() {
  return (
    <View className="flex-1 bg-white">
      <ScreenHeader header={<Header />} />
      <ScreenContent content={<Content />} />
    </View>
  );
}
