import { FlatList } from "react-native";
import { Menu } from "react-native-paper";

export const SongMenuItems = () => {
  const songOptions = ["Daha sonra oynat", "Sıraya ekle", "Çalma listesine ekle", "Sil", "Paylaş"];

  return (
    <FlatList
      data={songOptions}
      renderItem={({ item }) => <Menu.Item title={item} onPress={() => console.log("running  flawless!")} />}
    />
  );
};
