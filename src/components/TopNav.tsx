import { useState } from "react";
import { Appbar, Searchbar } from "react-native-paper";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const onChangeSearch = (query: string) => setSearchQuery(query);

  return (
    <Searchbar
      className="w-5/6 rounded-full bg-gray-50 shadow-none h-[40]"
      placeholder="Şarkı yada sanatçı arayın"
      placeholderTextColor="#aaa"
      inputStyle={{ fontSize: 16 }}
      onChangeText={onChangeSearch}
      value={searchQuery}
    />
  );
};

export const TopNav = () => {
  return (
    <Appbar.Header className="bg-white">
      <Appbar.Action icon="tune-variant" onPress={() => console.log("test")} />
      <Search />
    </Appbar.Header>
  );
};
