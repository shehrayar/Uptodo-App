import { TextInput, View, StyleSheet } from "react-native";
import { modifiers, colors } from "../utils/theme";
import { Ionicons } from "@expo/vector-icons";
function Input({
  placeholder,
  isSecure,
  onChange,
  iconName = iconName,
  onIconPress,
  showIcon,
}) {
  return (
    <View style={styles.inputcont}>
      <TextInput
        style={styles.input}
        color={colors.textprimary}
        placeholder={placeholder}
        placeholderTextColor={colors.placeholderTextColors}
        onChangeText={onChange}
        secureTextEntry={isSecure}
      />

      {showIcon == true ? (
        <Ionicons
          style={styles.icon}
          name={iconName}
          color={colors.primary}
          size={20}
          onPress={onIconPress}
        />
      ) : (
        <View />
      )}
    </View>
  );
}
export { Input };
const styles = StyleSheet.create({
  inputcont: {
    paddingHorizontal: modifiers.containerPadding,
    height: 70,
    backgroundColor: colors.inputBgColor,
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: "white",
    margin: modifiers.itemMargin,
    flexDirection: "row",
  },
  input: {
    width: "95%",
  },
  icon: {
    alignSelf: "center",
  },
});
