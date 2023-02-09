import { Appbar, Text } from "react-native-paper";
import { View } from "react-native";

export function Bottomnav({}) {
  return (
    <Appbar.Header className="bg-white justify-around">
      <Appbar.Action icon="album" size={64} className="pb-2" />
      <View className="pb-2">
        <Text className="text-lg font-bold">Şarkı adı</Text>
        <Text className="text-lg text-gray-400">Sanatçı</Text>
      </View>
      <View className="flex-row pb-2">
        <Appbar.Action icon="play-circle-outline" size={32} />
        <Appbar.Action icon="skip-next-outline" size={32} />
      </View>
    </Appbar.Header>
  );
}
