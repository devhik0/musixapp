import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { FlatList, StatusBar, View } from "react-native";
import { Appbar, Text } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Bottomnav } from "src/components/Bottomnav";
import { Menu } from "src/components/Menu";
import { Songcard } from "src/components/Songcard";
import { Sortmenu } from "src/components/Sortmenu";
import { Topnav } from "src/components/Topnav";

const Tab = createMaterialTopTabNavigator();

function SongsScreen({}) {
  return (
    <View>
      <Appbar.Header className="bg-white">
        <Appbar.Action
          icon="play-circle"
          size={48}
          color="#7e22ce"
          className="m-0 p-0"
          onPress={() => console.log("play !")}
        />
        <Appbar.Content title="Karışık Çal" titleStyle={{ fontSize: 18, fontWeight: "bold" }} />
        {/* // ! sort menu */}
        <Sortmenu />
        <Appbar.Action icon="playlist-check" size={28} />
      </Appbar.Header>
      <FlatList
        // className="bg-white h-[38%]"
        className="bg-white h-[80%]"
        data={["Dargın Zeynep", "Kül Merve", "ceylin", "deniz", "ayse", "mehmet", "yesim"]}
        renderItem={({ item }) => <Songcard item={item} />}
        keyExtractor={(_) => _}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

function ArtistsScreen() {
  return (
    <View className="flex-1 bg-white">
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
      <FlatList
        data={["Ahmet", "Mehmet", "Veli", "Fatma", "Ceylin", "Ayşe", "Deniz", "Zeynep"].sort()}
        renderItem={({ item }) => (
          <View className="m-2 mx-3">
            <Text className="">{item[0]}</Text>
            <Text className="">{item}</Text>
            <Text className="">1 şarkı</Text>
          </View>
        )}
      />
    </View>
  );
}

function FoldersScreen() {
  return (
    <View className="flex-1 bg-white">
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
      <FlatList
        // Klasörler
        data={["Download"]}
        renderItem={({ item }) => (
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
        )}
      />
    </View>
  );
}

function AlbumsScreen() {
  return (
    <View className="flex-1 bg-white">
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
      <FlatList
        // albümler
        data={["Dargın Zeynep", "Kül Merve", "ceylin", "deniz", "ayse", "mehmet", "yesim"]}
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
      />
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <Topnav />
      <Menu />
      <View className="bg-white flex-1">
        <Text className="font-extrabold text-2xl m-2">Tüm Şarkılar</Text>
        <Tab.Navigator
          screenOptions={{ tabBarIndicatorStyle: { backgroundColor: "#7e22ce", height: 4, borderRadius: 5 } }}
        >
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
