import { View, TextInput, StyleSheet } from "react-native";

import colors from "../theme/colors";

const Input = ({ value, setValue, placeholder }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChange={(t) => setValue(t)}
        autoCapitalize="none"
        keyboardType={placeholder === "Email" ? "email-address" : null}
        secureTextEntry={placeholder === "Password"}
      >
        Input
      </TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 5,
    padding: 5,
    alignItems: "center",
    width: "80%",
    height: 50,
    justifyContent: "center",
    backgroundColor: "white",
    marginBottom: 10,
  },
  input: {
    width: "100%",
    marginLeft: 10,
  },
});

export default Input;
