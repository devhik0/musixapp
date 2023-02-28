import React from "react";
import { View } from "react-native";
import { MenuCard } from "../card/MenuCard";
import { FavModalButton, FavModalContent } from "./fav";
import { ListModalButton, ListModalContent } from "./list";
import { RecentModalButton, RecentModalContent } from "./recent";

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
