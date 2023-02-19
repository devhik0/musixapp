import { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { Appbar, Text } from "react-native-paper";
import { Songmodal } from "../song/Songmodal";

export function Bottomnav({}) {
  const [visible, setVisible] = useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

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
      <Songmodal visible={visible} hideModal={hideModal} />
    </View>
  );
}
