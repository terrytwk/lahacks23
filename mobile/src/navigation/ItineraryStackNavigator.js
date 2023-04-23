import { createStackNavigator } from "@react-navigation/stack";

// import screens
import Itinerary from "../screens/main/Itinerary";
import MainBottomTabNavigator from "./MainBottomTabNavigator";

const AuthStack = createStackNavigator();

const AuthStackNavigator = () => {
  return (
    <AuthStack.Navigator
      initialRouteName="MainBottomTab"
      screenOptions={{ headerShown: false }}
    >
      <AuthStack.Screen
        name="MainBottomTab"
        component={MainBottomTabNavigator}
      />
      <AuthStack.Screen name="Itinerary" component={Itinerary} />
    </AuthStack.Navigator>
  );
};

export default AuthStackNavigator;
