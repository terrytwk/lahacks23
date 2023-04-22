import { Text, TouchableOpacity, View, StyleSheet, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import colors from "../theme/colors";

// import screens
import Feed from "../screens/main/Feed";
import Explore from "../screens/main/Explore";
import Profile from "../screens/main/Profile";

const MainTab = createBottomTabNavigator();

// const LogoTitle = () => {
//   return (
//     // <Image
//     //   style={styles.headerTitleStyle}
//     //   source={require("../../assets/title-logo.png")}
//     // />
//     <Text>Header</Text>
//   );
// };

const ScanTab = ({ iconName }) => {
  return (
    <View style={styles.scanContainer}>
      <Ionicons name={iconName} size={26} color="white" />
    </View>
  );
};

const HeaderNotification = ({ navigation }) => {
  return (
    <TouchableOpacity
      style={styles.notificationIcon}
      onPress={() => navigation.navigate("Notifications")}
    >
      <View style={styles.notificationBadge}></View>
      <Ionicons name="notifications-outline" color="white" size={20} />
    </TouchableOpacity>
  );
};

const TabNavigatorOptions = ({ navigation, route }) => ({
  tabBarIcon: ({ focused, color, size = 25 }) => {
    let iconName;

    if (route.name === "Feed") {
      iconName = focused ? "home" : "home-outline";
    } else if (route.name === "Explore") {
      iconName = focused ? "compass" : "compass-outline";
    } else if (route.name === "Profile") {
      iconName = focused ? "person-circle" : "person-circle-outline";
    }

    return route.name === "Scan" ? (
      <ScanTab iconName={iconName} />
    ) : (
      <Ionicons name={iconName} size={size} color={color} />
    );
  },
  tabBarActiveTintColor: colors.primary,
  tabBarInactiveTintColor: "gray",
  //headerShown: false
  // headerStyle: styles.headerStyle,
  // headerRight: () => <HeaderNotification navigation={navigation} />,
  // headerTitle: () => <LogoTitle />,
});

function MainBottomTabNavigator() {
  return (
    <MainTab.Navigator
      initialRouteName="Event"
      screenOptions={TabNavigatorOptions}
    >
      <MainTab.Screen name="Feed" component={Feed} />
      <MainTab.Screen name="Explore" component={Explore} />
      <MainTab.Screen name="Profile" component={Profile} />
    </MainTab.Navigator>
  );
}

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: colors.primary,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  headerTitleStyle: {
    height: 45,
    aspectRatio: 308 / 115,
  },
  scanContainer: {
    backgroundColor: colors.primary,
    borderRadius: 100,
    width: 60,
    height: 60,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 30,
  },
  notificationIcon: {
    backgroundColor: colors.primaryLight,
    borderRadius: 500,
    padding: 5,
    marginRight: 30,
  },
  notificationBadge: {
    position: "absolute",
    zIndex: 999,
    top: 7,
    left: 15,
    width: 10,
    height: 10,
    backgroundColor: colors.primaryLightest,
    borderColor: colors.primary,
    borderWidth: 2,
    borderRadius: 100,
  },
});

export default MainBottomTabNavigator;
