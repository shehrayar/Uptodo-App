import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import {
  BButton,
  BButtondesign,
  BButtondesignb,
} from "../components/custombuttona";
import { RightIcon } from "../components/icon";
import { BButtonb } from "../components/custombuttonb";
import { Header, HeaderRegular } from "../components/header";
import { colors } from "../utils/theme";
import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  Button,
} from "react-native";

//import AppIntroSlider to use it
import AppIntroSlider from "react-native-app-intro-slider";

function WelcomeScreen({ navigation }) {
  const gotoIntro = () => {
    navigation.navigate("Intro");
  };
  const gotoLogin = () => {
    navigation.navigate("LogIn");
  };
  const gotoSignup = () => {
    navigation.navigate("SignUp");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flex: 0.1,
        }}
      >
        <RightIcon onButtonPress={gotoIntro} />
      </View>
      <View
        style={{
          flex: 0.6,
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        <Header title={"Welcome to UpTodo "} marginCustom={25} />
        <HeaderRegular
          title={
            "  Please login to your account or create new \n\t\t\t\t\t\t\t\t\t\t\t account to continue"
          }
        />
      </View>
      <View style={{ flex: 0.2 }}>
        <BButton
          title="LOGIN"
          colorcustom={colors.primary}
          onButtonPress={gotoLogin}
        />
        <BButton
          title="CREATE ACCOUNT"
          colorcustom={colors.transparent}
          onButtonPress={gotoSignup}
        />
      </View>
    </SafeAreaView>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  maincont: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: colors.bgColor,
    paddingHorizontal: 8,
    justifyContent: "center",
  },
  titleStyle: {
    padding: 10,
    color: colors.textprimary,
    textAlign: "center",
    fontSize: 32,
    fontWeight: "bold",
  },
  paragraphStyle: {
    padding: 10,
    color: colors.textsecondary,
    textAlign: "center",
    fontSize: 16,
    flex: 0.1,
  },
});
