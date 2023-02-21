import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { useState } from "react";
import { FlatList, StatusBar, TouchableOpacity, View } from "react-native";
import {
  Appbar,
  Button,
  Card,
  Menu,
  Modal,
  Portal,
  ProgressBar,
  RadioButton,
  Searchbar,
  Text,
} from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const songs = ["Dargın Zeynep", "Kül Merve", "ceylin", "deniz", "ayse", "mehmet", "yesim"];
const albums = ["Dargın Zeynep", "Kül Merve", "ceylin", "deniz", "ayse", "mehmet", "yesim"];
const artists = ["Ahmet", "Mehmet", "Veli", "Fatma", "Ceylin", "Ayşe", "Deniz", "Zeynep"].sort();
const folders = ["Download"];

const SongMenu = () => {
  const songOptions = ["Daha sonra oynat", "Sıraya ekle", "Çalma listesine ekle", "Sil", "Paylaş"];

  const [visible, setVisible] = useState(false);
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  return (
    <View className="flex-row justify-center">
      <Menu
        contentStyle={{ backgroundColor: "white", padding: 16 }}
        visible={visible}
        onDismiss={closeMenu}
        anchor={<Appbar.Action icon="dots-vertical" size={32} color="#aaa" onPress={openMenu} />}
      >
        <Text className="text-center text-lg font-bold mb-2">Dargın Zeynep | Albüm</Text>
        <FlatList
          data={songOptions}
          renderItem={({ item }) => <Menu.Item title={item} onPress={() => console.log("running  flawless!")} />}
        />
      </Menu>
    </View>
  );
};
const SongInfoMenu = () => {
  const menuItems = [
    "Uyku zamanlayıcı",
    "Zil sesi düzenleyici",
    "Şarkı bilgilerini düzenle",
    "Paylaş",
    "Çalma sırasından kaldır",
  ];

  const menuIcons = ["timer-outline", "bell-outline", "pencil-outline", "share-outline", "close"];

  const [visiblemenu, setVisibleMenu] = useState(false);
  const openMenu = () => setVisibleMenu(true);
  const closeMenu = () => setVisibleMenu(false);

  return (
    <Menu
      contentStyle={{ backgroundColor: "white", padding: 16 }}
      visible={visiblemenu}
      onDismiss={closeMenu}
      anchor={<Icon name="dots-vertical" size={28} color="#e5e7eb" onPress={openMenu} />}
    >
      <FlatList
        data={menuItems}
        renderItem={({ item, index }) => (
          <TouchableOpacity className="flex-row items-center">
            <Icon name={menuIcons[index]} size={24} />
            <Menu.Item onPress={() => "hey"} title={item} />
          </TouchableOpacity>
        )}
      />
    </Menu>
  );
};
const SortMenu = () => {
  const sortby = ["Son eklenene", "Ada", "Artiste"];
  const [checked, setChecked] = useState(sortby[0]);

  const [visible, setVisible] = useState(false);
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  return (
    <Menu
      contentStyle={{ backgroundColor: "white" }}
      visible={visible}
      onDismiss={closeMenu}
      anchor={<Appbar.Action icon="sort" size={28} onPress={openMenu} />}
    >
      <Text className="text-center text-lg font-bold mb-2">Şarkıları sırala</Text>
      <FlatList
        data={sortby}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            className="flex-row items-center justify-between px-2"
            style={{ backgroundColor: checked === item ? "#EACFFA" : "transparent" }}
            onPress={() => setChecked(item)}
          >
            <Text className="text-[16px] mr-4">{sortby[index]} göre</Text>
            <RadioButton value={item} status={checked === item ? "checked" : "unchecked"} />
          </TouchableOpacity>
        )}
      />
    </Menu>
  );
};
const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const onChangeSearch = (query: string) => setSearchQuery(query);

  return (
    <Searchbar
      className="w-5/6 rounded-full bg-gray-50 shadow-none h-[40]"
      placeholder="Şarkı yada sanatçı arayın"
      placeholderTextColor="#aaa"
      inputStyle={{ fontSize: 16 }}
      onChangeText={onChangeSearch}
      value={searchQuery}
    />
  );
};
const TopNav = () => {
  return (
    <Appbar.Header className="bg-white">
      <Appbar.Action icon="tune-variant" onPress={() => console.log("test")} />
      <Search />
    </Appbar.Header>
  );
};
// reusable
const MenuCard = ({
  text,
  title,
  songs,
  headerButtons,
  modalContent,
  bg,
  icon,
}: { headerButtons: JSX.Element } & {
  text: string;
  title: string;
  songs: string[];
  modalContent: JSX.Element | JSX.Element[];
} & {
  bg: string;
  icon: string;
}) => {
  const modalProps: { headerButtons: JSX.Element } & {
    text: string;
    title: string;
    songs: string[];
    modalContent: JSX.Element | JSX.Element[];
  } = { text, title, songs, headerButtons, modalContent };

  const [visible, setVisible] = useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  const menuModalProps = { ...modalProps, visible, hideModal };

  return (
    <View>
      <Card style={{ marginRight: 16, backgroundColor: bg }} onPress={showModal}>
        <Card.Content className="flex flex-col justify-start">
          <Icon name={icon} size={20} color="white" />
          <Text variant="bodyLarge" className="text-white">
            {title}
          </Text>
        </Card.Content>
      </Card>
      <MenuModal {...menuModalProps} />
    </View>
  );
};
const MenuModal = ({
  title,
  text,
  songs,
  modalContent,
  headerButtons,
  visible,
  hideModal,
}: { headerButtons: JSX.Element } & {
  text: string;
  title: string;
  songs: string[];
  modalContent: JSX.Element | JSX.Element[];
} & {
  visible: boolean;
  hideModal: () => void;
}) => {
  const containerStyle = { backgroundColor: "#fff", flex: 1 };

  const [visiblesong, setVisibleSong] = useState(false);
  const showModalSong = () => setVisibleSong(true);
  const hideModalSong = () => setVisibleSong(false);

  return (
    <Portal>
      <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
        <View className="container flex-1 flex-row absolute m-0 p-2 top-0 items-center">
          <Icon name="chevron-left" size={32} style={{ marginRight: 128 }} onPress={hideModal} />
          <Text className="font-bold text-xl">{title}</Text>
        </View>
        <View className=" absolute top-12 w-full">
          <Appbar.Header className="bg-white">
            <Appbar.Action icon="play-circle" size={36} color="#7e22ce" className="m-0 p-0" onPress={showModalSong} />
            <Appbar.Content
              title="Karışık Çal"
              titleStyle={{ fontSize: 16, fontWeight: "bold" }}
              onPress={showModalSong}
            />
            <SongModal visible={visiblesong} hideModal={hideModalSong} />
            {headerButtons}
          </Appbar.Header>
        </View>
        <View className="absolute top-28 w-full h-[75%]">{modalContent}</View>
        {!songs && <Text className="text-center text-xl">Hiç {text} yok</Text>}
        <View className="absolute bottom-0 w-full">
          <BottomNav />
        </View>
      </Modal>
    </Portal>
  );
};

const MenuBar = () => {
  const songs = ["müslüm gürses", "serdar ortaç", "bengü", "ebru yaşar"];
  const recents = ["zeynep  bastık", "kenan doğulu"];
  const playlists = ["playlist 1", "playlist 2"];

  const FavModalButtons = (
    <View className="flex-row">
      <SortMenu />
      <Appbar.Action icon="playlist-check" size={28} />
    </View>
  );
  const ListModalButton = <Appbar.Action icon="playlist-plus" size={24} />;
  const RecentModalButton = <Appbar.Action icon="trash-can-outline" size={24} />;

  return (
    <View className="bg-white flex-row gap-x-3 py-4 justify-center ">
      <MenuCard
        title="Favoriler"
        bg="#7e22ce"
        text="favori"
        icon="heart"
        songs={songs}
        modalContent={
          <FlatList
            data={songs}
            renderItem={({ item }) => (
              <View className="mb-6 flex flex-row shadow-none justify-between">
                <Icon name="music-box-outline" size={64} color="#aaa" />
                <View className="flex-col py-2">
                  <Text variant="bodyLarge" className="font-bold">
                    {item}
                  </Text>
                  <Text variant="bodyLarge" className="text-gray-500">
                    Sanatçı | Albüm
                  </Text>
                </View>
                <View className="flex-row items-center">
                  <Appbar.Action icon="share-outline" size={32} color="#aaa" />
                  <SongMenu />
                </View>
              </View>
            )}
          />
        }
        headerButtons={FavModalButtons}
      />
      <MenuCard
        title="Listeler"
        bg="#0f766e"
        text="liste"
        icon="playlist-music"
        songs={songs}
        modalContent={
          <FlatList
            data={playlists}
            renderItem={({ item }) => (
              <View className=" mb-6 flex flex-row shadow-none justify-around items-center bg-purple-50 ">
                <Icon name="music-box-outline" size={64} color="#aaa" />
                <View className="flex-col py-2">
                  <Text variant="bodyLarge" className="font-bold">
                    {item}
                  </Text>
                  <Text variant="bodyLarge" className="text-gray-500">
                    Toplam 3 şarkı
                  </Text>
                </View>
                <Appbar.Action icon="play-outline" size={48} color="#aaa" />
              </View>
            )}
          />
        }
        headerButtons={ListModalButton}
      />
      <MenuCard
        title="En Son"
        bg="#f59e0b"
        text="çalınan"
        icon="history"
        songs={songs}
        modalContent={
          <FlatList
            data={recents}
            renderItem={({ item, index }) => (
              <View className="mb-6 flex flex-row shadow-none justify-around items-center">
                <Text className="text-[16px] mx-2">0{index + 1}</Text>
                <Icon name="music-box-outline" size={64} color="#aaa" />
                <View className="flex-col py-2">
                  <Text variant="bodyLarge" className="font-bold">
                    {item}
                  </Text>
                  <Text variant="bodyLarge" className="text-gray-500">
                    Sanatçı | Albüm
                  </Text>
                </View>
                <View className="flex-row items-center">
                  <SongMenu />
                </View>
              </View>
            )}
          />
        }
        headerButtons={RecentModalButton}
      />
    </View>
  );
};
// screens
const SongsHeader = () => {
  const [visible, setVisible] = useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  return (
    <Appbar.Header className="bg-white">
      <Appbar.Action icon="play-circle" size={48} color="#7e22ce" className="m-0 p-0" onPress={showModal} />
      <Appbar.Content title="Karışık Çal" titleStyle={{ fontSize: 18, fontWeight: "bold" }} onPress={showModal} />
      <SongModal visible={visible} hideModal={hideModal} />
      <SortMenu />
      <Appbar.Action icon="playlist-check" size={28} />
    </Appbar.Header>
  );
};
const SongsContent = () => (
  <FlatList
    // className="bg-white h-[38%]"
    className="bg-white h-[80%]"
    data={songs}
    renderItem={({ item }) => (
      <View className="mb-6 flex flex-row shadow-none justify-between">
        <Icon name="music-box-outline" size={64} color="#aaa" />
        <View className="flex-col py-2">
          <Text variant="bodyLarge" className="font-bold">
            {item}
          </Text>
          <Text variant="bodyLarge" className="text-gray-500">
            Sanatçı | Albüm
          </Text>
        </View>
        <View className="flex-row items-center">
          <Appbar.Action icon="share-outline" size={32} color="#aaa" />
          <SongMenu />
        </View>
      </View>
    )}
    showsVerticalScrollIndicator={false}
  />
);
const SongsScreen = () => {
  return (
    <View>
      <ScreenHeader header={<SongsHeader />} />
      <ScreenContent content={<SongsContent />} />
    </View>
  );
};
const AlbumsHeader = () => {
  return (
    <Appbar.Header className="bg-white">
      <Appbar.Action
        icon="play-circle"
        size={48}
        color="#7e22ce"
        className="m-0 p-0"
        onPress={() => console.log("play !")}
      />
      <Appbar.Content title="Karışık Çal" titleStyle={{ fontSize: 18, fontWeight: "bold" }} />
      <Appbar.Action icon="sort" />
    </Appbar.Header>
  );
};
const AlbumsContent = () => {
  return (
    <FlatList
      data={albums}
      renderItem={({ item }) => (
        <View className="mb-6 flex flex-row shadow-none justify-between">
          <View>
            <Icon name="music-box-outline" size={64} color="#aaa" />
          </View>
          <View className="flex-col py-2">
            <Text variant="bodyLarge" className="font-bold">
              {item}
            </Text>
            <Text variant="bodyLarge" className="text-gray-500">
              Sanatçı
            </Text>
          </View>
          <View className="flex-row items-center">
            <Appbar.Action icon="chevron-right" size={32} color="#aaa" />
          </View>
        </View>
      )}
      showsVerticalScrollIndicator={false}
    />
  );
};
const AlbumsScreen = () => {
  return (
    <View className="flex-1 bg-white">
      <ScreenHeader header={<AlbumsHeader />} />
      <ScreenContent content={<AlbumsContent />} />
    </View>
  );
};
const ArtistsHeader = () => {
  return (
    <Appbar.Header className="bg-white">
      <Appbar.Action
        icon="play-circle"
        size={48}
        color="#7e22ce"
        className="m-0 p-0"
        onPress={() => console.log("play !")}
      />
      <Appbar.Content title="Karışık Çal" titleStyle={{ fontSize: 18, fontWeight: "bold" }} />
    </Appbar.Header>
  );
};
const ArtistsContent = () => {
  return (
    <FlatList
      data={artists}
      renderItem={({ item }) => (
        <View className="m-2 mx-3">
          <Text className="">{item[0]}</Text>
          <Text className="">{item}</Text>
          <Text className="">1 şarkı</Text>
        </View>
      )}
      showsVerticalScrollIndicator={false}
    />
  );
};
const ArtistsScreen = () => {
  return (
    <View className="flex-1 bg-white">
      <ScreenHeader header={<ArtistsHeader />} />
      <ScreenContent content={<ArtistsContent />} />
    </View>
  );
};
const FoldersHeader = () => {
  return (
    <Appbar.Header className="bg-white">
      <Appbar.Action
        icon="play-circle"
        size={48}
        color="#7e22ce"
        className="m-0 p-0"
        onPress={() => console.log("play !")}
      />
      <Appbar.Content title="Karışık Çal" titleStyle={{ fontSize: 18, fontWeight: "bold" }} />
      <Appbar.Action icon="sort" />
    </Appbar.Header>
  );
};
const FoldersContent = () => {
  return (
    <FlatList
      data={folders}
      renderItem={({ item }) => (
        <View className="mb-6 flex flex-row shadow-none justify-between">
          <View className="ml-2">
            <Icon name="folder" size={64} color="#7e22ce" />
          </View>
          <View className="flex-col py-2">
            <Text variant="bodyLarge" className="">
              {item}
            </Text>
            <Text variant="bodyLarge" className="text-gray-500">
              120 şarkı | klasor yolu
            </Text>
          </View>
          <View className="flex-row items-center">
            <Appbar.Action icon="dots-vertical" size={32} color="#aaa" />
          </View>
        </View>
      )}
      showsVerticalScrollIndicator={false}
    />
  );
};
const FoldersScreen = () => {
  return (
    <View className="flex-1 bg-white">
      <ScreenHeader header={<FoldersHeader />} />
      <ScreenContent content={<FoldersContent />} />
    </View>
  );
};
// ----
// reusable
const ScreenContent = ({ content }: { content: JSX.Element }) => {
  return (
    <View>
      {/* //! variable, content */}
      {content}
    </View>
  );
};
const ScreenHeader = ({ header }: { header: JSX.Element }) => {
  return <View>{header}</View>;
};
// screens
const Tab = createMaterialTopTabNavigator();
const LinkNav = () => {
  const screenOptions = { tabBarIndicatorStyle: { backgroundColor: "#7e22ce", height: 4, borderRadius: 5 } };

  return (
    <View className="bg-white flex-1">
      <Text className="font-extrabold text-2xl m-2">Tüm Şarkılar</Text>
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen name="Şarkılar" component={SongsScreen} />
        <Tab.Screen name="Artistler" component={ArtistsScreen} />
        <Tab.Screen name="Albümler" component={AlbumsScreen} />
        <Tab.Screen name="Klasörler" component={FoldersScreen} />
      </Tab.Navigator>
    </View>
  );
};
// reusable
const SongModal = ({ visible, hideModal }: { visible: boolean; hideModal: () => void }) => {
  const containerStyle = { backgroundColor: "#42007B", flex: 1 };

  const containerStyleList = { backgroundColor: "#fff", flex: 1 };

  const [visiblelist, setVisibleList] = useState(false);
  const showModalList = () => setVisibleList(true);
  const hideModalList = () => setVisibleList(false);

  return (
    <Portal>
      <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
        <StatusBar barStyle="default" backgroundColor="#42007B" />
        <View className="container flex-1 justify-center">
          <View className="container flex-1 flex-row absolute top-0 p-2 justify-between items-center">
            <Icon name="chevron-down" size={28} color="#e5e7eb" onPress={hideModal} />
            <Text className="text-lg ml-1 text-gray-300">Şarkı bilgileri</Text>
            <SongInfoMenu />
          </View>
          <View className="justify-center items-center h-[75%]">
            <Icon name="music-box" size={312} color="#a56bd6" />
            <View className="flex w-[80%] gap-y-1">
              <View className="flex-row justify-between">
                <Text className="text-lg font-bold text-gray-200">Şarkı adı</Text>
                <Icon name="heart-outline" size={28} color="#e5e7eb" />
              </View>
              <Text className="text-gray-400">Albüm</Text>
            </View>
            <View className="flex-row mt-8 px-2 justify-center items-center gap-x-6 w-full">
              <FlatList
                horizontal
                data={["shuffle", "skip-previous", "play-circle", "skip-next", "playlist-music"]}
                renderItem={({ item }) => (
                  <View className="gap-x-2 mx-4">
                    <Icon name={item} size={32} color="#e5e7eb" onPress={showModalList} />
                  </View>
                )}
              />
              <Portal>
                <Modal visible={visiblelist} onDismiss={hideModalList} contentContainerStyle={containerStyleList}>
                  <StatusBar barStyle="dark-content" backgroundColor="#fff" />
                  <View className="w-full py-2 flex-row justify-between">
                    <View className="flex-row gap-x-4 ml-2">
                      <Icon name="shuffle" size={32} color="gray" />
                      <Text className="text-lg text-gray-600">Karıştır</Text>
                    </View>
                    <View className="flex-row mr-6 gap-x-4">
                      <Icon name="pencil-outline" size={32} color="gray" />
                      <Icon name="trash-can-outline" size={32} color="gray" />
                    </View>
                  </View>
                  <FlatList
                    data={["ahmet", "mehmet", "veli", "ayşe", "gizem", "hüseyin", "fadime", "emine"]}
                    renderItem={({ item, index }) => (
                      <TouchableOpacity className="flex-row justify-evenly mt-1">
                        <Text className="text-lg m-4">0{index + 1}</Text>
                        <View className="mb-6 flex flex-row shadow-none justify-between">
                          <Icon name="music-box-outline" size={64} color="#aaa" />
                          <View className="flex-col py-2">
                            <Text variant="bodyLarge" className="font-bold">
                              {item}
                            </Text>
                            <Text variant="bodyLarge" className="text-gray-500">
                              Sanatçı | Albüm
                            </Text>
                          </View>
                          <View className="flex-row items-center">
                            <Appbar.Action icon="share-outline" size={32} color="#aaa" />
                            <SongMenu />
                          </View>
                        </View>
                      </TouchableOpacity>
                    )}
                  />
                  <Button
                    mode="contained"
                    className="mb-4 mx-8 items-center bg-gray-200"
                    labelStyle={{ fontSize: 18, color: "#000" }}
                    onPress={hideModalList}
                  >
                    Kapat
                  </Button>
                </Modal>
              </Portal>
            </View>
          </View>
          <View>
            <View className="mx-8 mt-4">
              <ProgressBar progress={0.5} color="#d3d3d3" style={{ backgroundColor: "#7F48AD", height: 2 }} />
            </View>
            <View className="mx-8 mt-2 flex flex-row justify-between">
              <Text className="text-gray-500">0.00</Text>
              <Text className="text-gray-500">4.32</Text>
            </View>
          </View>
          <View />
        </View>
      </Modal>
    </Portal>
  );
};
const BottomNav = () => {
  const [visible, setVisible] = useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  return (
    <View>
      <TouchableOpacity onPress={showModal}>
        <Appbar.Header className="bg-white justify-around border-t-2 border-gray-100">
          <Appbar.Action icon="album" size={64} className="pb-8" />
          <View className="pb-2">
            <Text className="text-lg font-bold">Şarkı adı</Text>
            <Text className="text-sm text-gray-400">Sanatçı</Text>
          </View>
          <View className="flex-row pb-2">
            <Appbar.Action icon="play-circle-outline" size={32} />
            <Appbar.Action icon="skip-next-outline" size={32} />
          </View>
        </Appbar.Header>
      </TouchableOpacity>
      <SongModal visible={visible} hideModal={hideModal} />
    </View>
  );
};
// ///
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
