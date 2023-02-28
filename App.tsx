import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";
import { BottomNav } from "src/components/BottomNav";
import { LinkNav } from "src/components/LinkNav";
import { MenuBar } from "src/components/MenuBar";
import { TopNav } from "src/components/TopNav";

// TODO: Apply clean architecture
/**
 * TODOS:
 * ! Edit components
 *
 */

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
