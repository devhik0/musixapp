import { FlatList } from "react-native";
import { SongsScreenContentItem } from "./SongsScreenContentItem";

export const SongsScreenContent = () => {
  const songs = ["Dargın Zeynep", "Kül Merve", "ceylin", "deniz", "ayse", "mehmet", "yesim"];

  return (
    <FlatList
      // className="bg-white h-[38%]"
      className="bg-white h-[80%]"
      data={songs}
      renderItem={({ item }) => <SongsScreenContentItem item={item} />}
      showsVerticalScrollIndicator={false}
    />
  );
};
