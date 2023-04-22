import { View, Button, StyleSheet } from "react-native";
import colors from "../theme/colors";

const CustomButton = ({
  onPress,
  title = "",
  color,
  containerStyle = {},
  buttonStyle = {},
}) => {
  return (
    <View style={{ ...styles.container, ...containerStyle }}>
      <Button
        style={{ ...styles.button, ...buttonStyle }}
        onPress={onPress}
        title={title}
        color={color || colors.primary}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  button: {},
});

export default CustomButton;
