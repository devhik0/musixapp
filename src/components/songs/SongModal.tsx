import { StatusBar } from "react-native";
import { Modal, Portal } from "react-native-paper";
import { SongContainer } from "./SongContainer";

type TSongModalProps = { visible: boolean; hideModal: () => void };
// reusable 4 ref
export const SongModal = ({ visible, hideModal }: TSongModalProps) => {
  const containerStyle = { backgroundColor: "#42007B", flex: 1 };

  return (
    <Portal>
      <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
        <StatusBar barStyle="default" backgroundColor="#42007B" />
        <SongContainer hideModal={hideModal} />
      </Modal>
    </Portal>
  );
};
