import { useState } from "react";
import { Text, TouchableOpacity } from "react-native";
import { RadioButton } from "react-native-paper";

type TSongsScreenHeaderMenuItemProps = { item: string; index: number; sortby: string[] };
export const SongsScreenHeaderMenuItem = ({ item, index, sortby }: TSongsScreenHeaderMenuItemProps) => {
  const [checked, setChecked] = useState(sortby[0]);
  return (
    <TouchableOpacity
      className="flex-row items-center justify-between px-2"
      style={{ backgroundColor: checked === item ? "#EACFFA" : "transparent" }}
      onPress={() => setChecked(item)}
    >
      <Text className="text-[16px] mr-4">{sortby[index]} göre</Text>
      <RadioButton value={item} status={checked === item ? "checked" : "unchecked"} />
    </TouchableOpacity>
  );
};
