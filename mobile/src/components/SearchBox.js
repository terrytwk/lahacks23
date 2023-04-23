import { View, Text, TextInput, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import colors from "../theme/colors";

const SearchBox = () => {
  return (
    <View style={styles.container}>
      <Ionicons
        name="search"
        size={18}
        color={colors.textTernary}
        style={styles.icon}
      />
      <TextInput style={styles.input} placeholder="Search" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.border,
    flexDirection: "row",
    marginHorizontal: 15,
    borderRadius: 5,
    height: 30,
    alignItems: "center",
  },
  icon: {
    marginLeft: 5,
  },
  input: {
    flex: 1,
    marginLeft: 5,
    marginRight: 10,
  },
});

export default SearchBox;
