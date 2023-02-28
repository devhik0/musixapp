import { View } from "react-native";
import { ScreenContent } from "../shared/ScreenContent";
import { ScreenHeader } from "../shared/ScreenHeader";
import { AlbumsScreenContent } from "./AlbumsScreenContent";
import { AlbumsScreenHeader } from "./AlbumsScreenHeader";

export const AlbumsScreen = () => {
  return (
    <View className="flex-1 bg-white">
      <ScreenHeader header={<AlbumsScreenHeader />} />
      <ScreenContent content={<AlbumsScreenContent />} />
    </View>
  );
};
