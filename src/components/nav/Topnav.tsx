import { Appbar } from "react-native-paper";
import { Search } from "./Search";

export function Topnav({}) {
  return (
    <Appbar.Header className="bg-white">
      <Appbar.Action icon="tune-variant" onPress={() => console.log("test")} />
      <Search />
    </Appbar.Header>
  );
}
