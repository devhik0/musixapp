import { Text, View } from "react-native";
import { Modal, Portal } from "react-native-paper";
import { MenuFooter } from "./MenuFooter";
import { MenuHeader } from "./MenuHeader";
import { MenuNav } from "./MenuNav";

type TMenuModalProps = {
  visible: boolean;
  hideModal: () => void;
  title: string;
  headerButtons: JSX.Element;
  modalContent: JSX.Element;
  songs: string[];
  text: string;
};
export const MenuModal = ({ visible, hideModal, title, headerButtons, modalContent, songs, text }: TMenuModalProps) => {
  const containerStyle = { backgroundColor: "#fff", flex: 1 };

  return (
    <Portal>
      <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
        <MenuHeader title={title} hideModal={hideModal} />
        <MenuNav headerButtons={headerButtons} />
        <View className="absolute top-28 w-full h-[75%]">{modalContent}</View>
        {!songs && <Text className="text-center text-xl">Hiç {text} yok</Text>}
        <MenuFooter hideModal={hideModal} />
      </Modal>
    </Portal>
  );
};
