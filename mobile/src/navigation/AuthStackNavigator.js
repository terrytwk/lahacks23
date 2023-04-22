import { createStackNavigator } from "@react-navigation/stack";

// import screens
import Login from "../screens/authentication/Login";
import Signup from "../screens/authentication/Signup";

const AuthStack = createStackNavigator();

const AuthStackNavigator = () => {
  return (
    <AuthStack.Navigator
      initialRouteName="Login"
      screenOptions={{ headerShown: false }}
    >
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="Signup" component={Signup} />
    </AuthStack.Navigator>
  );
};

export default AuthStackNavigator;
