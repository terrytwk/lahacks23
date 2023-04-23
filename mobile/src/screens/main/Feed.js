import { View, Text, Button } from "react-native";

import FeedPost from "../../components/FeedPost";

const Feed = ({ navigation }) => {
  return (
    <View>
      <Text>feed</Text>
      <Button
        title="Go to Itinerary"
        onPress={() => navigation.navigate("Itinerary")}
      />
      <FeedPost navigation={navigation} />
    </View>
  );
};

export default Feed;
