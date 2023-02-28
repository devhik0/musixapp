import { useState } from "react";
import { Text } from "react-native";
import { Appbar, Menu } from "react-native-paper";
import { SongsScreenHeaderMenuItems } from "./SongsScreenHeaderMenuItems";

export const SongsScreenHeaderMenu = () => {
  const [visibleSort, setVisibleSort] = useState(false);
  const openSort = () => setVisibleSort(true);
  const closeSort = () => setVisibleSort(false);

  return (
    <Menu
      contentStyle={{ backgroundColor: "white" }}
      visible={visibleSort}
      onDismiss={closeSort}
      anchor={<Appbar.Action icon="sort" size={28} onPress={openSort} />}
    >
      <Text className="text-center text-lg font-bold mb-2">Şarkıları sırala</Text>
      <SongsScreenHeaderMenuItems />
    </Menu>
  );
};
