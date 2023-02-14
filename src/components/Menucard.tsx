import { useState } from "react";
import { View } from "react-native";
import { Card, Modal, Portal, Text } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

type Menucardprops = { title: string; bg: string; text: string; icon: string };

export function Menucard({ title, bg, text, icon }: Menucardprops) {
  const containerStyle = { backgroundColor: "#fff", flex: 1 };

  const [visible, setVisible] = useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

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
            <Icon name="arrow-left" size={32} style={{ marginRight: 128 }} onPress={hideModal} />
            <Text className="font-bold text-xl">{title}</Text>
          </View>
          <Text className="text-center text-xl">Hiç {text} yok</Text>
        </Modal>
      </Portal>
    </View>
  );
}
