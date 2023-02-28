import { Text, View } from "react-native";

type TArtistsScreenContentItem = { item: string };
export const ArtistsScreenContentItem = ({ item }: TArtistsScreenContentItem) => {
  return (
    <View className="m-2 mx-3">
      <Text className="">{item[0]}</Text>
      <Text className="">{item}</Text>
      <Text className="">1 şarkı</Text>
    </View>
  );
};
