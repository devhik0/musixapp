import { View } from "react-native";
import { Appbar } from "react-native-paper";
import { Sortmenu } from "../Sortmenu";
import { FavModalContent } from "./menubar/FavModalContent";
import { ListModalContent } from "./menubar/ListModalContent";
import { RecentModalContent } from "./menubar/RecentModalContent";
import { Menucard } from "./Menucard";

const songs = ["müslüm gürses", "serdar ortaç", "bengü", "ebru yaşar"];

export const Menubar = () => {
  const FavModalButtons = (
    <View className="flex-row">
      <Sortmenu />
      <Appbar.Action icon="playlist-check" size={28} />
    </View>
  );
  const ListModalButton = <Appbar.Action icon="playlist-plus" size={24} />;
  const RecentModalButton = <Appbar.Action icon="trash-can-outline" size={24} />;

  return (
    <View className="bg-white flex-row gap-x-3 py-4 justify-center ">
      <Menucard
        title="Favoriler"
        bg="#7e22ce"
        text="favori"
        icon="heart"
        songs={songs}
        modalContent={<FavModalContent songs={songs} />}
        headerButtons={FavModalButtons}
      />
      <Menucard
        title="Listeler"
        bg="#0f766e"
        text="liste"
        icon="playlist-music"
        songs={songs}
        modalContent={<ListModalContent />}
        headerButtons={ListModalButton}
      />
      <Menucard
        title="En Son"
        bg="#f59e0b"
        text="çalınan"
        icon="history"
        songs={songs}
        modalContent={<RecentModalContent />}
        headerButtons={RecentModalButton}
      />
    </View>
  );
};
