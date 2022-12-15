import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

function LogIn({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Loginnnn!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
export default LogIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
