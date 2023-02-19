import { View } from "react-native";

type ScreenHeaderProps = { header: JSX.Element };

export const ScreenHeader = ({ header }: ScreenHeaderProps) => {
  return <View>{header}</View>;
};
