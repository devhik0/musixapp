import { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { Card, Modal, Portal, Text } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

// TODO: MODAL NAVIGATION HERE

export function Menu({}) {
  // ! Buna modal ile navigasyon yap
  const [visible, setVisible] = useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  const containerStyle = { backgroundColor: "#eee", padding: 20, flex: 1 };

  return (
    <View className="bg-white flex-row gap-x-3 p-4 justify-center ">
      {/* first card */}
      <Card className="w-1/4 mr-3 bg-purple-700">
        <Card.Content className="flex flex-col justify-start">
          <Icon name="heart" size={20} color="white" />
          <Text onPress={showModal} variant="bodyLarge" className="text-white">
            Favoriler
          </Text>
        </Card.Content>
      </Card>
      <Portal>
        <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
          <TouchableOpacity className="absolute top-2 left-2" onPress={hideModal}>
            <Text className="text-2xl">{"<"}</Text>
          </TouchableOpacity>
          <Text className="text-center text-2xl">FAVORILER MODALI</Text>
        </Modal>
      </Portal>
      {/* first card */}
      <Card className="w-1/4 mr-3 bg-teal-700">
        <Card.Content className="flex flex-col justify-start">
          <Icon name="playlist-music" size={20} color="white" />
          <Text variant="bodyLarge" className="text-white">
            Listeler
          </Text>
        </Card.Content>
      </Card>
      <Card className="w-1/4 mr-3 bg-amber-500">
        <Card.Content className="flex flex-col justify-start">
          <Icon name="history" size={20} color="white" />
          <Text variant="bodyLarge" className="text-white">
            En Son
          </Text>
        </Card.Content>
      </Card>
    </View>
  );
}
