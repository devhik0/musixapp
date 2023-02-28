import { Appbar } from "react-native-paper";
import { Search } from "./Search";

export const TopNav = () => {
  return (
    <Appbar.Header className="bg-white">
      <Appbar.Action icon="tune-variant" onPress={() => console.log("test")} />
      <Search />
    </Appbar.Header>
  );
};
