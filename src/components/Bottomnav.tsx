import { View } from "react-native";
import { Appbar, Text } from "react-native-paper";

export function Bottomnav({}) {
  return (
    <View className="h-100 bg-gray-100 flex mb-6 mt-0 flex-row justify-between shadow-none">
      <View>
        <Text>IMAGE HERE</Text>
      </View>
      <View className="flex-col w-1/3 p-2 bg-fuchsia-500">
        <Text variant="bodyLarge">Şarkı Adı ad</Text>
        <Text variant="bodyLarge">Sanatçı | Albüm</Text>
      </View>
      <View className="flex-row items-center">
        <Appbar.Action icon="play-circle-outline" />
        <Appbar.Action icon="skip-next" />
      </View>
    </View>
  );
}
