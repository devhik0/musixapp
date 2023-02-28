import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Appbar, Searchbar } from "react-native-paper";
import { AlbumsScreen, ArtistsScreen, FoldersScreen, SongsScreen } from "../screens";
import { SongModal } from "../songs/SongModal";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const onChangeSearch = (query: string) => setSearchQuery(query);

  return (
    <Searchbar
      className="w-5/6 rounded-full bg-gray-50 shadow-none h-[40]"
      placeholder="Şarkı yada sanatçı arayın"
      placeholderTextColor="#aaa"
      inputStyle={{ fontSize: 16 }}
      onChangeText={onChangeSearch}
      value={searchQuery}
    />
  );
};

export const TopNav = () => {
  return (
    <Appbar.Header className="bg-white">
      <Appbar.Action icon="tune-variant" onPress={() => console.log("test")} />
      <Search />
    </Appbar.Header>
  );
};
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
export const BottomNav = () => {
  const [visibleModal, setVisibleModal] = useState(false);
  const showModal = () => setVisibleModal(true);
  const hideModal = () => setVisibleModal(false);

  return (
    <View>
      <TouchableOpacity onPress={showModal}>
        <Appbar.Header className="bg-white justify-around border-t-2 border-gray-100">
          <Appbar.Action icon="album" size={64} className="pb-8" />
          <View className="pb-2">
            <Text className="text-lg font-bold">Şarkı adı</Text>
            <Text className="text-sm text-gray-400">Sanatçı</Text>
          </View>
          <View className="flex-row pb-2">
            <Appbar.Action icon="play-circle-outline" size={32} />
            <Appbar.Action icon="skip-next-outline" size={32} />
          </View>
        </Appbar.Header>
      </TouchableOpacity>
      <SongModal visible={visibleModal} hideModal={hideModal} />
    </View>
  );
};
