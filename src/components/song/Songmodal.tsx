import { useState } from "react";
import { FlatList, StatusBar, Text, View } from "react-native";
import { Modal, Portal, ProgressBar } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Playlistmenu } from "../menu/Playlistmenu";
import { Songinfomenu } from "./Songinfomenu";

type Songmodalprops = { visible: boolean; hideModal: () => void };

export function Songmodal({ visible, hideModal }: Songmodalprops) {
  const containerStyle = { backgroundColor: "#42007B", flex: 1 };

  const [visiblelist, setVisibleList] = useState(false);
  const showModalList = () => setVisibleList(true);
  const hideModalList = () => setVisibleList(false);

  return (
    <Portal>
      <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
        <StatusBar barStyle="default" backgroundColor="#42007B" />
        <View className="container flex-1 justify-center">
          <View className="container flex-1 flex-row absolute top-0 p-2 justify-between items-center">
            <Icon name="chevron-down" size={28} color="#e5e7eb" onPress={hideModal} />
            <Text className="text-lg ml-1 text-gray-300">Şarkı bilgileri</Text>
            <Songinfomenu />
          </View>
          <View className="justify-center items-center h-[75%]">
            <Icon name="music-box" size={312} color="#a56bd6" />
            <View className="flex w-[80%] gap-y-1">
              <View className="flex-row justify-between">
                <Text className="text-lg font-bold text-gray-200">Şarkı adı</Text>
                <Icon name="heart-outline" size={28} color="#e5e7eb" />
              </View>
              <Text className="text-gray-400">Albüm</Text>
            </View>
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
              <Playlistmenu visiblelist={visiblelist} hideModalList={hideModalList} />
            </View>
          </View>
          <View>
            <View className="mx-8 mt-4">
              <ProgressBar progress={0.5} color="#d3d3d3" style={{ backgroundColor: "#7F48AD", height: 2 }} />
            </View>
            <View className="mx-8 mt-2 flex flex-row justify-between">
              <Text className="text-gray-500">0.00</Text>
              <Text className="text-gray-500">4.32</Text>
            </View>
          </View>
          <View />
        </View>
      </Modal>
    </Portal>
  );
}
