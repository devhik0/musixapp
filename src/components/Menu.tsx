import { useState } from "react";
import { View } from "react-native";
import { Card, Modal, Portal, Text } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export function Menu({}) {
  const [visiblefav, setVisibleFav] = useState(false);
  const showModalFav = () => setVisibleFav(true);
  const hideModalFav = () => setVisibleFav(false);

  const [visiblelist, setVisibleList] = useState(false);
  const showModalList = () => setVisibleList(true);
  const hideModalList = () => setVisibleList(false);

  const [visiblerecent, setVisibleRecent] = useState(false);
  const showModalRecent = () => setVisibleRecent(true);
  const hideModalRecent = () => setVisibleRecent(false);

  const containerStyle = { backgroundColor: "#fff", flex: 1 };

  return (
    <View className="bg-white flex-row gap-x-3 p-4 justify-center ">
      {/* //! favcard */}
      <Card className="w-1/4 mr-3 bg-purple-700" onPress={showModalFav}>
        <Card.Content className="flex flex-col justify-start">
          <Icon name="heart" size={20} color="white" />
          <Text variant="bodyLarge" className="text-white">
            Favoriler
          </Text>
        </Card.Content>
      </Card>
      <Portal>
        <Modal visible={visiblefav} onDismiss={hideModalFav} contentContainerStyle={containerStyle}>
          <View className="container flex-1 flex-row absolute m-0 p-2 top-0 items-center">
            <Icon name="arrow-left" size={32} style={{ marginRight: 128 }} onPress={hideModalFav} />
            <Text className="font-bold text-xl">Favoriler</Text>
          </View>
          <Text className="text-center text-xl">Hiç favori yok</Text>
        </Modal>
      </Portal>
      {/* //! favcard */}
      {/* //! listcard */}
      <Card className="w-1/4 mr-3 bg-teal-700" onPress={showModalList}>
        <Card.Content className="flex flex-col justify-start">
          <Icon name="playlist-music" size={20} color="white" />
          <Text variant="bodyLarge" className="text-white">
            Listeler
          </Text>
        </Card.Content>
      </Card>
      <Portal>
        <Modal visible={visiblelist} onDismiss={hideModalList} contentContainerStyle={containerStyle}>
          <View className="flex-row absolute m-0 p-2 top-0 items-center">
            <Icon name="arrow-left" size={32} style={{ marginRight: 128 }} onPress={hideModalList} />
            <Text className="font-bold text-xl">Listeler</Text>
          </View>
          <Text className="text-center text-xl">Hiç liste yok</Text>
        </Modal>
      </Portal>
      {/* //! listcard */}
      {/* //! lastcard */}
      <Card className="w-1/4 mr-3 bg-amber-500" onPress={showModalRecent}>
        <Card.Content className="flex flex-col justify-sstart">
          <Icon name="history" size={20} color="white" />
          <Text variant="bodyLarge" className="text-white">
            En Son
          </Text>
        </Card.Content>
      </Card>
      <Portal>
        <Modal visible={visiblerecent} onDismiss={hideModalRecent} contentContainerStyle={containerStyle}>
          <View className="flex-row absolute m-0 p-2 top-0 items-center">
            <Icon name="arrow-left" size={32} style={{ marginRight: 128 }} onPress={hideModalRecent} />
            <Text className="font-bold text-xl">En Son</Text>
          </View>
          <Text className="text-center text-xl">Hiç çalınan yok</Text>
        </Modal>
      </Portal>
      {/* //! lastcard */}
    </View>
  );
}
