import { FlatList } from "react-native";
import { Songcard } from "src/components/Songcard";

export const FavModalContent = ({ songs }: { songs: string[] }) => (
  <FlatList data={songs} renderItem={({ item }) => <Songcard item={item} />} />
);
