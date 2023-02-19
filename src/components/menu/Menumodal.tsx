import { Text, View } from "react-native";
import { Modal, Portal } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Bottomnav } from "../nav/Bottomnav";
import { type ModalProps } from "./Menucard";
import { Menumodalheader } from "./Menumodalheader";

type Menumodalprops = ModalProps & {
  visible: boolean;
  hideModal: () => void;
};

export const Menumodal = ({ title, text, songs, modalContent, headerButtons, visible, hideModal }: Menumodalprops) => {
  const containerStyle = { backgroundColor: "#fff", flex: 1 };

  const menuModalHeaderProps = { headerButtons };

  return (
    <Portal>
      <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
        <View className="container flex-1 flex-row absolute m-0 p-2 top-0 items-center">
          <Icon name="chevron-left" size={32} style={{ marginRight: 128 }} onPress={hideModal} />
          <Text className="font-bold text-xl">{title}</Text>
        </View>
        <Menumodalheader {...menuModalHeaderProps} />
        <View className="absolute top-28 w-full h-[75%]">{modalContent}</View>
        {!songs && <Text className="text-center text-xl">Hiç {text} yok</Text>}
        <View className="absolute bottom-0 w-full">
          <Bottomnav />
        </View>
      </Modal>
    </Portal>
  );
};
