import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import colors from "../theme/colors";

const ItineraryDate = ({ activeDay, setActiveDay, length }) => {
  return (
    <View>
      <ScrollView
        style={styles.container}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {/* <PlustDate /> */}
        {[...Array(length)].map((e, i) => (
          <Date
            key={i}
            day={i + 1}
            active={i == activeDay}
            setActiveDay={setActiveDay}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const Date = ({ active, day, setActiveDay }) => {
  return (
    <TouchableOpacity
      onPress={() => setActiveDay(day - 1)}
      style={{
        ...styles.dateContainer,
        backgroundColor: active ? colors.primaryLight : colors.border,
      }}
    >
      <Text style={{ ...styles.dayText, color: active ? "white" : "black" }}>
        Day {day}
      </Text>
    </TouchableOpacity>
  );
};

const PlustDate = () => {
  return (
    <View style={styles.plusContainer}>
      <Text style={styles.plus}>+</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginRight: 20,
    marginVertical: 20,
  },
  dateContainer: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    paddingHorizontal: 15,
    marginLeft: 10,
    height: 50,
  },
  dayText: {
    fontSize: 15,
    fontWeight: 500,
  },
  dateText: {
    color: colors.textTernary,
    fontSize: 10,
  },
  plusContainer: {
    backgroundColor: colors.border,
    height: 60,
    width: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    marginHorizontal: 5,
    marginLeft: 20,
  },
  plus: {
    fontWeight: 400,
    fontSize: 30,
  },
});

export default ItineraryDate;
