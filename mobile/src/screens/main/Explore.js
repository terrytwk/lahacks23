import {
  StyleSheet,
  View,
  ScrollView,
} from "react-native";
import colors from "../../theme/colors";
import ItineraryCard from "../../components/ItineraryCard";
import SearchBox from "../../components/SearchBox";
import TagContainer from "../../components/TagContainer";
// import Video from 'react-native-video';
import video from '../../../assets/videotiktoklafood.mp4'
import { Video } from 'expo-av';
import { explorePosts1 as posts } from "../../utils/data";

const dataExplore = {
  image: 'https://a.cdn-hotels.com/gdcs/production160/d214/3eabdca3-7b44-4aae-85dd-d12b8522bbe5.jpg',
  title: 'Venice Beach',
  location: 'Los Angeles, USA',
  date: 'May 21, 2022 - May 23, 2022',
}

const Explore = ({ navigation }) => {
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
                    // image={{ uri: firstPost.image }}
                    // title={firstPost.title}
                    // location={firstPost.location}
                    // date={firstPost.date}
                    post={posts[0]}
                    navigation={navigation}
                  />
                </View>
              </View>
              <View style={styles.square2}>
                <ItineraryCard
                  // image={{ uri: secondPost.image }}
                  // title={secondPost.title}
                  // location={secondPost.location}
                  // date={secondPost.date}
                  navigation={navigation}
                  post={posts[1]}
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
                  // image={{ uri: thirdPost.image }}
                  // title={thirdPost.title}
                  // location={thirdPost.location}
                  // date={thirdPost.date}
                  navigation={navigation}
                  post={posts[2]}
                />
              </View>
              <View style={styles.cell}>
                <ItineraryCard
                  // image={{ uri: fourthPost.image }}
                  // title={fourthPost.title}
                  // location={fourthPost.location}
                  // date={fourthPost.date}
                  navigation={navigation}
                  post={posts[3]}
                />
              </View>
            </View>
            <View style={styles.row2}>
              <View style={styles.cell}>
                <ItineraryCard
                  // image={{ uri: fifthPost.image }}
                  // title={fifthPost.title}
                  // location={fifthPost.location}
                  // date={fifthPost.date}
                  navigation={navigation}
                  post={posts[4]}
                />
              </View>
              <View style={styles.cell}>
                <ItineraryCard
                  // image={{ uri: sixthPost.image }}
                  // title={sixthPost.title}
                  // location={sixthPost.location}
                  // date={sixthPost.date}
                  navigation={navigation}
                  post={posts[5]}
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