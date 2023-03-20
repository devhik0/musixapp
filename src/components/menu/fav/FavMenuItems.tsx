import { useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { RadioButton } from "react-native-paper";

export const FavMenuItems = () => {
  const sortby = ["Son eklenene", "Ada", "Artiste"];
  const [checked, setChecked] = useState(sortby[0]);

  return (
    <View>
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
    </View>
  );
};
