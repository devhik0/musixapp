import { View } from "react-native";
import { SongContent } from "./SongContent";
import { SongInfo } from "./SongInfo";
import { SongProgress } from "./SongProgress";

type TSongContainerProps = { hideModal: () => void };
export const SongContainer = ({ hideModal }: TSongContainerProps) => {
  return (
    <View className="container flex-1 justify-center">
      <SongInfo hideModal={hideModal} />
      <SongContent />
      <SongProgress />
    </View>
  );
};
