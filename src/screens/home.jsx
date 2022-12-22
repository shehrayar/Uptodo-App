import { View, Text, StyleSheet, SafeAreaView, Image } from "react-native";
import { colors } from "../utils/theme";
import { FontAwesome } from "@expo/vector-icons";
import { HeaderRegular } from "../components/header";
function Home({ navigation }) {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.first}>
        <View
          style={{
            width: "58%",
            alignItems: "flex-end",
          }}
        >
          <HeaderRegular title={"Home"} fontsize={24} />
        </View>
        <View style={styles.pickImgCircle}>
          <FontAwesome name="user" size={30} color="white" />
        </View>
      </View>
      <View style={styles.second}>
        <Image
          style={{ height: 250, width: 250 }}
          source={require("../../assets/homeimage/Checklisthome.png")}
        />
        <HeaderRegular title={"What do you want to do Today?"} fontsize={20} />
        <HeaderRegular title={"Tap + to add your tasks"} fontsize={15} />
      </View>
      <View style={styles.third}></View>
    </SafeAreaView>
  );
}
export default Home;
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,

    backgroundColor: colors.bgColor,
  },
  first: {
    flex: 0.1,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
    marginRight: 12,
    justifyContent: "space-between",
  },
  second: {
    flex: 0.6,
    alignItems: "center",
    marginTop: 50,
    backgroundColor: colors.bgColor,
  },
  third: {
    flex: 0.3,
    backgroundColor: colors.bgColor,
  },
  pickImgCircle: {
    backgroundColor: colors.primary,
    height: 45,
    width: 45,
    borderRadius: 50,

    marginTop: 10,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
});
