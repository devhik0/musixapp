import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Text, View } from "react-native";
import { AlbumsScreen, ArtistsScreen, FoldersScreen, SongsScreen } from "../screens";

export const LinkNav = () => {
  const Tab = createMaterialTopTabNavigator();
  const screenOptions = { tabBarIndicatorStyle: { backgroundColor: "#7e22ce", height: 4, borderRadius: 5 } };

  return (
    <View className="bg-white flex-1">
      <Text className="font-extrabold text-2xl m-2">Tüm Şarkılar</Text>
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen name="Şarkılar" component={SongsScreen} />
        <Tab.Screen name="Artistler" component={ArtistsScreen} />
        <Tab.Screen name="Albümler" component={AlbumsScreen} />
        <Tab.Screen name="Klasörler" component={FoldersScreen} />
      </Tab.Navigator>
    </View>
  );
};
