import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";
import { MenuBar } from "src/components/menu/MenuBar";
import { BottomNav, LinkNav, TopNav } from "src/components/nav";

// TODO: Apply clean architecture
/**
 * TODOS:
 * //Extract types
 * //fix errors
 * //Extract components
 * ! Edit components
 *
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
