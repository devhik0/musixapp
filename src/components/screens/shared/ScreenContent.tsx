import { View } from "react-native";

type TScreenContentProps = { content: JSX.Element };
// reusable 4 ref
export const ScreenContent = ({ content }: TScreenContentProps) => {
  return (
    <View>
      {/* //! variable, content */}
      {content}
    </View>
  );
};
