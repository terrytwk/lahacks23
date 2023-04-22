import { View, Text } from "react-native";

import SafeView from "../../components/SafeView";
import CustomButton from "../../components/CustomButton";

const Signup = ({ navigation }) => {
  return (
    <SafeView>
      <Text>Signup</Text>
      <CustomButton
        title="go to login"
        onPress={() => navigation.navigate("Login")}
      />
    </SafeView>
  );
};

export default Signup;
