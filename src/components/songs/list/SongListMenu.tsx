import { StatusBar } from "react-native";
import { Modal, Portal } from "react-native-paper";
import { SongListButton } from "./SongListButton";
import { SongListMenuHeader } from "./SongListMenuHeader";
import { SongListMenuItems } from "./SongListMenuItems";

type TSongListMenuProps = { visibleList: boolean; hideModalList: () => void };
export const SongListMenu = ({ visibleList, hideModalList }: TSongListMenuProps) => {
  const containerStyleList = { backgroundColor: "#fff", flex: 1 };

  return (
    <Portal>
      <Modal visible={visibleList} onDismiss={hideModalList} contentContainerStyle={containerStyleList}>
        <StatusBar barStyle="dark-content" backgroundColor="#fff" />
        <SongListMenuHeader />
        <SongListMenuItems />
        <SongListButton hideModalList={hideModalList} />
      </Modal>
    </Portal>
  );
};
