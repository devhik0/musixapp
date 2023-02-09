import { StatusBar, View } from "react-native";
import { Text } from "react-native-paper";
import { Bottomnav } from "src/components/Bottomnav";
import { Linknav } from "src/components/Linknav";
import { Menu } from "src/components/Menu";
import { Songs } from "src/components/Songs";
import { Topnav } from "src/components/Topnav";

export default function App() {
  return (
    <View className="bg-white flex-1">
      <View>
        <StatusBar backgroundColor="#fff" barStyle="dark-content" />
        <Topnav />
        <Menu />
        <View className="h-4/6 mb-0 bg-slate-400">
          <Text className="font-extrabold text-2xl m-2">Tüm Şarkılar</Text>
          <Linknav />
          <Songs />
        </View>
      </View>
      <Bottomnav />
    </View>
  );
}
