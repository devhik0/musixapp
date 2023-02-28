import { FlatList } from "react-native";
import { SongsScreenHeaderMenuItem } from "./SongsScreenHeaderMenuItem";

export const SongsScreenHeaderMenuItems = () => {
  const sortby = ["Son eklenene", "Ada", "Artiste"];

  return (
    <FlatList
      data={sortby}
      renderItem={({ item, index }) => <SongsScreenHeaderMenuItem item={item} index={index} sortby={sortby} />}
    />
  );
};
