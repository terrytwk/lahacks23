import { useContext } from "react";
import { View, Text, Button } from "react-native";

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
