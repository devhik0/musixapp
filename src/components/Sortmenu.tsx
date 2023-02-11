import { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { Appbar, Menu, RadioButton, Text } from "react-native-paper";

export function Sortmenu() {
  const [checked, setChecked] = useState("first");

  const [visible, setVisible] = useState(false);
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  return (
    <View className="flex-row justify-center">
      <Menu
        style={{ marginRight: 30, width: "80%" }}
        contentStyle={{ backgroundColor: "white" }}
        visible={visible}
        onDismiss={closeMenu}
        anchor={<Appbar.Action icon="sort" size={28} onPress={openMenu} />}
      >
        <Text className="text-center text-lg font-bold mb-1">Şarkıları sırala</Text>
        <TouchableOpacity
          className="flex-row items-center justify-between px-2"
          style={{ backgroundColor: checked === "first" ? "#C3ACD0" : "transparent" }}
          onPress={() => setChecked("first")}
        >
          <Text className="text-lg">Eklenme zamanına göre</Text>
          <RadioButton value="first" status={checked === "first" ? "checked" : "unchecked"} />
        </TouchableOpacity>
        <TouchableOpacity
          className="flex-row items-center justify-between px-2"
          style={{ backgroundColor: checked === "second" ? "#C3ACD0" : "transparent" }}
          onPress={() => setChecked("second")}
        >
          <Text className="text-lg">Ada göre</Text>
          <RadioButton value="second" status={checked === "second" ? "checked" : "unchecked"} />
        </TouchableOpacity>
        <TouchableOpacity
          className="flex-row items-center justify-between px-2"
          style={{ backgroundColor: checked === "third" ? "#C3ACD0" : "transparent" }}
          onPress={() => setChecked("third")}
        >
          <Text className="text-lg">Sanatçıya göre</Text>
          <RadioButton value="third" status={checked === "third" ? "checked" : "unchecked"} />
        </TouchableOpacity>
      </Menu>
    </View>
  );
}
