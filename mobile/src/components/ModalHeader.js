import { View, Text, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

// import theme
import colors from "../theme/colors";

const ModalHeader = ({ title, setModalVisible }) => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <AntDesign
          name="close"
          size={24}
          color={colors.textSecondary}
          onPress={() => setModalVisible(false)}
        />
      </View>
      <View style={styles.divider}></View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 20,
  },
  divider: {
    width: "100%",
    borderWidth: 0.5,
    borderColor: colors.border,
    marginTop: 10,
    marginBottom: 10,
  },
});
export default ModalHeader;
