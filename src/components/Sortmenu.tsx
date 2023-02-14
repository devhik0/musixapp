import { useState } from "react";
import { FlatList, TouchableOpacity } from "react-native";
import { Appbar, Menu, RadioButton, Text } from "react-native-paper";

export function Sortmenu() {
  const sortby = ["Son eklenene", "Ada", "Artiste"];
  const [checked, setChecked] = useState(sortby[0]);

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
      <Text className="text-center text-lg font-bold mb-2">Şarkıları sırala</Text>
      <FlatList
        data={sortby}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            className="flex-row items-center justify-between px-2"
            style={{ backgroundColor: checked === item ? "#EACFFA" : "transparent" }}
            onPress={() => setChecked(item)}
          >
            <Text className="text-[16px] mr-4">{sortby[index]} göre</Text>
            <RadioButton value={item} status={checked === item ? "checked" : "unchecked"} />
          </TouchableOpacity>
        )}
      />
    </Menu>
  );
}
