import { useState } from "react";
import { FlatList, View } from "react-native";
import { Appbar } from "react-native-paper";
import { Songcard, Songmodal, Sortmenu } from "src/components";
import { ScreenContent } from "./ScreenContent";
import { ScreenHeader } from "./ScreenHeader";

const songs = ["Dargın Zeynep", "Kül Merve", "ceylin", "deniz", "ayse", "mehmet", "yesim"];

const Header = () => {
  const [visible, setVisible] = useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  return (
    <Appbar.Header className="bg-white">
      <Appbar.Action icon="play-circle" size={48} color="#7e22ce" className="m-0 p-0" onPress={showModal} />
      <Appbar.Content title="Karışık Çal" titleStyle={{ fontSize: 18, fontWeight: "bold" }} onPress={showModal} />
      <Songmodal visible={visible} hideModal={hideModal} />
      <Sortmenu />
      <Appbar.Action icon="playlist-check" size={28} />
    </Appbar.Header>
  );
};

const Content = () => (
  <FlatList
    // className="bg-white h-[38%]"
    className="bg-white h-[80%]"
    data={songs}
    renderItem={({ item }) => <Songcard item={item} />}
    showsVerticalScrollIndicator={false}
  />
);

export function SongsScreen({}) {
  return (
    <View>
      <ScreenHeader header={<Header />} />
      <ScreenContent content={<Content />} />
    </View>
  );
}
