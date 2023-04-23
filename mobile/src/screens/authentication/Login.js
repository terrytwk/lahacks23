import { useContext, useEffect, useState } from "react";
import { View, Text, Button, StyleSheet, Image } from "react-native";
import { Client, Account, ID } from "appwrite";

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
    const err = await login({ email: "hello@gmail.com", password: "" });
    console.log(err);
  };

  // ONLY WORKS on emulator not actual device

  // useEffect(() => {
  //   const client = new Client()
  //     .setEndpoint("http://localhost/v1") // Your API Endpoint
  //     .setProject("64445cc575c41d8867c3"); // Your project ID

  //   const account = new Account(client);

  //   // Register User
  //   account
  //     .create(ID.unique(), "me3@example.com", "password3", "3Jane Doe")
  //     .then(
  //       (response) => {
  //         console.log(response);
  //       },
  //       (error) => {
  //         console.log(error);
  //       }
  //     );
  // }, []);

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
