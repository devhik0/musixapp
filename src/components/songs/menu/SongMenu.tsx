import { useState } from "react";
import { Text, View } from "react-native";
import { Appbar, Menu } from "react-native-paper";
import { SongMenuItems } from "./SongMenuItems";

// 4 ref
export const SongMenu = () => {
  const [visible, setVisible] = useState(false);
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  return (
    <View className="flex-row justify-center">
      <Menu
        contentStyle={{ backgroundColor: "white", padding: 16 }}
        visible={visible}
        onDismiss={closeMenu}
        anchor={<Appbar.Action icon="dots-vertical" size={32} color="#aaa" onPress={openMenu} />}
      >
        <Text className="text-center text-lg font-bold mb-2">Dargın Zeynep | Albüm</Text>
        <SongMenuItems />
      </Menu>
    </View>
  );
};
