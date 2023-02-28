import { useState } from "react";
import { View } from "react-native";
import { Card, Text } from "react-native-paper";
import { Icon } from "react-native-vector-icons/Icon";
import { MenuModal } from "./modal/MenuModal";

type TMenuCardProps = {
  title: string;
  icon: string;
  bg: string;
  songs: string[];
  headerButtons: JSX.Element;
  modalContent: JSX.Element;
  text: string;
};
// reusable 3 ref
export const MenuCard = ({ title, icon, bg, songs, headerButtons, modalContent, text }: TMenuCardProps) => {
  const [visible, setVisible] = useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  const menuModalProps = { visible, hideModal, title, songs, headerButtons, text, modalContent };

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
      <MenuModal {...menuModalProps} />
    </View>
  );
};
