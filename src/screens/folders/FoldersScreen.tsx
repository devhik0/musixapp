import { View } from "react-native";
import { ScreenContent } from "../shared/ScreenContent";
import { ScreenHeader } from "../shared/ScreenHeader";
import { FoldersScreenContent } from "./FoldersScreenContent";
import { FoldersScreenHeader } from "./FoldersScreenHeader";

export const FoldersScreen = () => {
  return (
    <View className="flex-1 bg-white">
      <ScreenHeader header={<FoldersScreenHeader />} />
      <ScreenContent content={<FoldersScreenContent />} />
    </View>
  );
};
