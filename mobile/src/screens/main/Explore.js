import React, { useState, useContext } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  Image,
  ImageBackground,
  Linking,
  Pressable,
  ScrollView,
  Dimensions,
} from "react-native";
import colors from "../../theme/colors";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import PropTypes from "prop-types";
import ItineraryCard from "../../components/ItineraryCard";
import SearchBox from "../../components/SearchBox";
import TagContainer from "../../components/TagContainer";
// import Video from 'react-native-video';
import video from '../../../assets/videotiktoklafood.mp4'
import { Video, ResizeMode } from 'expo-av';

const dataExplore = {
  image: 'https://a.cdn-hotels.com/gdcs/production160/d214/3eabdca3-7b44-4aae-85dd-d12b8522bbe5.jpg',
  title: 'Venice Beach',
  location: 'Los Angeles, USA',
  date: 'May 21, 2022 - May 23, 2022',
}

const firstPost = {
  id: 1,
  image:
    "https://upload.wikimedia.org/wikipedia/commons/2/2f/Hollywood_sign_%288485145044%29.jpg",
  title: "LA Hacks 2023",
  location: "Los Angeles, USA",
  date: "April 21, 2023 - April 23, 2023",
};

const secondPost = {
  id: 2,
  image:
    "https://media.istockphoto.com/id/825319778/photo/sunset-on-beach.jpg?b=1&s=170667a&w=0&k=20&c=ILkxevFi52FO-3P8fcWCXJmwiu8F0OZTtabHY-P0MMM=",
  title: "Beach Trip",
  location: "Hawaii, USA",
  date: "May 21, 2022 - December 5 2022",
};

const thirdPost = {
  id: 3,
  image:
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/26/97/39/7f/caption.jpg?w=1200&h=-1&s=1&cx=1920&cy=1080&chk=v1_f31158e4bb953d28a308",
  title: "Japanese Fashion",
  location: "Tokyo, Japan",
  date: "June 19, 2021 - July 6 2021",
};

const fourthPost = {
  id: 4,
  image:
    "https://theplanetd.com/images/Where-to-Stay-in-Paris-Neighborhoods.jpg",
  title: "French Eats",
  location: "Paris, France",
  date: "July 9, 2020 - July 23, 2021",
};

const fifthPost = {
  id: 5,
  image:
    "https://www.spain.info/export/sites/segtur/.content/imagenes/cabeceras-grandes/cataluna/camp-nou-barcelona-c-fcbarcelona.jpg",
  title: "Spanish Futbol",
  location: "Barcelona, Spain",
  date: "July 9, 2020 - July 23, 2021",
};

const sixthPost = {
  id: 4,
  image:
    "https://www.tripsavvy.com/thmb/P1QE9pA-rxHceEx7lAk5RJJqTFk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Shanghai-5a824654875db90037d7834a.jpg",
  title: "Cyberpunk",
  location: "Beijing, China",
  date: "July 9, 2020 - July 23, 2021",
};

const Explore = () => {
  return (
    <View>
      <SearchBox />
      <View>
        <TagContainer/>
      </View>
      <View style={styles.topView}>
        <ScrollView>
          <View style={styles.container}>
            <View style={styles.leftCol}>
              <View style={styles.square}>
                <View style={styles.card}>
                  <ItineraryCard
                    image={{ uri: firstPost.image }}
                    title={firstPost.title}
                    location={firstPost.location}
                    date={firstPost.date}
                    // navigation={navigation}
                  />
                </View>
              </View>
              <View style={styles.square2}>
                <ItineraryCard
                  image={{ uri: secondPost.image }}
                  title={secondPost.title}
                  location={secondPost.location}
                  date={secondPost.date}
                  // navigation={navigation}
                />
              </View>
            </View>
            <View style={styles.rightCol}>
              <Video
                source={video}
                style={styles.video}
                resizeMode="contain"
                shouldPlay="true"
                isLooping="true"
              />
            </View>
          </View>
          <View style={styles.container2}>
            <View style={styles.row2}>
              <View style={styles.cell}>
                <ItineraryCard
                  image={{ uri: thirdPost.image }}
                  title={thirdPost.title}
                  location={thirdPost.location}
                  date={thirdPost.date}
                  // navigation={navigation}
                />
              </View>
              <View style={styles.cell}>
                <ItineraryCard
                  image={{ uri: fourthPost.image }}
                  title={fourthPost.title}
                  location={fourthPost.location}
                  date={fourthPost.date}
                  // navigation={navigation}
                />
              </View>
            </View>
            <View style={styles.row2}>
              <View style={styles.cell}>
                <ItineraryCard
                  image={{ uri: fifthPost.image }}
                  title={fifthPost.title}
                  location={fifthPost.location}
                  date={fifthPost.date}
                  // navigation={navigation}
                />
              </View>
              <View style={styles.cell}>
                <ItineraryCard
                  image={{ uri: sixthPost.image }}
                  title={sixthPost.title}
                  location={sixthPost.location}
                  date={sixthPost.date}
                  // navigation={navigation}
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  topView: {
    marginBottom: 0,
    paddingBottom: 125,
  },
  leftCol: {
    flex: 1,
    flexDirection: 'column',
    paddingRight: 20,
  },
  square: {
    flex: 1,
    // backgroundColor: 'gray',
    marginTop: 8,
  },
  square2: {
    flex: 1,
    // backgroundColor: 'gray',
    marginTop: 22,
  },
  rightCol: {
    flex: 1,
    // backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  video: {
    width: '120%',
    height: '120%',
    marginTop: 7,
    marginLeft: 30,
  },
  cardImage: {
    width: "100%",
    height: "100%",
    borderRadius: 0,
    overflow: "hidden",
  },
  card: {
    width: 200,
    height: 200,
    borderRadius: 0,
  },
  titleCard: {
    color: colors.textPrimary,
    fontFamily: "Trebuchet MS",
    fontSize: 22,
    paddingLeft: 25,
    fontWeight: "900",
    paddingTop: "64%",
  },
  textLocation: {
    color: "#d7d4d4",
    paddingLeft: 5,
    paddingTop: 4,
    fontFamily: "Trebuchet MS",
    fontWeight: "100",
    fontSize: 11,
  },
  icon: {
    color: "#d7d4d4",
    paddingLeft: 25,
    paddingTop: 4,
  },
  calIcon: {
    color: "#d7d4d4",
    paddingLeft: 25,
    paddingTop: 0,
    marginTop: -3,
  },
  textDate: {
    color: "#d7d4d4",
    paddingLeft: 5,
    paddingTop: 0,
    marginTop: -3,
    fontFamily: "Trebuchet MS",
    fontWeight: "100",
    fontSize: 11,
  },
  container2: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 7,
  },
  row2: {
    flex: 1,
    gap: 13,
    marginRight: 3,
    marginBottom: 7,
    flexDirection: 'row',
  },
  cell: {
    flex: 1,
    borderWidth: 0,
  },
});

export default Explore;

{/* <Video  
                  source={video}  
                  style={styles.video}
                  isLooping={true}
                  shouldPlay={true}
                  resizeMode={ResizeMode.CONTAIN}
                  useNativeControls={false}
                /> */}

{/* <ImageBackground
                    src={dataExplore.image}
                    resizeMode="cover"
                    style={styles.cardImage}
                  >
                    <Text style={styles.titleCard}>{dataExplore.title}</Text>
                    <View style={{ flex: 1, flexDirection: "row" }}>
                      <FontAwesome name="map-marker" size={12} style={styles.icon} />
                      <Text style={styles.textLocation}>{dataExplore.location}</Text>
                    </View>
                    <View style={{ flex: 1, flexDirection: "row" }}>
                      <FontAwesome name="calendar-o" size={12} style={styles.calIcon} />
                      <Text style={styles.textDate}>{dataExplore.date}</Text>
                    </View>
                  </ImageBackground> */}