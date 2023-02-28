import { useState } from "react";
import { FlatList, StatusBar, TouchableOpacity, View } from "react-native";
import { Appbar, Button, Modal, Portal, Text } from "react-native-paper";
import { Icon } from "react-native-vector-icons/Icon";
import { SongMenu } from "./SongMenu";

type TSongListMenuProps = { visibleList: boolean; hideModalList: () => void };
const SongListMenu = ({ visibleList, hideModalList }: TSongListMenuProps) => {
  const containerStyleList = { backgroundColor: "#fff", flex: 1 };

  return (
    <Portal>
      <Modal visible={visibleList} onDismiss={hideModalList} contentContainerStyle={containerStyleList}>
        <StatusBar barStyle="dark-content" backgroundColor="#fff" />

        <View className="w-full py-2 flex-row justify-between">
          <View className="flex-row gap-x-4 ml-2">
            <Icon name="shuffle" size={32} color="gray" />
            <Text className="text-lg text-gray-600">Karıştır</Text>
          </View>
          <View className="flex-row mr-6 gap-x-4">
            <Icon name="pencil-outline" size={32} color="gray" />
            <Icon name="trash-can-outline" size={32} color="gray" />
          </View>
        </View>

        <FlatList
          data={["ahmet", "mehmet", "veli", "ayşe", "gizem", "hüseyin", "fadime", "emine"]}
          renderItem={({ item, index }) => (
            <TouchableOpacity className="flex-row justify-evenly mt-1">
              <Text className="text-lg m-4">0{index + 1}</Text>
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
            </TouchableOpacity>
          )}
        />
        <Button
          mode="contained"
          className="mb-4 mx-8 items-center bg-gray-200"
          labelStyle={{ fontSize: 18, color: "#000" }}
          onPress={hideModalList}
        >
          Kapat
        </Button>
      </Modal>
    </Portal>
  );
};
const PlayMenu = () => {
  const [visibleList, setVisibleList] = useState(false);
  const showModalList = () => setVisibleList(true);
  const hideModalList = () => setVisibleList(false);

  return (
    <View className="flex-row mt-8 px-2 justify-center items-center gap-x-6 w-full">
      <FlatList
        horizontal
        data={["shuffle", "skip-previous", "play-circle", "skip-next", "playlist-music"]}
        renderItem={({ item }) => (
          <View className="gap-x-2 mx-4">
            <Icon name={item} size={32} color="#e5e7eb" onPress={showModalList} />
          </View>
        )}
      />
      <SongListMenu visibleList={visibleList} hideModalList={hideModalList} />
    </View>
  );
};

export const SongContent = () => {
  return (
    <View className="justify-center items-center h-[75%]">
      <Icon name="music-box" size={312} color="#a56bd6" />
      <View className="flex w-[80%] gap-y-1">
        <View className="flex-row justify-between">
          <Text className="text-lg font-bold text-gray-200">Şarkı adı</Text>
          <Icon name="heart-outline" size={28} color="#e5e7eb" />
        </View>
        <Text className="text-gray-400">Albüm</Text>
      </View>
      <PlayMenu />
    </View>
  );
};
