import { useState } from "react";
import { FlatList, TouchableOpacity, View } from "react-native";
import { Appbar, Menu, RadioButton, Text } from "react-native-paper";
import { Icon } from "react-native-vector-icons/Icon";
import { SongMenu } from "src/components/songs/SongMenu";

export const FavModalButton = () => {
  const sortby = ["Son eklenene", "Ada", "Artiste"];
  const [checked, setChecked] = useState(sortby[0]);
  const [visible, setVisible] = useState(false);
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  return (
    <View className="flex-row">
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
      <Appbar.Action icon="playlist-check" size={28} />
    </View>
  );
};
type TFavModalContent = { songs: string[] };
export const FavModalContent = ({ songs }: TFavModalContent) => {
  return (
    <FlatList
      data={songs}
      renderItem={({ item }) => (
        <View className="mb-6 flex flex-row shadow-none justify-between">
          <Icon name="music-box-outline" size={64} color="#aaa" />
          <View className="flex-col py-2">
            <Text variant="bodyLarge" className="font-bold">
              {item}
            </Text>
            <Text variant="bodyLarge" className="text-gray-500">
              Sanatçı | Albüm
            </Text>
          </View>
          <View className="flex-row items-center">
            <Appbar.Action icon="share-outline" size={32} color="#aaa" />
            <SongMenu />
          </View>
        </View>
      )}
    />
  );
};
