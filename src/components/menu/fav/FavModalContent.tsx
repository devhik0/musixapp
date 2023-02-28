import { FlatList } from "react-native";
import { FavItems } from "./FavItems";

type TFavModalContent = { songs: string[] };
export const FavModalContent = ({ songs }: TFavModalContent) => {
  return <FlatList data={songs} renderItem={({ item }) => <FavItems item={item} />} />;
};
