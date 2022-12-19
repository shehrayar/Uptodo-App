import { TouchableOpacity, Text, StyleSheet, View, Image } from "react-native";
import {
  useFonts,
  Lato_400Regular,
  Lato_700Bold,
} from "@expo-google-fonts/lato";
import { colors } from "../utils/theme";
import { Ionicons } from "@expo/vector-icons";
const BButton = ({
  title = "title",
  colorcustom = "blue",
  bgColor = colors.primary,
  onButtonPress,
  imagePath,
  showImagebutton = false,
  onIconPress,
  iconName,
  textcolor = colors.textprimary,
}) => {
  let [fontsLoaded] = useFonts({
    Lato_400Regular,
    Lato_700Bold,
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <View>
      {showImagebutton == true ? (
        <TouchableOpacity
          style={[styles.btnCont, { backgroundColor: colorcustom }]}
          onPress={onButtonPress}
        >
          <Image style={styles.image} source={imagePath} />
          <Text
            style={{
              color: colors.textprimary,
              fontFamily: "Lato_400Regular",
              fontSize: 16,
            }}
          >
            {title}
          </Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={[styles.btnCont, { backgroundColor: colorcustom }]}
          onPress={onButtonPress}
        >
          <Text
            style={{
              color: colors.textprimary,
              fontFamily: "Lato_400Regular",
              fontSize: 16,
            }}
          >
            {title}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};
export { BButton };

const BButtondesign = ({
  title = "title",
  bgColor = colors.primary,
  textcolor = colors.textprimary,
}) => {
  let [fontsLoaded] = useFonts({
    Lato_400Regular,
    Lato_700Bold,
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={[styles.btnConta, { backgroundColor: colors.primary }]}>
      <Text
        style={{
          color: colors.textprimary,
          fontFamily: "Lato_400Regular",
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
  let [fontsLoaded] = useFonts({
    Lato_400Regular,
    Lato_700Bold,
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
            fontFamily: "Lato_400Regular",
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
  image: {
    height: 25,
    width: 25,
    margin: 8,
    alignSelf: "center",
  },
  btnCont: {
    height: 48,
    width: 350,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: colors.primary,
    margin: 15,
    flexDirection: "row",
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
