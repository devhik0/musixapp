import { useState } from "react";
import { FlatList, TouchableOpacity, View } from "react-native";
import { Appbar, Menu, RadioButton, Text } from "react-native-paper";
import { Icon } from "react-native-vector-icons/Icon";
import { SongMenu, SongModal } from "../songs";
import { ScreenContent } from "./shared/ScreenContent";
import { ScreenHeader } from "./shared/ScreenHeader";

const SongScreenHeader = () => {
  const [visible, setVisible] = useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  const [visibleSort, setVisibleSort] = useState(false);
  const openSort = () => setVisibleSort(true);
  const closeSort = () => setVisibleSort(false);

  const sortby = ["Son eklenene", "Ada", "Artiste"];
  const [checked, setChecked] = useState(sortby[0]);

  return (
    <Appbar.Header className="bg-white">
      <Appbar.Action icon="play-circle" size={48} color="#7e22ce" className="m-0 p-0" onPress={showModal} />
      <Appbar.Content title="Karışık Çal" titleStyle={{ fontSize: 18, fontWeight: "bold" }} onPress={showModal} />
      <SongModal visible={visible} hideModal={hideModal} />
      <Menu
        contentStyle={{ backgroundColor: "white" }}
        visible={visibleSort}
        onDismiss={closeSort}
        anchor={<Appbar.Action icon="sort" size={28} onPress={openSort} />}
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
    </Appbar.Header>
  );
};
const SongScreenContent = () => {
  const songs = ["Dargın Zeynep", "Kül Merve", "ceylin", "deniz", "ayse", "mehmet", "yesim"];

  return (
    <FlatList
      // className="bg-white h-[38%]"
      className="bg-white h-[80%]"
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
      showsVerticalScrollIndicator={false}
    />
  );
};
export const SongsScreen = () => {
  return (
    <View>
      <ScreenHeader header={<SongScreenHeader />} />
      <ScreenContent content={<SongScreenContent />} />
    </View>
  );
};
