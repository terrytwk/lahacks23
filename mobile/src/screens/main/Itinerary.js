import { View, Text, Button } from "react-native";

const Itinerary = ({ navigation }) => {
  return (
    <View>
      <Text>itinerary</Text>
      <Button title="Go Back" onPress={() => navigation.pop()} />
    </View>
  );
};

export default Itinerary;
