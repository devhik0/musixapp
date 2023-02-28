import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";
import { BottomNav, LinkNav, MenuBar, TopNav } from "src/components";

// TODO: Apply clean architecture
/**
 * TODOS:
 * //Extract types
 * //fix errors
 * //Extract components
 * //add barrel imports (index.ts)
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
