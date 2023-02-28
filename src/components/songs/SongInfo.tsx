import { useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { Menu } from "react-native-paper";
import { Icon } from "react-native-vector-icons/Icon";

export const SongOptions = () => {
  const menuItems = [
    "Uyku zamanlayıcı",
    "Zil sesi düzenleyici",
    "Şarkı bilgilerini düzenle",
    "Paylaş",
    "Çalma sırasından kaldır",
  ];
  const menuIcons = ["timer-outline", "bell-outline", "pencil-outline", "share-outline", "close"];

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
};

type TSongInfoProps = { hideModal: () => void };
export const SongInfo = ({ hideModal }: TSongInfoProps) => {
  return (
    <View className="container flex-1 flex-row absolute top-0 p-2 justify-between items-center">
      <Icon name="chevron-down" size={28} color="#e5e7eb" onPress={hideModal} />
      <Text className="text-lg ml-1 text-gray-300">Şarkı bilgileri</Text>
      <SongOptions />
    </View>
  );
};
