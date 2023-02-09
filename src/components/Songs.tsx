import React from "react";
import { FlatList, View } from "react-native";
import { Appbar, Text } from "react-native-paper";

export function Songs({}) {
  return (
    <View>
      <Appbar.Header className="bg-white">
        <Appbar.Action icon="play-circle" size={48} color="#7e22ce" className="m-0 p-0" />
        <Appbar.Content title="Karışık Çal" titleStyle={{ fontSize: 18, fontWeight: "bold" }} />
        <Appbar.Action icon="sort" />
        <Appbar.Action icon="playlist-check" />
      </Appbar.Header>
      <FlatList
        data={["ahmet", "berna", "ceylin", "deniz", "ayse"]}
        renderItem={({ item }) => (
          <View className="bg-gray-100 flex mb-6 flex-row justify-between shadow-none">
            <View>
              <Text>IMAGE HERE</Text>
            </View>
            <View className="flex-col w-1/3 p-2 bg-fuchsia-200">
              <Text variant="bodyLarge">Şarkı Adı {item}</Text>
              <Text variant="bodyLarge">Sanatçı | Albüm</Text>
            </View>
            <View className="flex-row items-center">
              <Appbar.Action icon="share" />
              <Appbar.Action icon="dots-vertical" />
            </View>
          </View>
        )}
        keyExtractor={(_) => _}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
