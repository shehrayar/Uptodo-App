import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import {
  useFonts,
  Lato_400Regular,
  Lato_700Bold,
} from "@expo-google-fonts/lato";
import { colors } from "../utils/theme";
function BButtonb({
  title = "title",
  bgColor = colors.primary,
  onButtonPress,
  textcolor = colors.textprimary,
}) {
  let [fontsLoaded] = useFonts({
    Lato_400Regular,
    Lato_700Bold,
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={styles.btnCont} onPress={onButtonPress}>
      <Text
        style={{
          color: colors.textsecondary,
          fontFamily: "Lato_400Regular",
          fontSize: 16,
        }}
      >
        {title}
      </Text>
    </View>
  );
}
export { BButtonb };
const styles = StyleSheet.create({
  btnCont: {
    marginTop: 16,
    marginLeft: 20,
  },
});
