import { ScrollView, View, Text, StyleSheet } from "react-native";

import colors from "../theme/colors";

const TagContainer = () => {
  const tags = ["Los Angeles", "San Diego", "Nature", "Food", "Sports"];
  return (
    <ScrollView
      horizontal
      style={styles.scrollView}
      showsHorizontalScrollIndicator={false}
      contentInset={{ right: 15, top: 0, left: 15, bottom: 0 }}
    >
      {tags.map((t, i) => (
        <Tag key={i} title={t} />
      ))}
    </ScrollView>
  );
};

const Tag = ({ title }) => {
  return (
    <View style={styles.tagContainer}>
      <Text style={styles.tagText}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    marginTop: 7,
  },
  tagContainer: {
    borderWidth: 1.5,
    borderColor: colors.border,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 5,
    paddingHorizontal: 10,
    alignSelf: "flex-start",
    marginLeft: 5,
  },
  tagText: {
    // color: colors.textPrimary,
  },
});

export default TagContainer;
