import { useState } from "react";
import { View } from "react-native";
import { Appbar, Menu, Text } from "react-native-paper";

export function Songmenu() {
  const [visible, setVisible] = useState(false);
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  return (
    <View className="flex-row justify-center">
      <Menu
        style={{ marginRight: 30, width: "80%" }}
        contentStyle={{ backgroundColor: "white" }}
        visible={visible}
        onDismiss={closeMenu}
        anchor={<Appbar.Action icon="dots-vertical" size={32} color="#aaa" onPress={openMenu} />}
      >
        <Text className="text-center text-lg font-bold">Dargın Zeynep | Albüm</Text>
        <Menu.Item onPress={() => console.log("yes")} titleStyle={{ fontWeight: "bold" }} title="Daha sonra oynat" />
        <Menu.Item onPress={() => console.log("yes")} titleStyle={{ fontWeight: "bold" }} title="Sıraya ekle" />
        <Menu.Item onPress={() => console.log("yes")} titleStyle={{ fontWeight: "bold" }} title="Çalma istesine ekle" />
        <Menu.Item onPress={() => console.log("yes")} titleStyle={{ fontWeight: "bold" }} title="Sil" />
        <Menu.Item onPress={() => console.log("yes")} titleStyle={{ fontWeight: "bold" }} title="Paylaş" />
      </Menu>
    </View>
  );
}
