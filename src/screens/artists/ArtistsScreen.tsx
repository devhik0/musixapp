import { View } from "react-native";
import { ScreenContent } from "../shared/ScreenContent";
import { ScreenHeader } from "../shared/ScreenHeader";
import { ArtistsScreenContent } from "./ArtistsScreenContent";
import { ArtistsScreenHeader } from "./ArtistsScreenHeader";

export const ArtistsScreen = () => {
  return (
    <View className="flex-1 bg-white">
      <ScreenHeader header={<ArtistsScreenHeader />} />
      <ScreenContent content={<ArtistsScreenContent />} />
    </View>
  );
};
