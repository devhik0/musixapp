import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Appbar } from "react-native-paper";
import { SongModal } from "./SongModal";

export const BottomNav = () => {
  const [visibleModal, setVisibleModal] = useState(false);
  const showModal = () => setVisibleModal(true);
  const hideModal = () => setVisibleModal(false);

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
      <SongModal visible={visibleModal} hideModal={hideModal} />
    </View>
  );
};
