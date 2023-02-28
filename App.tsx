import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";
import { MenuBar } from "src/components/menu/utils/MenuBar";
import { BottomNav } from "src/components/nav/BottomNav";
import { LinkNav } from "src/components/nav/LinkNav";
import { TopNav } from "src/components/nav/TopNav";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <TopNav />
      <MenuBar />
      <LinkNav />
      <BottomNav />
    </NavigationContainer>
  );
}
