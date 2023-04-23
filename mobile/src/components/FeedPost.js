import { View, Text, StyleSheet, Image } from "react-native";
import { MaterialCommunityIcons, FontAwesome } from "@expo/vector-icons";

import PostInteraction from "./PostInteraction";
import ItineraryCard from "./ItineraryCard";

const FeedPost = ({ navigation, post }) => {
  return (
    <View style={styles.container}>
      <PostHeader user={post.user} />
      <PostImage post={post} />
      <PostFooter navigation={navigation} post={post} />
    </View>
  );
};

const PostHeader = ({ user }) => {
  return (
    <View style={styles.headerContainer}>
      <Image
        source={{
          uri: user.profile,
        }}
        style={styles.profileImage}
      />
      <View style={styles.innerHeaderContainer}>
        <Text style={{ fontWeight: 600 }}>{user.name}</Text>
        <MaterialCommunityIcons
          name="dots-horizontal"
          size={24}
          color="black"
        />
      </View>
    </View>
  );
};

const PostImage = ({ post }) => {
  return (
    <View>
      <Image source={{ uri: post.image }} style={styles.image} />
      <Text style={{ ...styles.primaryText, marginTop: -100 }}>
        {post.title}
      </Text>
      <Text style={styles.secondaryText}>
        <FontAwesome name="map-marker" size={12} /> {post.location}
      </Text>
      <Text style={styles.secondaryText}>
        <FontAwesome name="calendar-o" size={12} /> {post.date}
      </Text>
    </View>
  );
};

const PostFooter = ({ navigation, post }) => {
  return (
    <View style={styles.footerContainer}>
      <PostInteraction
        navigation={navigation}
        icon_name="hop"
        count={post.likes}
      />
      <PostInteraction
        navigation={navigation}
        icon_name="share"
        count={post.shares}
      />
      <PostInteraction
        navigation={navigation}
        icon_name="comment"
        count={post.comments}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  imageContainer: {},
  title: {},
  headerContainer: {
    flexDirection: "row",
    height: 50,
    alignItems: "center",
  },
  profileImage: {
    height: 40,
    width: 40,
    borderRadius: 100,
    marginLeft: 10,
  },
  innerHeaderContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 10,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
  primaryText: {
    color: "white",
    fontSize: 30,
    fontWeight: 600,
    marginLeft: 20,
  },
  secondaryText: {
    color: "white",
    marginLeft: 20,
    fontWeight: 500,
  },
  footerContainer: {
    flexDirection: "row",
    marginTop: 40,
    width: "100%",
    justifyContent: "space-around",
  },
});

export default FeedPost;
