// import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar, Text, View } from "react-native";
import { Bottomnav } from "src/components/Bottomnav";
import { Menu } from "src/components/Menu";
import { Songs } from "src/components/Songs";
import { Topnav } from "src/components/Topnav";

function ArtistsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Sanatçılar</Text>
    </View>
  );
}

function AlbumsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Albümler</Text>
    </View>
  );
}

function FoldersScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Klasörler</Text>
    </View>
  );
}

const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <Topnav />
      <Menu />
      <View className="bg-white flex-1">
        <Text className="font-extrabold text-2xl m-2">Tüm Şarkılar</Text>
        <Tab.Navigator>
          <Tab.Screen name="Şarkılar" component={Songs} />
          <Tab.Screen name="Artistler" component={ArtistsScreen} />
          <Tab.Screen name="Albümler" component={AlbumsScreen} />
          <Tab.Screen name="Klasörler" component={FoldersScreen} />
        </Tab.Navigator>
      </View>
      <Bottomnav />
    </NavigationContainer>
  );
}
