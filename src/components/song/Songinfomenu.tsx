import { useState } from "react";
import { FlatList, TouchableOpacity } from "react-native";
import { Menu } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export function Songinfomenu() {
  const menuItems = [
    "Uyku zamanlayıcı",
    "Zil sesi düzenleyici",
    "Şarkı bilgilerini düzenle",
    "Paylaş",
    "Çalma sırasından kaldır",
  ];

  const menuIcons = ["timer-outline", "bell-outline", "pencil-outline", "share-outline", "close"];

  const [visiblemenu, setVisibleMenu] = useState(false);
  const openMenu = () => setVisibleMenu(true);
  const closeMenu = () => setVisibleMenu(false);

  return (
    <Menu
      contentStyle={{ backgroundColor: "white", padding: 16 }}
      visible={visiblemenu}
      onDismiss={closeMenu}
      anchor={<Icon name="dots-vertical" size={28} color="#e5e7eb" onPress={openMenu} />}
    >
      <FlatList
        data={menuItems}
        renderItem={({ item, index }) => (
          <TouchableOpacity className="flex-row items-center">
            <Icon name={menuIcons[index]} size={24} />
            <Menu.Item onPress={() => "hey"} title={item} />
          </TouchableOpacity>
        )}
      />
    </Menu>
  );
}
