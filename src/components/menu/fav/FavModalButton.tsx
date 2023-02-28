import { View } from "react-native";
import { Appbar } from "react-native-paper";
import { FavMenu } from "./FavMenu";

export const FavModalButton = () => {
  return (
    <View className="flex-row">
      <FavMenu />
      <Appbar.Action icon="playlist-check" size={28} />
    </View>
  );
};
