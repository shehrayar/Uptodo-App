import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import { useFonts } from "expo-font";
import { colors } from "../utils/theme";
function BButtonb({
  title = "title",
  bgColor = colors.primary,
  onButtonPress,
  textcolor = colors.textprimary,
}) {
  const [fontsLoaded] = useFonts({
    lato: require("../../assets/fonts/Lato-Light.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={styles.btnCont} onPress={onButtonPress}>
      <Text
        style={{
          color: colors.textsecondary,
          fontFamily: "lato",
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
