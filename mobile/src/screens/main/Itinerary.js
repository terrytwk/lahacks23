import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

import ItineraryDate from "../../components/ItineraryDate";
import ItineraryComponent from "../../components/ItineraryComponent";

import CustomButton from "../../components/CustomButton";

import colors from "../../theme/colors";

import { itinerary1 } from "../../utils/dummyData";

const Itinerary = ({
  navigation,
  title,
  length,
  price,
  fromProfile = false,
  isCreating = false,
}) => {
  const [activeDay, setActiveDay] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Title</Text>
      <Text style={styles.length}>
        Hopped from <Text style={{ fontWeight: 700 }}>Terry Kim</Text>'s
        itinerary
      </Text>
      <Text style={styles.length}>Length</Text>
      <Text style={styles.price}>Price</Text>
      <ItineraryDate
        activeDay={activeDay}
        setActiveDay={setActiveDay}
        length={Object.keys(itinerary1).length}
        isCreating={isCreating}
      />
      <ItineraryComponent
        events={itinerary1[activeDay]}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        isCreating={isCreating}
      />
      {fromProfile || isCreating ? null : <CustomButton title="HOP ON!✈️" />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
  title: {
    fontSize: 40,
  },
  length: {
    fontSize: 20,
    color: colors.textTernary,
  },
  price: {
    fontSize: 20,
    color: colors.textTernary,
  },
});

export default Itinerary;
