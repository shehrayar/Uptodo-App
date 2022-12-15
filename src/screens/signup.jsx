import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

function SignUp({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Signupp</Text>
      <StatusBar style="auto" />
    </View>
  );
}
export default SignUp;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
