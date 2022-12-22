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

function LogIn({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  return (
    <KeyboardAvoidingView style={styles.container} behavior="height">
      <ScrollView>
        <SafeAreaView>
          <View style={{ marginHorizontal: modifiers.itemMargin }}>
            <View
              style={{
                flex: 0.2,
                justifyContent: "flex-end",
              }}
            >
              <RightIcon
                onButtonPress={() => {
                  navigation.navigate("WelcomeScreen");
                }}
              />
              <Header title={"Login"} marginCustom={25} />
            </View>
            <View style={{ flex: 0.4, justifyContent: "center" }}>
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
            </View>
            <View style={{ flex: 0.4 }}>
              <BButton
                title="Login"
                colorcustom={colors.primary}
                onButtonPress={() => {
                  navigation.navigate("Homes");
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
                title="Login with Google"
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
                <Text style={styles.textTwo}>Don't have an account? </Text>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("SignUp");
                  }}
                >
                  <Text style={{ color: colors.textprimary }}>Register</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </SafeAreaView>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
export default LogIn;

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
