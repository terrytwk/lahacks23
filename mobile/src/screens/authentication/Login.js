import { useContext, useState } from "react";
import { Text, StyleSheet, Image } from "react-native";

import SafeView from "../../components/SafeView";
import CustomButton from "../../components/CustomButton";
import Input from "../../components/Input";
import OAuth from "../../components/OAuth";

// context
import { Context as AuthContext } from "../../context/AuthContext";

import colors from "../../theme/colors";

const Login = ({ navigation }) => {
  const { login } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async () => {
    const response = await login({ email, password });
    console.log(response);
  };

  return (
    <SafeView style={styles.container}>
      <Image
        source={require("../../../assets/orange-icon.png")}
        style={styles.image}
      />
      <Input placeholder="Email" value={email} setValue={setEmail} />
      <Input placeholder="Password" value={password} setValue={setPassword} />
      <Text style={styles.forgotPassword}>Forgot password</Text>
      <CustomButton title="LOG IN" onPress={onSubmit} style={styles.button} />
      <Text>
        Don't have an account?{" "}
        <Text style={{ color: colors.primary }}>Sign up</Text>
      </Text>
      <OAuth />
    </SafeView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    height: 200,
    width: 200,
  },
  button: {
    marginTop: 10,
    marginBottom: 5,
  },
  forgotPassword: {
    alignSelf: "flex-end",
    marginRight: "10%",
    color: colors.primary,
  },
});

export default Login;
