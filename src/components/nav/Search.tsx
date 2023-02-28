import { useState } from "react";
import { Searchbar } from "react-native-paper";

export const Search = () => {
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
