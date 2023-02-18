import { useState } from "react";
import { View } from "react-native";
import { Card, Text } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Menumodal } from "./Menumodal";
import { type Menumodalheaderprops } from "./Menumodalheader";

export type ModalProps = Menumodalheaderprops & {
  text: string;
  title: string;
  songs: string[];
  modalContent: JSX.Element | JSX.Element[];
};

type Menucardprops = ModalProps & {
  bg: string;
  icon: string;
};

export function Menucard({ text, title, songs, headerButtons, modalContent, bg, icon }: Menucardprops) {
  const modalProps: ModalProps = { text, title, songs, headerButtons, modalContent };

  const [visible, setVisible] = useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  const menuModalProps = { ...modalProps, visible, hideModal };

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
      <Menumodal {...menuModalProps} />
    </View>
  );
}
