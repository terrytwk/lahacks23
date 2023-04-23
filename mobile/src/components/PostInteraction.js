import { useState } from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { Ionicons, EvilIcons } from "@expo/vector-icons";

import colors from "../theme/colors";

const PostInteraction = ({
  icon_name = "share",
  active,
  navigation,
  count,
}) => {
  const [flyState, setFlyState] = useState(active);

  const onClick = () => {
    if (icon_name.includes("hop")) {
      setFlyState(!flyState);
    } else if (icon_name == "share") {
      navigation.navigate("Itinerary");
    }
  };

  const icons = {
    hop: flyState ? (
      <Ionicons name="md-airplane" size={26} color="black" />
    ) : (
      <Ionicons name="md-airplane-outline" size={26} color="black" />
    ),
    share: <Ionicons name="share-social-outline" size={26} color="black" />,
    comment: <EvilIcons name="comment" size={26} color="black" />,
  };
  return (
    <TouchableOpacity style={styles.container} onPress={onClick}>
      {icons[icon_name]}
      <Text style={styles.number}>{count}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    width: 30,
  },
  number: {
    fontSize: 12,
    color: colors.textTernary,
  },
});

export default PostInteraction;
