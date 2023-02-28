import { View } from "react-native";
import { SongContent, SongInfo, SongProgress } from ".";

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
