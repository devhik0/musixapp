import { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { Appbar, Card, Modal, Portal, Text } from "react-native-paper";
import { Icon } from "react-native-vector-icons/Icon";
import { SongModal } from "../songs/SongModal";

type TMenuCardProps = {
  songs: string[];
  headerButtons: JSX.Element;
  text: string;
  title: string;
  modalContent: JSX.Element | JSX.Element[];
  bg: string;
  icon: string;
};
// reusable 3 ref
export const MenuCard = ({ songs, text, title, headerButtons, modalContent, bg, icon }: TMenuCardProps) => {
  const [visible, setVisible] = useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  const containerStyle = { backgroundColor: "#fff", flex: 1 };

  const [visiblesong, setVisibleSong] = useState(false);
  const showModalSong = () => setVisibleSong(true);
  const hideModalSong = () => setVisibleSong(false);

  const [visibleMenuModal, setVisibleMenuModal] = useState(false);
  const showMenuModal = () => setVisibleMenuModal(true);

  return (
    <View>
      <Card style={{ marginRight: 16, backgroundColor: bg }} onPress={showModal}>
        <Card.Content className="flex flex-col justify-start">
          <Icon name={icon} size={20} color="white" />
          <Text variant="bodyLarge" className="text-white">
            {title}
          </Text>
        </Card.Content>
      </Card>
      <Portal>
        <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
          <View className="container flex-1 flex-row absolute m-0 p-2 top-0 items-center">
            <Icon name="chevron-left" size={32} style={{ marginRight: 128 }} onPress={hideModal} />
            <Text className="font-bold text-xl">{title}</Text>
          </View>
          <View className=" absolute top-12 w-full">
            <Appbar.Header className="bg-white">
              <Appbar.Action icon="play-circle" size={36} color="#7e22ce" className="m-0 p-0" onPress={showModalSong} />
              <Appbar.Content
                title="Karışık Çal"
                titleStyle={{ fontSize: 16, fontWeight: "bold" }}
                onPress={showModalSong}
              />
              <SongModal visible={visiblesong} hideModal={hideModalSong} />
              {headerButtons}
            </Appbar.Header>
          </View>
          <View className="absolute top-28 w-full h-[75%]">{modalContent}</View>
          {!songs && <Text className="text-center text-xl">Hiç {text} yok</Text>}
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
        </Modal>
      </Portal>
    </View>
  );
};
