import { FlatList } from "react-native";
import { Songcard } from "src/components/song/Songcard";

const FavContent = ({ item }: { item: string }) => {
  return <Songcard item={item} />;
};

export const FavModalContent = ({ songs }: { songs: string[] }) => (
  <FlatList data={songs} renderItem={({ item }) => <FavContent item={item} />} />
);
