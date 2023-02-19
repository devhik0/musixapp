import { useState } from "react";
import { FlatList, View } from "react-native";
import { Appbar, Menu, Text } from "react-native-paper";

export function Songmenu() {
  const songOptions = ["Daha sonra oynat", "Sıraya ekle", "Çalma listesine ekle", "Sil", "Paylaş"];

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
        <FlatList
          data={songOptions}
          renderItem={({ item }) => <Menu.Item title={item} onPress={() => console.log("running  flawless!")} />}
        />
      </Menu>
    </View>
  );
}
