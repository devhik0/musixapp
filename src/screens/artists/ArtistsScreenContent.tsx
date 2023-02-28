import { FlatList } from "react-native";
import { ArtistsScreenContentItem } from "./ArtistsScreenContentItem";

export const ArtistsScreenContent = () => {
  const artists = ["Ahmet", "Mehmet", "Veli", "Fatma", "Ceylin", "Ayşe", "Deniz", "Zeynep"].sort();

  return (
    <FlatList
      data={artists}
      renderItem={({ item }) => <ArtistsScreenContentItem item={item} />}
      showsVerticalScrollIndicator={false}
    />
  );
};
