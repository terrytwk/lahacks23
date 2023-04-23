import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

import colors from "../theme/colors";

const Event = ({
  image_url,
  time,
  location,
  start_time,
  end_time,
  price = "",
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.time}>{time}</Text>
      <View style={styles.innerContainer}>
        <Image
          style={styles.image}
          source={{
            uri: image_url,
          }}
        />
        <View style={styles.innerContainerText}>
          <Text style={styles.location}>{location}</Text>
          <Text style={styles.price}>{price}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 80,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  innerContainer: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "white",
    padding: 5,
    width: "80%",
    height: "90%",
    alignItems: "center",
    justifyContent: "space-between",
    shadowColor: "#000",
    shadowOffset: {
      width: 4,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  innerContainerText: {
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
  },
  time: {
    fontSize: 12,
    fontWeight: 800,
    marginLeft: 10,
  },
  image: {
    height: "100%",
    aspectRatio: 1,
  },
  location: {
    marginLeft: 10,
    fontWeight: 600,
    fontSize: 15,
  },
  price: {
    marginRight: 10,
    color: colors.primary,
    fontWeight: 600,
    fontSize: 13,
  },
});

export default Event;
