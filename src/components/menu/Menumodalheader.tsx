import { useState } from "react";
import { View } from "react-native";
import { Appbar } from "react-native-paper";
import { Songmodal } from "../Songmodal";

export type Menumodalheaderprops = { headerButtons: JSX.Element };

export const Menumodalheader = ({ headerButtons }: Menumodalheaderprops) => {
  const [visiblesong, setVisibleSong] = useState(false);
  const showModalSong = () => setVisibleSong(true);
  const hideModalSong = () => setVisibleSong(false);

  return (
    <View className=" absolute top-12 w-full">
      <Appbar.Header className="bg-white">
        <Appbar.Action icon="play-circle" size={36} color="#7e22ce" className="m-0 p-0" onPress={showModalSong} />
        <Appbar.Content title="Karışık Çal" titleStyle={{ fontSize: 16, fontWeight: "bold" }} onPress={showModalSong} />
        <Songmodal visible={visiblesong} hideModal={hideModalSong} />
        {headerButtons}
      </Appbar.Header>
    </View>
  );
};
