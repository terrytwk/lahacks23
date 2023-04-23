import { View, Text, Button } from "react-native";

const Feed = ({ navigation }) => {
  return (
    <View>
      <Text>feed</Text>
      <Button
        title="Go to Itinerary"
        onPress={() => navigation.navigate("Itinerary")}
      />
    </View>
  );
};

export default Feed;
