import { Appbar, Button } from "react-native-paper";

export function Linknav({}) {
  return (
    <Appbar.Header className="bg-white items-center px-2 justify-between">
      <Button onPress={() => console.log("a")} labelStyle={{ fontSize: 16, color: "#000" }} mode="outlined">
        Şarkılar
      </Button>
      <Button onPress={() => console.log("a")} labelStyle={{ fontSize: 16, color: "#000" }}>
        Sanatçılar
      </Button>
      <Button onPress={() => console.log("a")} labelStyle={{ fontSize: 16, color: "#000" }}>
        Albümler
      </Button>
      <Button onPress={() => console.log("a")} labelStyle={{ fontSize: 16, color: "#000" }}>
        Klasörler
      </Button>
    </Appbar.Header>
  );
}
