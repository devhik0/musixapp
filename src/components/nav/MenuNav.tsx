import { useState } from "react";
import { View } from "react-native";
import { Appbar } from "react-native-paper";
import { SongModal } from "../songs/utils/SongModal";

type TMenuNavProps = { headerButtons: JSX.Element };
export const MenuNav = ({ headerButtons }: TMenuNavProps) => {
  const [visibleSong, setVisibleSong] = useState(false);
  const showModalSong = () => setVisibleSong(true);
  const hideModalSong = () => setVisibleSong(false);

  return (
    <View className=" absolute top-12 w-full">
      <Appbar.Header className="bg-white">
        <Appbar.Action icon="play-circle" size={36} color="#7e22ce" className="m-0 p-0" onPress={showModalSong} />
        <Appbar.Content title="Karışık Çal" titleStyle={{ fontSize: 16, fontWeight: "bold" }} onPress={showModalSong} />
        <SongModal visible={visibleSong} hideModal={hideModalSong} />
        {headerButtons}
      </Appbar.Header>
    </View>
  );
};
