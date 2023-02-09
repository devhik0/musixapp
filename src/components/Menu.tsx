import React from "react";
import { View } from "react-native";
import { Card, Text } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export function Menu({}) {
  return (
    <View className="bg-white flex-row gap-x-3 p-4 justify-center ">
      <Card className="w-1/4 mr-3 bg-purple-700">
        <Card.Content className="flex flex-col justify-start">
          <Icon name="heart" size={20} color="white" />
          <Text variant="bodyLarge" className="text-white">
            Favoriler
          </Text>
        </Card.Content>
      </Card>
      <Card className="w-1/4 mr-3 bg-teal-700">
        <Card.Content className="flex flex-col justify-start">
          <Icon name="playlist-music" size={20} color="white" />
          <Text variant="bodyLarge" className="text-white">
            Listeler
          </Text>
        </Card.Content>
      </Card>
      <Card className="w-1/4 mr-3 bg-amber-500">
        <Card.Content className="flex flex-col justify-start">
          <Icon name="history" size={20} color="white" />
          <Text variant="bodyLarge" className="text-white">
            En Son
          </Text>
        </Card.Content>
      </Card>
    </View>
  );
}
