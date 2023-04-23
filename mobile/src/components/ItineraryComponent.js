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

const ItineraryComponent = ({ events = [], modalVisible, setModalVisible }) => {
  const [selectedEvent, setSelectedEvent] = useState({});

  return (
    <View>
      <ScrollView>
        {events.map((e, i) => (
          <TouchableOpacity
            onPress={() => {
              setModalVisible(true);
              setSelectedEvent(events[i]);
            }}
          >
            <Event
              key={i}
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
  return (
    <View style={styles.modalBodyContainer}>
      <Text style={styles.secondaryText}>Hours</Text>
      <Text style={styles.secondaryText}>{selectedEvent.price}</Text>
      <Text style={styles.secondaryText}>{selectedEvent.category}</Text>
      <Text style={styles.primaryText}>Description</Text>
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
});

export default ItineraryComponent;
