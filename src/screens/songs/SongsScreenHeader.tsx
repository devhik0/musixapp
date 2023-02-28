import { useState } from "react";
import { Appbar } from "react-native-paper";
import { SongModal } from "src/components/songs/utils/SongModal";
import { SongsScreenHeaderMenu } from "./SongsScreenHeaderMenu";

export const SongsScreenHeader = () => {
  const [visible, setVisible] = useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  return (
    <Appbar.Header className="bg-white">
      <Appbar.Action icon="play-circle" size={48} color="#7e22ce" className="m-0 p-0" onPress={showModal} />
      <Appbar.Content title="Karışık Çal" titleStyle={{ fontSize: 18, fontWeight: "bold" }} onPress={showModal} />
      <SongModal visible={visible} hideModal={hideModal} />
      <SongsScreenHeaderMenu />
      <Appbar.Action icon="playlist-check" size={28} />
    </Appbar.Header>
  );
};
