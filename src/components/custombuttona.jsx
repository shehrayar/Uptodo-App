import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import { useFonts } from "expo-font";
import { colors } from "../utils/theme";

const BButton = ({
  title = "title",
  colorcustom = "blue",
  bgColor = colors.primary,
  onButtonPress,
  textcolor = colors.textprimary,
}) => {
  const [fontsLoaded] = useFonts({
    lato: require("../../assets/fonts/Lato-Light.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <View>
      <TouchableOpacity
        style={[styles.btnCont, { backgroundColor: colorcustom }]}
        onPress={onButtonPress}
      >
        <Text
          style={{
            color: colors.textprimary,
            fontFamily: "lato",
            fontSize: 16,
          }}
        >
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
export { BButton };

const BButtondesign = ({
  title = "title",
  bgColor = colors.primary,
  textcolor = colors.textprimary,
}) => {
  const [fontsLoaded] = useFonts({
    lato: require("../../assets/fonts/Lato-Light.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={[styles.btnConta, { backgroundColor: colors.primary }]}>
      <Text
        style={{
          color: colors.textprimary,
          fontFamily: "lato",
          fontSize: 16,
        }}
      >
        {title}
      </Text>
    </View>
  );
};
export { BButtondesign };

const BButtondesignb = ({
  title = "title",
  bgColor = colors.primary,
  textcolor = colors.textprimary,
  onButtonPress,
}) => {
  const [fontsLoaded] = useFonts({
    lato: require("../../assets/fonts/Lato-Light.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <TouchableOpacity onPress={onButtonPress}>
      <View style={[styles.btnContb, { backgroundColor: colors.primary }]}>
        <Text
          style={{
            color: colors.textprimary,
            fontFamily: "lato",
            fontSize: 16,
          }}
        >
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
export { BButtondesignb };
const styles = StyleSheet.create({
  btnCont: {
    height: 48,
    width: 350,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: colors.primary,
    margin: 15,
  },
  btnConta: {
    height: 48,
    width: 90,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 14,
  },
  btnContb: {
    height: 48,
    width: 130,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 14,
  },
});
