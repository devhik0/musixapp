import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { FlatList, StatusBar, View } from "react-native";
import { Text } from "react-native-paper";
import { Bottomnav, Menucard, Songcard, Topnav } from "src/components";
import { AlbumsScreen, ArtistsScreen, FoldersScreen, SongsScreen } from "src/screens";

const Tab = createMaterialTopTabNavigator();

export default function App() {
  const screenOptions = { tabBarIndicatorStyle: { backgroundColor: "#7e22ce", height: 4, borderRadius: 5 } };

  const songs = ["müslüm gürses", "serdar ortaç", "bengü", "ebru yaşar"];
  const playlists = ["playlist 1", "playlist 2", "bengü", "ebru yaşar"];

  const FavModalContent = <FlatList data={songs} renderItem={({ item }) => <Songcard item={item} />} />;

  // TODO: BURAYI YAP
  const ListModalContent = <FlatList data={playlists} renderItem={({ item }) => <Songcard item={item} />} />;
  const RecentModalContent = <Text>Other content</Text>;

  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <Topnav />
      <View className="bg-white flex-row gap-x-3 py-4 justify-center ">
        <Menucard
          title="Favoriler"
          bg="#7e22ce"
          text="favori"
          icon="heart"
          songs={songs}
          modalContent={FavModalContent}
        />
        <Menucard
          title="Listeler"
          bg="#0f766e"
          text="liste"
          icon="playlist-music"
          songs={songs}
          modalContent={ListModalContent}
        />
        <Menucard
          title="En Son"
          bg="#f59e0b"
          text="çalınan"
          icon="history"
          songs={songs}
          modalContent={RecentModalContent}
        />
      </View>
      <View className="bg-white flex-1">
        <Text className="font-extrabold text-2xl m-2">Tüm Şarkılar</Text>
        <Tab.Navigator screenOptions={screenOptions}>
          <Tab.Screen name="Şarkılar" component={SongsScreen} />
          <Tab.Screen name="Artistler" component={ArtistsScreen} />
          <Tab.Screen name="Albümler" component={AlbumsScreen} />
          <Tab.Screen name="Klasörler" component={FoldersScreen} />
        </Tab.Navigator>
      </View>
      <Bottomnav />
    </NavigationContainer>
  );
}
