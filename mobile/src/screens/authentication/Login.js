import { useContext, useEffect } from "react";
import { View, Text, Button } from "react-native";
import { Client, Account, ID } from "appwrite";

import SafeView from "../../components/SafeView";
import CustomButton from "../../components/CustomButton";

// context
import { Context as AuthContext } from "../../context/AuthContext";

const Login = ({ navigation }) => {
  const { login } = useContext(AuthContext);

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
    <SafeView>
      <Text>Login</Text>
      <CustomButton
        title="signup"
        onPress={() => navigation.navigate("Signup")}
      />
      <CustomButton title="Go to Feed" onPress={onSubmit} />
    </SafeView>
  );
};

export default Login;
