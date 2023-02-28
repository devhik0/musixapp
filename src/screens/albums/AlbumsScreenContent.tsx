import { FlatList } from "react-native";
import { AlbumsScreenContentItem } from "./AlbumsScreenContentItem";

export const AlbumsScreenContent = () => {
  const albums = ["Dargın Zeynep", "Kül Merve", "ceylin", "deniz", "ayse", "mehmet", "yesim"];

  return (
    <FlatList
      data={albums}
      renderItem={({ item }) => <AlbumsScreenContentItem item={item} />}
      showsVerticalScrollIndicator={false}
    />
  );
};
