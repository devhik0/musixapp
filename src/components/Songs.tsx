import React from "react";
import { FlatList, View } from "react-native";
import { Appbar, Text } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Songmenu } from "./Songmenu";
import { Sortmenu } from "./Sortmenu";

export function Songs({}) {
  return (
    <View>
      <Appbar.Header className="bg-white">
        <Appbar.Action icon="play-circle" size={48} color="#7e22ce" className="m-0 p-0" />
        <Appbar.Content title="Karışık Çal" titleStyle={{ fontSize: 18, fontWeight: "bold" }} />
        {/* // ! sort menu */}
        <Sortmenu />
        <Appbar.Action icon="playlist-check" />
      </Appbar.Header>
      <FlatList
        className="bg-white h-[38%]"
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
                Sanatçı | Albüm
              </Text>
            </View>
            <View className="flex-row items-center">
              <Appbar.Action icon="share-outline" size={32} color="#aaa" />
              {/* // ! songmenu */}
              <Songmenu />
            </View>
          </View>
        )}
        keyExtractor={(_) => _}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
