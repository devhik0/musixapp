import { FlatList } from "react-native";
import { ListItems } from "./ListItems";

type TListModalContentProps = { playlists: string[] };
export const ListModalContent = ({ playlists }: TListModalContentProps) => {
  return <FlatList data={playlists} renderItem={({ item }) => <ListItems item={item} />} />;
};
