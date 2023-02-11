import React from "react";
import { FlatList, View } from "react-native";
import { Appbar } from "react-native-paper";
import { Songcard } from "./Songcard";
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
        renderItem={({ item }) => <Songcard item={item} />}
        keyExtractor={(_) => _}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
