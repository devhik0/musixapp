import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Appbar } from "react-native-paper";
import { SongModal } from "src/components/songs/utils/SongModal";

type TMenuFooterProps = { hideModal: () => void };
export const MenuFooter = ({ hideModal }: TMenuFooterProps) => {
  const [visibleMenuModal, setVisibleMenuModal] = useState(false);
  const showMenuModal = () => setVisibleMenuModal(true);

  return (
    <View className="absolute bottom-0 w-full">
      <View>
        <TouchableOpacity onPress={showMenuModal}>
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
        <SongModal visible={visibleMenuModal} hideModal={hideModal} />
      </View>
    </View>
  );
};
