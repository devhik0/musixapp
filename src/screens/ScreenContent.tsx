import { View } from "react-native";

type ScreenContentProps = { content: JSX.Element };

export const ScreenContent = ({ content }: ScreenContentProps) => {
  return (
    <View>
      {/* //! variable, content */}
      {content}
    </View>
  );
};
