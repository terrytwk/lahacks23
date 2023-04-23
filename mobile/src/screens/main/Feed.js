import { ScrollView } from "react-native";

import FeedPost from "../../components/FeedPost";

import { feedPosts1 as post } from "../../utils/data";

const Feed = ({ navigation }) => {
  return (
    <ScrollView>
      {post.map((p, i) => (
        <FeedPost navigation={navigation} post={p} key={i} />
      ))}
    </ScrollView>
  );
};

export default Feed;
