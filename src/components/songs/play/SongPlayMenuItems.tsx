import { FlatList } from "react-native";
import { SongPlayMenuItem } from "./SongPlayMenuItem";

type TSongPlayMenuItems = { showModalList: () => void };
export const SongPlayMenuItems = ({ showModalList }: TSongPlayMenuItems) => {
  return (
    <FlatList
      horizontal
      data={["shuffle", "skip-previous", "play-circle", "skip-next", "playlist-music"]}
      renderItem={({ item }) => <SongPlayMenuItem item={item} showModalList={showModalList} />}
    />
  );
};
