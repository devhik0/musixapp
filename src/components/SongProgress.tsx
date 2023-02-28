import { Text, View } from "react-native";
import { ProgressBar } from "react-native-paper";

export const SongProgress = () => {
  return (
    <View>
      <View className="mx-8 mt-4">
        <ProgressBar progress={0.5} color="#d3d3d3" style={{ backgroundColor: "#7F48AD", height: 2 }} />
      </View>
      <View className="mx-8 mt-2 flex flex-row justify-between">
        <Text className="text-gray-500">0.00</Text>
        <Text className="text-gray-500">4.32</Text>
      </View>
    </View>
  );
};
