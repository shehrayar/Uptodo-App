import { colors } from "../utils/theme";
import { Text } from "react-native";
import { useState } from "react";
import {
  useFonts,
  Lato_400Regular,
  Lato_700Bold,
} from "@expo-google-fonts/lato";
function Header({ title, marginCustom }) {
  let [fontsLoaded] = useFonts({
    Lato_400Regular,
    Lato_700Bold,
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <Text
      style={{
        color: colors.textprimary,
        fontFamily: "Lato_700Bold",
        fontSize: 36,
        // fontWeight: "bold",
        marginLeft: 10,
        marginTop: marginCustom,
      }}
    >
      {title}
    </Text>
  );
}
export { Header };
function HeaderRegular({ title }) {
  let [fontsLoaded] = useFonts({
    Lato_400Regular,
    Lato_700Bold,
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <Text
      style={{
        color: colors.textsecondary,
        fontFamily: "Lato_400Regular",
        fontSize: 16,
        marginLeft: 10,
        marginTop: 15,
      }}
    >
      {title}
    </Text>
  );
}
export { HeaderRegular };
