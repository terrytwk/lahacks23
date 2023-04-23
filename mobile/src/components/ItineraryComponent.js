import { useState } from "react";
import {
  ScrollView,
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";

import Event from "./Event";

import CustomModal from "./CustomModal";

import colors from "../theme/colors";

const ItineraryComponent = ({
  events = [],
  modalVisible,
  setModalVisible,
  isCreating,
}) => {
  const [selectedEvent, setSelectedEvent] = useState({});

  return (
    <View>
      <ScrollView>
        {isCreating ? <PlusEvent /> : null}
        {events.map((e, i) => (
          <TouchableOpacity
            key={i}
            onPress={() => {
              setModalVisible(true);
              setSelectedEvent(events[i]);
            }}
          >
            <Event
              time={e.time}
              location={e.location}
              price={e.price}
              image_url={e.image_url}
            />
          </TouchableOpacity>
        ))}
      </ScrollView>
      <CustomModal
        title={selectedEvent.location}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        ModalBody={<ModalBody selectedEvent={selectedEvent} />}
      />
    </View>
  );
};

const ModalBody = ({ selectedEvent }) => {
  console.log(selectedEvent);
  return (
    <View style={styles.modalBodyContainer}>
      <Text style={styles.secondaryText}>{selectedEvent.length} Hours</Text>
      <Text style={styles.secondaryText}>{selectedEvent.price}</Text>
      <Text style={styles.secondaryText}>{selectedEvent.category}</Text>
      <Text style={styles.primaryText}>{selectedEvent.description}</Text>
    </View>
  );
};

const PlusEvent = () => {
  return (
    <View style={styles.plusEventContainer}>
      <Text style={styles.plusEventText}>+ Add new event</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  modalBodyContainer: {
    flex: 1,
    width: "100%",
  },
  primaryText: {
    marginTop: 10,
  },
  secondaryText: {
    color: colors.textTernary,
    marginTop: 5,
  },
  plusEventContainer: {
    borderWidth: 2,
    borderColor: colors.border,
    borderStyle: "dashed",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
    marginBottom: 5,
    padding: 20,
  },
  plusEventText: {
    fontWeight: 700,
  },
});

export default ItineraryComponent;
