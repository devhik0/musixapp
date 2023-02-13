import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { View } from "react-native";
import { Text } from "react-native-paper";

// Şarkılar
function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home!</Text>
    </View>
  );
}
function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
    </View>
  );
}
function OtherScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Other!</Text>
    </View>
  );
}
function NotherScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Nother!</Text>
    </View>
  );
}

const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
        <Tab.Screen name="Other" component={OtherScreen} />
        <Tab.Screen name="Nother" component={NotherScreen} />
      </Tab.Navigator>
      {/* <View className="bg-white flex-1">
        <StatusBar backgroundColor="#fff" barStyle="dark-content" />
        <Topnav />
        <Menu />
        <Text className="font-extrabold text-2xl m-2">Tüm Şarkılar</Text>
        <Linknav />
        <Songs />
        <Bottomnav />
      </View> */}
    </NavigationContainer>
  );
}
