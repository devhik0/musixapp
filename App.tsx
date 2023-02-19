import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";
import { Bottomnav, Linknav, Topnav } from "src/components";
import { Menubar } from "src/components/menu/menubar/Menubar";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <Topnav />
      <Menubar />
      <Linknav />
      <Bottomnav />
    </NavigationContainer>
  );
}
