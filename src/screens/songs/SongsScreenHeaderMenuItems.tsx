import { useState } from "react";
import { FlatList, Text, TouchableOpacity } from "react-native";
import { RadioButton } from "react-native-paper";

export const SongsScreenHeaderMenuItems = () => {
  const sortby = ["Son eklenene", "Ada", "Artiste"];
  const [checked, setChecked] = useState(sortby[0]);

  return (
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
  );
};
