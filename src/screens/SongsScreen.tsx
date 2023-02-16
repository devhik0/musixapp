import { useState } from "react";
import { FlatList, View } from "react-native";
import { Appbar } from "react-native-paper";
import { Songcard } from "src/components/Songcard";
import { Songmodal } from "src/components/Songmodal";
import { Sortmenu } from "src/components/Sortmenu";

export function SongsScreen({}) {
  const [visible, setVisible] = useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  return (
    <View>
      <Appbar.Header className="bg-white">
        <Appbar.Action
          icon="play-circle"
          size={48}
          color="#7e22ce"
          className="m-0 p-0"
          onPress={() => console.log("play !")}
        />
        <Appbar.Content title="Karışık Çal" titleStyle={{ fontSize: 18, fontWeight: "bold" }} onPress={showModal} />
        <Songmodal visible={visible} hideModal={hideModal} />
        <Sortmenu />
        <Appbar.Action icon="playlist-check" size={28} />
      </Appbar.Header>
      <FlatList
        // className="bg-white h-[38%]"
        className="bg-white h-[80%]"
        data={["Dargın Zeynep", "Kül Merve", "ceylin", "deniz", "ayse", "mehmet", "yesim"]}
        renderItem={({ item }) => <Songcard item={item} />}
        keyExtractor={(_) => _}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
