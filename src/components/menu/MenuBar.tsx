import React, { useState } from "react";
import { FlatList, TouchableOpacity, View } from "react-native";
import { Appbar, Menu, RadioButton, Text } from "react-native-paper";
import { Icon } from "react-native-vector-icons/Icon";
import { SongMenu } from "../songs/SongMenu";
import { MenuCard } from "./MenuCard";

const FavModalButton = () => {
  const sortby = ["Son eklenene", "Ada", "Artiste"];

  const [checked, setChecked] = useState(sortby[0]);

  const [visible, setVisible] = useState(false);
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  return (
    <View className="flex-row">
      <Menu
        contentStyle={{ backgroundColor: "white" }}
        visible={visible}
        onDismiss={closeMenu}
        anchor={<Appbar.Action icon="sort" size={28} onPress={openMenu} />}
      >
        <Text className="text-center text-lg font-bold mb-2">Şarkıları sırala</Text>
        <FlatList
          data={sortby}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              className="flex-row items-center justify-between px-2"
              style={{ backgroundColor: checked === item ? "#EACFFA" : "transparent" }}
              onPress={() => setChecked(item)}
            >
              <Text className="text-[16px] mr-4">{sortby[index]} göre</Text>
              <RadioButton value={item} status={checked === item ? "checked" : "unchecked"} />
            </TouchableOpacity>
          )}
        />
      </Menu>
      <Appbar.Action icon="playlist-check" size={28} />
    </View>
  );
};

export const MenuBar = () => {
  const songs = ["Dargın Zeynep", "Kül Merve", "ceylin", "deniz", "ayse", "mehmet", "yesim"];
  const recents = ["zeynep  bastık", "kenan doğulu"];
  const playlists = ["playlist 1", "playlist 2"];

  return (
    <View className="bg-white flex-row gap-x-3 py-4 justify-center ">
      <MenuCard
        songs={songs}
        title="Favoriler"
        bg="#7e22ce"
        text="favori"
        icon="heart"
        modalContent={
          <FlatList
            data={songs}
            renderItem={({ item }) => (
              <View className="mb-6 flex flex-row shadow-none justify-between">
                <Icon name="music-box-outline" size={64} color="#aaa" />
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
                  <SongMenu />
                </View>
              </View>
            )}
          />
        }
        headerButtons={<FavModalButton />}
      />
      <MenuCard
        songs={songs}
        title="Listeler"
        bg="#0f766e"
        text="liste"
        icon="playlist-music"
        modalContent={
          <FlatList
            data={playlists}
            renderItem={({ item }) => (
              <View className=" mb-6 flex flex-row shadow-none justify-around items-center bg-purple-50 ">
                <Icon name="music-box-outline" size={64} color="#aaa" />
                <View className="flex-col py-2">
                  <Text variant="bodyLarge" className="font-bold">
                    {item}
                  </Text>
                  <Text variant="bodyLarge" className="text-gray-500">
                    Toplam 3 şarkı
                  </Text>
                </View>
                <Appbar.Action icon="play-outline" size={48} color="#aaa" />
              </View>
            )}
          />
        }
        headerButtons={<Appbar.Action icon="playlist-plus" size={24} />}
      />
      <MenuCard
        songs={songs}
        title="En Son"
        bg="#f59e0b"
        text="çalınan"
        icon="history"
        modalContent={
          <FlatList
            data={recents}
            renderItem={({ item, index }) => (
              <View className="mb-6 flex flex-row shadow-none justify-around items-center">
                <Text className="text-[16px] mx-2">0{index + 1}</Text>
                <Icon name="music-box-outline" size={64} color="#aaa" />
                <View className="flex-col py-2">
                  <Text variant="bodyLarge" className="font-bold">
                    {item}
                  </Text>
                  <Text variant="bodyLarge" className="text-gray-500">
                    Sanatçı | Albüm
                  </Text>
                </View>
                <View className="flex-row items-center">
                  <SongMenu />
                </View>
              </View>
            )}
          />
        }
        headerButtons={<Appbar.Action icon="trash-can-outline" size={24} />}
      />
    </View>
  );
};
