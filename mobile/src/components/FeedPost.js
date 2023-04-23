import { View, Text, StyleSheet } from "react-native";

import PostInteraction from "./PostInteraction";

const FeedPost = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}></View>
      <Text style={styles.title}>FeedPost</Text>
      <Text style={styles.location}>location</Text>
      <Text style={styles.location}>date</Text>
      <PostInteraction navigation={navigation} icon_name="hop" count={62} />
      <PostInteraction navigation={navigation} icon_name="share" count={250} />
      <PostInteraction navigation={navigation} icon_name="comment" count={18} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  imageContainer: {},
  title: {},
});

export default FeedPost;
