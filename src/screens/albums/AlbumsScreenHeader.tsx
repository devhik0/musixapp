import { Appbar } from "react-native-paper";

export const AlbumsScreenHeader = () => {
  return (
    <Appbar.Header className="bg-white">
      <Appbar.Action
        icon="play-circle"
        size={48}
        color="#7e22ce"
        className="m-0 p-0"
        onPress={() => console.log("play !")}
      />
      <Appbar.Content title="Karışık Çal" titleStyle={{ fontSize: 18, fontWeight: "bold" }} />
      <Appbar.Action icon="sort" />
    </Appbar.Header>
  );
};
