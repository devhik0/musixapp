import { FlatList } from "react-native";
import { FoldersScreenContentItem } from "./FoldersScreenContentItem";

export const FoldersScreenContent = () => {
  const folders = ["Download"];

  return (
    <FlatList
      data={folders}
      renderItem={({ item }) => <FoldersScreenContentItem item={item} />}
      showsVerticalScrollIndicator={false}
    />
  );
};
