import { useState } from "react";
import { Menu } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { SongOptionsMenu } from "./SongOptionsMenu";

export const SongOptions = () => {
  const [visibleMenu, setVisibleMenu] = useState(false);
  const openMenu = () => setVisibleMenu(true);
  const closeMenu = () => setVisibleMenu(false);

  return (
    <Menu
      contentStyle={{ backgroundColor: "white", padding: 16 }}
      visible={visibleMenu}
      onDismiss={closeMenu}
      anchor={<Icon name="dots-vertical" size={28} color="#e5e7eb" onPress={openMenu} />}
    >
      <SongOptionsMenu />
    </Menu>
  );
};
