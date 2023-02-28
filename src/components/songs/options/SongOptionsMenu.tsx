import { FlatList } from "react-native";
import { SongOptionsMenuItems } from "./SongOptionsMenuItems";

export const SongOptionsMenu = () => {
  const menuItems = [
    "Uyku zamanlayıcı",
    "Zil sesi düzenleyici",
    "Şarkı bilgilerini düzenle",
    "Paylaş",
    "Çalma sırasından kaldır",
  ];

  return (
    <FlatList data={menuItems} renderItem={({ item, index }) => <SongOptionsMenuItems item={item} index={index} />} />
  );
};
