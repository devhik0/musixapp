import { FlatList, Text, View } from "react-native";
import { FavMenuItem } from "./FavMenuItem";

export const FavMenuItems = () => {
  const sortby = ["Son eklenene", "Ada", "Artiste"];

  return (
    <View>
      <Text className="text-center text-lg font-bold mb-2">Şarkıları sırala</Text>
      <FlatList
        data={sortby}
        renderItem={({ item, index }) => <FavMenuItem item={item} index={index} sortby={sortby} />}
      />
    </View>
  );
};
