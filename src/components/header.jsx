import { colors } from "../utils/theme";
import { Text } from "react-native";
import { useFonts } from "expo-font";
function Header({ title }) {
  const [fontsLoaded] = useFonts({
    lato: require("../../assets/fonts/Lato-Light.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <Text
      style={{
        color: colors.textprimary,
        fontFamily: "lato",
        fontSize: 32,
        fontWeight: "bold",
      }}
    >
      {title}
    </Text>
  );
}
export { Header };
function HeaderRegular({ title }) {
  const [fontsLoaded] = useFonts({
    lato: require("../../assets/fonts/Lato-Light.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <Text
      style={{
        color: colors.textsecondary,
        fontFamily: "lato",
        fontSize: 16,
      }}
    >
      {title}
    </Text>
  );
}
export { HeaderRegular };
