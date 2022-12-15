import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import {
  BButton,
  BButtondesign,
  BButtondesignb,
} from "../components/custombuttona";
import { BButtonb } from "../components/custombuttonb";
import { Header, HeaderRegular } from "../components/header";
import { colors } from "../utils/theme";
import React, { useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  Alert,
} from "react-native";

//import AppIntroSlider to use it
import AppIntroSlider from "react-native-app-intro-slider";
const Intro = ({ navigation }) => {
  const [display, setDisplay] = useState(false);
  const onDone = () => {
    navigation.navigate("WelcomeScreen");
  };
  const onSkip = () => {
    navigation.navigate("WelcomeScreen");
  };
  const renderNextButton = () => {
    return <BButtondesign title={"NEXT"} />;
  };
  const renderSkipButton = () => {
    return <BButtonb title={"SKIP"} onButtonPress={onSkip} />;
  };
  const renderDoneButton = () => {
    return <BButtondesignb title={"GET STARTED"} onButtonPress={onDone} />;
  };

  const slides = [
    {
      key: 1,
      title: "Manage your tasks",
      text: "You can easily manage all of your daily \n                 tasks in DoMe for free",
      image: require("D:/android studio/android projects/to-do/assets/introimages/1.jpg"),
      backgroundColor: colors.bgColor,
    },
    {
      key: 2,
      title: "Create daily routine",
      text: "           In Uptodo  you can create your \n personalized routine to stay productive",
      image: require("D:/android studio/android projects/to-do/assets/introimages/2.jpg"),
      backgroundColor: colors.bgColor,
    },
    {
      key: 3,
      title: "Orgonaize your tasks",
      text: "         You can organize your daily tasks by \n adding your tasks into separate categories",
      image: require("D:/android studio/android projects/to-do/assets/introimages/3.jpg"),
      backgroundColor: colors.bgColor,
    },
  ];

  const RenderItem = ({ item }) => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: item.backgroundColor,
          alignItems: "center",
          justifyContent: "space-around",
          paddingBottom: 100,
        }}
      >
        <Image style={styles.introImageStyle} source={item.image} />
        <Header title={item.title} />
        <HeaderRegular title={item.text} />
      </View>
    );
  };
  const gotoWelcome = () => {
    navigation.navigate("WelcomeScreen");
  };
  return (
    <AppIntroSlider
      data={slides}
      renderItem={RenderItem}
      showSkipButton={true}
      onSkip={onSkip}
      renderNextButton={renderNextButton}
      renderSkipButton={renderSkipButton}
      renderDoneButton={renderDoneButton}
      onDone={onDone}
      dotStyle={{ backgroundColor: "rgba(255,255,255,0.3)" }}
    />
  );
};

export default Intro;

const styles = StyleSheet.create({
  maincont: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: colors.bgColor,
    paddingHorizontal: 10,
    justifyContent: "center",
  },

  introImageStyle: {
    flex: 0.6,
    width: 300,
    height: 300,
    resizeMode: "contain",
  },
  introTextStyle: {
    fontSize: 18,
    color: "white",
    textAlign: "center",
    paddingVertical: 30,
  },
  introTitleStyle: {
    fontSize: 25,
    color: "white",
    textAlign: "center",
    marginBottom: 16,
    fontWeight: "bold",
  },
});
