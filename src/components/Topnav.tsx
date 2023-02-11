import { useState } from "react";
import { Appbar, Searchbar } from "react-native-paper";

export function Topnav({}) {
  const [searchQuery, setSearchQuery] = useState("");
  const onChangeSearch = (query: string) => setSearchQuery(query);

  return (
    <Appbar.Header className="bg-white">
      <Appbar.Action icon="tune-variant" onPress={() => console.log("test")} />
      <Searchbar
        className="w-5/6 rounded-full bg-gray-50 shadow-none"
        placeholder="Şarkı yada sanatçı arayın"
        placeholderTextColor="#aaa"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
    </Appbar.Header>
  );
}
