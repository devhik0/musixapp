import { View } from "react-native";

type TScreenHeaderProps = { header: JSX.Element };
// 4 ref
export const ScreenHeader = ({ header }: TScreenHeaderProps) => {
  return <View>{header}</View>;
};
