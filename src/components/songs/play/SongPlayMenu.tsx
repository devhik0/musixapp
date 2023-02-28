import { useState } from "react";
import { View } from "react-native";
import { SongListMenu } from "../list/SongListMenu";
import { SongPlayMenuItems } from "./SongPlayMenuItems";

export const SongPlayMenu = () => {
  const [visibleList, setVisibleList] = useState(false);
  const showModalList = () => setVisibleList(true);
  const hideModalList = () => setVisibleList(false);

  return (
    <View className="flex-row mt-8 px-2 justify-center items-center gap-x-6 w-full">
      <SongPlayMenuItems showModalList={showModalList} />
      <SongListMenu visibleList={visibleList} hideModalList={hideModalList} />
    </View>
  );
};
