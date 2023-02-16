import { useState } from "react";
import { View } from "react-native";
import { Appbar, Card, Modal, Portal, Text } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Bottomnav } from "./Bottomnav";
import { Songmodal } from "./Songmodal";
import { Sortmenu } from "./Sortmenu";

type Menucardprops = {
  title: string;
  bg: string;
  text: string;
  icon: string;
  songs: string[];
  modalContent: JSX.Element | JSX.Element[];
};

export function Menucard({ title, bg, text, icon, songs, modalContent }: Menucardprops) {
  const containerStyle = { backgroundColor: "#fff", flex: 1 };

  const [visible, setVisible] = useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  const [visiblesong, setVisibleSong] = useState(false);
  const showModalSong = () => setVisibleSong(true);
  const hideModalSong = () => setVisibleSong(false);

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
          <View className="container flex-1 flex-row  absolute m-0 p-2 top-0 items-center">
            <Icon name="chevron-left" size={32} style={{ marginRight: 128 }} onPress={hideModal} />
            <Text className="font-bold text-xl">{title}</Text>
          </View>
          <View className=" absolute top-12 w-full">
            <Appbar.Header className="bg-white">
              <Appbar.Action
                icon="play-circle"
                size={36}
                color="#7e22ce"
                className="m-0 p-0"
                onPress={() => console.log("play !")}
              />
              <Appbar.Content
                title="Karışık Çal"
                titleStyle={{ fontSize: 16, fontWeight: "bold" }}
                onPress={showModalSong}
              />
              <Songmodal visible={visiblesong} hideModal={hideModalSong} />
              <Sortmenu />
              <Appbar.Action icon="playlist-check" size={28} />
            </Appbar.Header>
          </View>
          {/* // ! here is variable  */}
          <View className="absolute top-28 w-full">
            {/* // * Modal Content component */}
            {modalContent}
          </View>
          {/* // ! here is variable  */}
          {!songs && <Text className="text-center text-xl">Hiç {text} yok</Text>}
          <View className="absolute bottom-0 w-full">
            <Bottomnav />
          </View>
        </Modal>
      </Portal>
    </View>
  );
}
