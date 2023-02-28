import { useState } from "react";
import { FlatList, TouchableOpacity, View } from "react-native";
import { Appbar, Menu, RadioButton, Text } from "react-native-paper";
import { Icon } from "react-native-vector-icons/Icon";
import { SongMenu } from "../songs/SongMenu";
import { SongModal } from "../songs/SongModal";
import { ScreenContent } from "./shared/ScreenContent";
import { ScreenHeader } from "./shared/ScreenHeader";

const songs = ["Dargın Zeynep", "Kül Merve", "ceylin", "deniz", "ayse", "mehmet", "yesim"];
const albums = ["Dargın Zeynep", "Kül Merve", "ceylin", "deniz", "ayse", "mehmet", "yesim"];
const artists = ["Ahmet", "Mehmet", "Veli", "Fatma", "Ceylin", "Ayşe", "Deniz", "Zeynep"].sort();
const folders = ["Download"];

export const SongsScreen = () => {
  const [visible, setVisible] = useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  const sortby = ["Son eklenene", "Ada", "Artiste"];
  const [checked, setChecked] = useState(sortby[0]);

  const [visibleSort, setVisibleSort] = useState(false);
  const openSort = () => setVisibleSort(true);
  const closeSort = () => setVisibleSort(false);

  return (
    <View>
      <ScreenHeader
        header={
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
        }
      />
      <ScreenContent
        content={
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
        }
      />
    </View>
  );
};
export const AlbumsScreen = () => {
  return (
    <View className="flex-1 bg-white">
      <ScreenHeader
        header={
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
        }
      />
      <ScreenContent
        content={
          <FlatList
            data={albums}
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
            showsVerticalScrollIndicator={false}
          />
        }
      />
    </View>
  );
};
export const ArtistsScreen = () => {
  return (
    <View className="flex-1 bg-white">
      <ScreenHeader
        header={
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
        }
      />
      <ScreenContent
        content={
          <FlatList
            data={artists}
            renderItem={({ item }) => (
              <View className="m-2 mx-3">
                <Text className="">{item[0]}</Text>
                <Text className="">{item}</Text>
                <Text className="">1 şarkı</Text>
              </View>
            )}
            showsVerticalScrollIndicator={false}
          />
        }
      />
    </View>
  );
};
export const FoldersScreen = () => {
  return (
    <View className="flex-1 bg-white">
      <ScreenHeader
        header={
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
        }
      />
      <ScreenContent
        content={
          <FlatList
            data={folders}
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
            showsVerticalScrollIndicator={false}
          />
        }
      />
    </View>
  );
};
