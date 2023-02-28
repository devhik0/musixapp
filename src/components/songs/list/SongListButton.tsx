import { Button } from "react-native-paper";

type TSongListButtonProps = { hideModalList: () => void };
export const SongListButton = ({ hideModalList }: TSongListButtonProps) => {
  return (
    <Button
      mode="contained"
      className="mb-4 mx-8 items-center bg-gray-200"
      labelStyle={{ fontSize: 18, color: "#000" }}
      onPress={hideModalList}
    >
      Kapat
    </Button>
  );
};
