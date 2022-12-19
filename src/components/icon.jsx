import { View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
function RightIcon({ onButtonPress }) {
  return (
    <Ionicons
      style={{
        marginLeft: 1,
        marginTop: 40,
      }}
      name="md-chevron-back-outline"
      size={32}
      color="white"
      onPress={onButtonPress}
    />
  );
}
export { RightIcon };
