import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import colors from "../theme/colors";

const CustomButton = ({ onPress, title = "", style = {} }) => {
  return (
    <TouchableOpacity
      style={{ ...styles.buttonStyle, ...style }}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: colors.primary,
    width: "80%",
    height: 40,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontWeight: 600,
  },
});

export default CustomButton;
