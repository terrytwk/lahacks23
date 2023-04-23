import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

import ItineraryDate from "../../components/ItineraryDate";
import ItineraryComponent from "../../components/ItineraryComponent";

import CustomButton from "../../components/CustomButton";

import colors from "../../theme/colors";

import { itinerary1 } from "../../utils/dummyData";

const Itinerary = ({
  route,
  navigation,
  title,
  length,
  price,
  isCreating = false,
}) => {
  const { post, fromProfile = false } = route.params;

  const [activeDay, setActiveDay] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [editMode, setEditMode] = useState(isCreating);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{post.title}</Text>
      <Text style={styles.createdBy}>
        Hopped from <Text style={{ fontWeight: 700 }}>{post.forkFrom}</Text>'s
        itinerary
      </Text>
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          justifyContent: "space-around",
          marginTop: 20,
        }}
      >
        <Information info={post.length} unit="days" />
        <Information info={post.price} unit="$" />
        <Information info={post.likes} unit="hops" />
      </View>
      <ItineraryDate
        activeDay={activeDay}
        setActiveDay={setActiveDay}
        length={Object.keys(itinerary1).length}
        isCreating={editMode}
      />
      <ItineraryComponent
        events={itinerary1[activeDay]}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        isCreating={editMode}
      />
      {fromProfile || editMode ? null : (
        <CustomButton
          title="HOP ON ✈️"
          style={{ alignSelf: "center", marginTop: 20 }}
          onPress={() => setEditMode(!editMode)}
        />
      )}
      {editMode ? (
        <CustomButton
          title="Save"
          style={{ alignSelf: "center", marginTop: 20 }}
          onPress={() => {
            setEditMode(!editMode);
            navigation.pop();
          }}
        />
      ) : null}
    </View>
  );
};

const Information = ({ info, unit }) => {
  return (
    <View style={{ alignItems: "center", paddingHorizontal: 10 }}>
      <Text style={{ fontWeight: 600, fontSize: 24 }}>{info}</Text>
      <Text style={{ color: colors.textTernary, fontSize: 15 }}>{unit}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
  title: {
    fontSize: 40,
    marginLeft: 10,
  },
  createdBy: {
    marginLeft: 10,
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
