import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { colors, modifiers } from "../utils/theme";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import { Input } from "../components/input";
import { Header } from "../components/header";
import { RightIcon } from "../components/icon";
import {
  BButton,
  BButtondesign,
  BButtondesignb,
} from "../components/custombuttona";

function SignUp({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Confirmpassword, setConfirmPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  return (
    <KeyboardAvoidingView style={styles.container} behavior="height">
      <ScrollView>
        <SafeAreaView style={styles.container}>
          <View style={{ marginHorizontal: modifiers.itemMargin }}>
            <View
              style={{
                flex: 0.12,
                justifyContent: "flex-end",
              }}
            >
              <RightIcon
                onButtonPress={() => {
                  navigation.navigate("WelcomeScreen");
                }}
              />
              <Header title={"Register"} marginCustom={15} />
            </View>

            <View style={{ flex: 0.53, justifyContent: "center" }}>
              <Text style={styles.text}>Username</Text>
              <Input
                placeholder={"Enter your Email"}
                isSecure={false}
                onChange={setEmail}
                iconName={"mail-outline"}
                showIcon={true}
              />
              <Text style={styles.text}>Password</Text>
              <Input
                placeholder={"Enter your Password"}
                isSecure={false}
                onChange={setPassword}
                iconName={"eye-outline"}
                showIcon={true}
              />
              <Text style={styles.text}>Confirm Password</Text>
              <Input
                placeholder={"Enter your Password again"}
                isSecure={false}
                onChange={setConfirmPassword}
                iconName={"eye-outline"}
                showIcon={true}
              />
            </View>

            <View style={{ flex: 0.3 }}>
              <BButton
                title="Register"
                colorcustom={colors.primary}
                onButtonPress={() => {
                  navigation.navigate("LogIn");
                }}
              />
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginVertical: 10,
                }}
              >
                <View
                  style={{
                    marginLeft: 15,
                    flex: 1,
                    height: 1,
                    backgroundColor: colors.textsecondary,
                  }}
                />
                <View>
                  <Text
                    style={{ textAlign: "center", color: colors.textsecondary }}
                  >
                    Or
                  </Text>
                </View>
                <View
                  style={{
                    marginRight: 15,
                    flex: 1,
                    height: 1,
                    backgroundColor: colors.textsecondary,
                  }}
                />
              </View>
              <BButton
                title="Register with Google"
                colorcustom={colors.transparent}
                showImagebutton={true}
                imagePath={require("../../assets/icongoogle.png")}
                // onButtonPress={gotoSignup}
              />
              <View
                style={{
                  flexDirection: "row",
                  alignSelf: "center",
                  marginTop: 30,
                }}
              >
                <Text style={styles.textTwo}>Already have an account? </Text>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("LogIn");
                  }}
                >
                  <Text style={{ color: colors.textprimary }}>Login</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </SafeAreaView>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bgColor,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    marginTop: 10,
    marginLeft: 12,
    color: colors.textprimary,
  },
  textOne: {
    margin: 10,
    color: colors.textprimary,
  },
  textTwo: {
    color: colors.textsecondary,
    alignSelf: "center",
  },
});
