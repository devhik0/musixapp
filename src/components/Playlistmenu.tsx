import { FlatList, StatusBar, Text, TouchableOpacity, View } from "react-native";
import { Button, Modal, Portal } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Songcard } from "./Songcard";

type Playlistmenuprops = { visiblelist: boolean; hideModalList: () => void };

export function Playlistmenu({ visiblelist, hideModalList }: Playlistmenuprops) {
  const containerStyleList = { backgroundColor: "#fff", flex: 1 };

  return (
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
              <Songcard item={item} />
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
}
