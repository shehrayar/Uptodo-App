import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Intro from "../screens/intro";
import { colors } from "../utils/theme";
import WelcomeScreen from "../screens/welcomescreen";
import LogIn from "../screens/login";
import SignUp from "../screens/signup";
import Home from "../screens/home";
import Focus from "../screens/focus";
import Profile from "../screens/profile";
import Calender from "../screens/calender";
import { Ionicons } from "@expo/vector-icons";
import { Image, View, StyleSheet, TouchableOpacity } from "react-native";
const Homenav = () => {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  const iconSize = 25;

  const Homes = () => (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: {
          paddingBottom: 5,
          height: "9.5%",
          bottom: 10,
          borderTopWidth: 0,
          left: 15,
          right: 15,
          elevation: 0,
          position: "absolute",
          borderRadius: 6,
          backgroundColor: colors.tabcolor,
        },
        tabBarIcon: ({ focused }) => (
          <Ionicons
            name={
              route.name === "Home"
                ? "home"
                : route.name === "Calender"
                ? "calendar"
                : route.name === "Focus"
                ? "logo-ionic"
                : route.name === "Addition"
                ? "add-circle-outline"
                : "person"
            }
            color={focused ? colors.primary : colors.textprimary}
            size={route.name === "Addition" ? 45 : iconSize}
          />
        ),
      })}
    >
      <Tab.Screen
        options={{ headerShown: false }}
        name={"Home"}
        component={Home}
      />
      <Tab.Screen name={"Calender"} component={Calender} />
      <Tab.Screen
        name={" "}
        component={Focus}
        options={{
          tabBarIcon: ({ focused }) => (
            <TouchableOpacity>
              <View style={styles.pickImgCircle}>
                <Ionicons
                  style={{ marginLeft: 3 }}
                  name="add-sharp"
                  size={35}
                  color="white"
                />
              </View>
            </TouchableOpacity>
          ),
        }}
      />
      <Tab.Screen name={"Focus"} component={Focus} />
      <Tab.Screen name={"Profile"} component={Profile} />
    </Tab.Navigator>
  );
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Intro" component={Intro} />
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="LogIn" component={LogIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Homes" component={Homes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Homenav;

const styles = StyleSheet.create({
  pickImgCircle: {
    backgroundColor: colors.primary,
    height: 50,
    width: 50,
    top: 6,
    borderRadius: 50,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
});
