import { useState } from "react";
import { Appbar, Menu } from "react-native-paper";
import { FavMenuItems } from "./FavMenuItems";

export const FavMenu = () => {
  const [visible, setVisible] = useState(false);
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  return (
    <Menu
      contentStyle={{ backgroundColor: "white" }}
      visible={visible}
      onDismiss={closeMenu}
      anchor={<Appbar.Action icon="sort" size={28} onPress={openMenu} />}
    >
      <FavMenuItems />
    </Menu>
  );
};
