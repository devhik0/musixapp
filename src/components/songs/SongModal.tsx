import { useState } from "react";
import { FlatList, StatusBar, TouchableOpacity, View } from "react-native";
import { Appbar, Button, Menu, Modal, Portal, ProgressBar, Text } from "react-native-paper";
import { Icon } from "react-native-vector-icons/Icon";
import { SongMenu } from "./SongMenu";

type TSongModalProps = { visible: boolean; hideModal: () => void };
// reusable 4 ref
export const SongModal = ({ visible, hideModal }: TSongModalProps) => {
  const menuItems = [
    "Uyku zamanlayıcı",
    "Zil sesi düzenleyici",
    "Şarkı bilgilerini düzenle",
    "Paylaş",
    "Çalma sırasından kaldır",
  ];
  const menuIcons = ["timer-outline", "bell-outline", "pencil-outline", "share-outline", "close"];
  const containerStyle = { backgroundColor: "#42007B", flex: 1 };
  const containerStyleList = { backgroundColor: "#fff", flex: 1 };
  const [visiblelist, setVisibleList] = useState(false);
  const showModalList = () => setVisibleList(true);
  const hideModalList = () => setVisibleList(false);
  const [visiblemenu, setVisibleMenu] = useState(false);
  const openMenu = () => setVisibleMenu(true);
  const closeMenu = () => setVisibleMenu(false);

  return (
    <Portal>
      <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
        <StatusBar barStyle="default" backgroundColor="#42007B" />
        <View className="container flex-1 justify-center">
          <View className="container flex-1 flex-row absolute top-0 p-2 justify-between items-center">
            <Icon name="chevron-down" size={28} color="#e5e7eb" onPress={hideModal} />
            <Text className="text-lg ml-1 text-gray-300">Şarkı bilgileri</Text>
            <Menu
              contentStyle={{ backgroundColor: "white", padding: 16 }}
              visible={visiblemenu}
              onDismiss={closeMenu}
              anchor={<Icon name="dots-vertical" size={28} color="#e5e7eb" onPress={openMenu} />}
            >
              <FlatList
                data={menuItems}
                renderItem={({ item, index }) => (
                  <TouchableOpacity className="flex-row items-center">
                    <Icon name={menuIcons[index]} size={24} />
                    <Menu.Item onPress={() => "hey"} title={item} />
                  </TouchableOpacity>
                )}
              />
            </Menu>
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
              <Portal>
                <Modal visible={visiblelist} onDismiss={hideModalList} contentContainerStyle={containerStyleList}>
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
};
