import { View, Text } from "react-native";

import SearchBox from "../../components/SearchBox";
import TagContainer from "../../components/TagContainer";

const Explore = () => {
  return (
    <View>
      <SearchBox />
      <TagContainer />
      <View></View>
    </View>
  );
};

export default Explore;
