import { FlatList } from "react-native";
import { RecentItems } from "./RecentItems";

type TRecentModalContentProps = { recents: string[] };
export const RecentModalContent = ({ recents }: TRecentModalContentProps) => {
  return <FlatList data={recents} renderItem={({ item, index }) => <RecentItems item={item} index={index} />} />;
};
