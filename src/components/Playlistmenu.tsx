import { FlatList, StatusBar, Text, TouchableOpacity } from "react-native";
import { Button, Modal, Portal } from "react-native-paper";
import { Songcard } from "./Songcard";

type Playlistmenuprops = { visiblelist: boolean; hideModalList: () => void };

export function Playlistmenu({ visiblelist, hideModalList }: Playlistmenuprops) {
  const containerStyleList = { backgroundColor: "#fff", flex: 1 };

  return (
    <Portal>
      <Modal visible={visiblelist} onDismiss={hideModalList} contentContainerStyle={containerStyleList}>
        <StatusBar barStyle="dark-content" backgroundColor="#fff" />
        <FlatList
          data={["ahmet", "mehmet", "veli", "ayşe", "gizem", "hüseyin", "fadime", "emine"]}
          renderItem={({ item, index }) => (
            <TouchableOpacity className="flex-row justify-evenly mt-2">
              <Text className="text-lg m-4">0{index + 1}</Text>
              <Songcard item={item} />
            </TouchableOpacity>
          )}
        />
        <Button
          mode="contained"
          className="mb-10 mx-8 items-center bg-gray-200"
          labelStyle={{ fontSize: 18, color: "#000" }}
          onPress={hideModalList}
        >
          Kapat
        </Button>
      </Modal>
    </Portal>
  );
}
