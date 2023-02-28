import { View } from "react-native";
import { FavModalButton } from "../fav/FavModalButton";
import { FavModalContent } from "../fav/FavModalContent";
import { ListModalButton } from "../list/ListModalButton";
import { ListModalContent } from "../list/ListModalContent";
import { RecentModalButton } from "../recent/RecentModalButton";
import { RecentModalContent } from "../recent/RecentModalContent";
import { MenuCard } from "./MenuCard";

export const MenuBar = () => {
  const songs = ["Dargın Zeynep", "Kül Merve", "ceylin", "deniz", "ayse", "mehmet", "yesim"];
  const recents = ["zeynep  bastık", "kenan doğulu"];
  const playlists = ["playlist 1", "playlist 2"];

  return (
    <View className="bg-white flex-row gap-x-3 py-4 justify-center ">
      <MenuCard
        songs={songs}
        title="Favoriler"
        bg="#7e22ce"
        text="favori"
        icon="heart"
        modalContent={<FavModalContent songs={songs} />}
        headerButtons={<FavModalButton />}
      />
      <MenuCard
        songs={songs}
        title="Listeler"
        bg="#0f766e"
        text="liste"
        icon="playlist-music"
        modalContent={<ListModalContent playlists={playlists} />}
        headerButtons={<ListModalButton />}
      />
      <MenuCard
        songs={songs}
        title="En Son"
        bg="#f59e0b"
        text="çalınan"
        icon="history"
        modalContent={<RecentModalContent recents={recents} />}
        headerButtons={<RecentModalButton />}
      />
    </View>
  );
};
