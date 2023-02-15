import { useState } from "react";
import { StatusBar, TouchableOpacity, View } from "react-native";
import { Appbar, Menu, Modal, Portal, ProgressBar, Text } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export function Bottomnav({}) {
  // TODO: Bottomsheet i yap
  const [visible, setVisible] = useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = { backgroundColor: "#42007B", flex: 1 };

  const [visiblemenu, setVisibleMenu] = useState(false);
  const openMenu = () => setVisibleMenu(true);
  const closeMenu = () => setVisibleMenu(false);

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
                <TouchableOpacity className="flex-row items-center">
                  <Icon name="timer-outline" size={24} />
                  <Menu.Item onPress={() => "hey"} title="Uyku zamanlayıcı" />
                </TouchableOpacity>
                <TouchableOpacity className="flex-row items-center">
                  <Icon name="bell-outline" size={24} />
                  <Menu.Item onPress={() => "hey"} title="Zil sesi düzenleyici" />
                </TouchableOpacity>
                <TouchableOpacity className="flex-row items-center">
                  <Icon name="pencil-outline" size={24} />
                  <Menu.Item onPress={() => "hey"} title="Şarkı bilgilerini düzenle" />
                </TouchableOpacity>
                <TouchableOpacity className="flex-row items-center">
                  <Icon name="share-outline" size={24} />
                  <Menu.Item onPress={() => "hey"} title="Paylaş" />
                </TouchableOpacity>
                <TouchableOpacity className="flex-row items-center">
                  <Icon name="close" size={24} />
                  <Menu.Item onPress={() => "hey"} title="Çalma sırasından kaldır" />
                </TouchableOpacity>
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
              <View className="flex-row mt-8 justify-center items-center gap-x-6 w-full">
                <Icon name="shuffle" size={28} color="#e5e7eb" />
                <Icon name="skip-previous" size={28} color="#e5e7eb" />
                <Icon name="play-circle" size={60} color="#e5e7eb" />
                <Icon name="skip-next" size={28} color="#e5e7eb" />
                {/* // TODO: Buraya bottomsheet koy ! */}
                {/* <Menu
                  style={{ marginHorizontal: 16 }}
                  contentStyle={{ backgroundColor: "white", padding: 16 }}
                  visible={visiblelist}
                  onDismiss={closeList}
                  anchor={
                    <Icon
                      name="playlist-music"
                      size={28}
                      color="#e5e7eb"
                      style={{ marginLeft: 24 }}
                      onPress={openList}
                    />
                  }
                >
                  <TouchableOpacity className="flex-row items-center">
                    <View className="flex-row items-center justify-between gap-x-4 py-2 w-full">
                      <Icon name="shuffle" size={24} />
                      <Text className="text-lg mx-8">Karıştır</Text>
                      <View className="flex-row gap-x-4">
                        <Icon name="pencil-outline" size={24} />
                        <Icon name="trash-can-outline" size={24} />
                      </View>
                    </View>
                  </TouchableOpacity>
                  <FlatList
                    data={["ahmet", "mehmet", "veli", "ayşe", "gizem", "hüseyin"]}
                    renderItem={({ item }) => <Songcard item={item} />}
                  />
                </Menu> */}
              </View>
            </View>
            <View className="mx-8 mt-4">
              <ProgressBar progress={0.5} color="#d3d3d3" style={{ backgroundColor: "#7F48AD", height: 2 }} />
            </View>
            <View className="mx-8 mt-2 flex flex-row justify-between">
              <Text className="text-gray-500">0.00</Text>
              <Text className="text-gray-500">4.32</Text>
            </View>
            <View />
          </View>
        </Modal>
      </Portal>
    </View>
  );
}
