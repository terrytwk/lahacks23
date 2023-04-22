import { useContext, useEffect, useState } from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import * as SplashScreen from "expo-splash-screen";

// import context
// import { Context as AuthContext } from "../context/AuthContext";
import { Context as AuthContext } from "../context/AuthContext";

// import navigators
import AuthStackNavigator from "./AuthStackNavigator";
import MainBottomTabNavigator from "./MainBottomTabNavigator";

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

const Router = () => {
  const { state, tryLocalSignin } = useContext(AuthContext);

  const [appIsReady, setAppIsReady] = useState(false);

  const navTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: "#fff",
    },
  };

  useEffect(() => {
    const prepare = async () => {
      try {
        await tryLocalSignin();
        // setTimeout(() => {
        //   console.log("Trying auto-signin.");
        // }, 2000);
      } catch (err) {
        alert("Error occurred with auto sign in");
      } finally {
        setAppIsReady(true);
        await SplashScreen.hideAsync();
      }
    };

    prepare();
  }, []);

  return (
    <NavigationContainer theme={navTheme}>
      {state.token ? <MainBottomTabNavigator /> : <AuthStackNavigator />}
    </NavigationContainer>
  );
};

export default Router;
