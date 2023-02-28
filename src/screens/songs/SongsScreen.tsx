import { View } from "react-native";
import { ScreenContent } from "../shared/ScreenContent";
import { ScreenHeader } from "../shared/ScreenHeader";
import { SongsScreenContent } from "./SongsScreenContent";
import { SongsScreenHeader } from "./SongsScreenHeader";

export const SongsScreen = () => {
  return (
    <View>
      <ScreenHeader header={<SongsScreenHeader />} />
      <ScreenContent content={<SongsScreenContent />} />
    </View>
  );
};
