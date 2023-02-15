import { useState } from "react";
import { TouchableOpacity } from "react-native";
import { Menu } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export function Songinfomenu() {
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
      {/* //! Flatlist here !!! */}
      <TouchableOpacity className="flex-row items-center">
        <Icon name="timer-outline" size={24} />
        <Menu.Item onPress={() => "hey"} title="Uyku zamanlayıcı" />
      </TouchableOpacity>
      <TouchableOpacity className="flex-row items-center">
        <Icon name="bell-outline" size={24} />
        <Menu.Item onPress={() => "hey"} title="Zil sesi düzenleyici" />
      </TouchableOpacity>
      <TouchableOpacity className="flex-row items-center">
        <Icon name="pencil-outline" size={24} />
        <Menu.Item onPress={() => "hey"} title="Şarkı bilgilerini düzenle" />
      </TouchableOpacity>
      <TouchableOpacity className="flex-row items-center">
        <Icon name="share-outline" size={24} />
        <Menu.Item onPress={() => "hey"} title="Paylaş" />
      </TouchableOpacity>
      <TouchableOpacity className="flex-row items-center">
        <Icon name="close" size={24} />
        <Menu.Item onPress={() => "hey"} title="Çalma sırasından kaldır" />
      </TouchableOpacity>
    </Menu>
  );
}
