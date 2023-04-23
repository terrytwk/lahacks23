import React, { useState } from 'react';
import {
  StyleSheet, Text, TextInput, View, Button, Image, ImageBackground, Linking, Pressable, ScrollView,
  StyleSheet, Text, TextInput, View, Button, Image, ImageBackground, Linking, Pressable, ScrollView,
} from 'react-native';
import colors from '../../theme/colors';
import FontAwesome from '@expo/vector-icons/FontAwesome'
import ItineraryCard from '../../components/ItineraryCard';
import PropTypes from 'prop-types';
import ItineraryCard from '../../components/ItineraryCard';
import PropTypes from 'prop-types';

//user data object
const data = {
  id: 1,
  username: 'kennywan',
  backgroundImage: 'https://images8.alphacoders.com/117/1171898.jpg',
  profilePicture: 'https://media.licdn.com/dms/image/D5603AQHL80r1eHfwsw/profile-displayphoto-shrink_800_800/0/1664473729287?e=1687392000&v=beta&t=SmnHhFTlmhBGVQRUoDdCK8uCcDzskX7eB7-puT8w5Ww',
  name: 'Kenny Wan',
  followerCount: '228K',
  followingCount: '134',
  bio: 'LA, 23 y/o, creative mind. Loves traveling on a budget as a student. Message me for recs of places to go :)',
  website: "studenttraveler.com"
}

const firstPost = {
  id: 1,
  image: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Hollywood_sign_%288485145044%29.jpg',
  title: 'LA Hacks 2023',
  location: 'Los Angeles, USA',
  date: 'April 21, 2023 - April 23, 2023'
}

const secondPost = {
  id: 1,
  image: 'https://media.istockphoto.com/id/825319778/photo/sunset-on-beach.jpg?b=1&s=170667a&w=0&k=20&c=ILkxevFi52FO-3P8fcWCXJmwiu8F0OZTtabHY-P0MMM=',
  title: 'Beach Trip',
  location: 'Hawaii, USA',
  date: 'May 21, 2022 - December 5 2022'
}

const thirdPost = {
  id: 1,
  image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/26/97/39/7f/caption.jpg?w=1200&h=-1&s=1&cx=1920&cy=1080&chk=v1_f31158e4bb953d28a308',
  title: 'Japanese Fashion',
  location: 'Tokyo, Japan',
  date: 'June 19, 2021 - July 6 2021'
}

const fourthPost = {
  id: 1,
  image: 'https://theplanetd.com/images/Where-to-Stay-in-Paris-Neighborhoods.jpg',
  title: 'French Eats',
  location: 'Paris, France',
  date: 'July 9, 2020 - July 23, 2021'
}

const firstPost = {
  id: 1,
  image: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Hollywood_sign_%288485145044%29.jpg',
  title: 'LA Hacks 2023',
  location: 'Los Angeles, USA',
  date: 'April 21, 2023 - April 23, 2023'
}

const secondPost = {
  id: 1,
  image: 'https://media.istockphoto.com/id/825319778/photo/sunset-on-beach.jpg?b=1&s=170667a&w=0&k=20&c=ILkxevFi52FO-3P8fcWCXJmwiu8F0OZTtabHY-P0MMM=',
  title: 'Beach Trip',
  location: 'Hawaii, USA',
  date: 'May 21, 2022 - December 5 2022'
}

const thirdPost = {
  id: 1,
  image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/26/97/39/7f/caption.jpg?w=1200&h=-1&s=1&cx=1920&cy=1080&chk=v1_f31158e4bb953d28a308',
  title: 'Japanese Fashion',
  location: 'Tokyo, Japan',
  date: 'June 19, 2021 - July 6 2021'
}

const fourthPost = {
  id: 1,
  image: 'https://theplanetd.com/images/Where-to-Stay-in-Paris-Neighborhoods.jpg',
  title: 'French Eats',
  location: 'Paris, France',
  date: 'July 9, 2020 - July 23, 2021'
}

//styling
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.textPrimary,
  },
  username: {
    fontFamily: 'Trebuchet MS',
    fontSize: 22,
    paddingLeft: 25,
    fontWeight: '900',
    color: colors.textPrimary,
    paddingTop: 20,
  },
  image: {
    height: 230,
    width: 500,
    margin: 0,
    padding: 0,
  },
  icon: {
    paddingLeft: 10,
    paddingTop: 25,
    color: colors.textPrimary,
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 100,
  },
  box: {
    flex: 1,
    height: '100%',
    // backgroundColor: '#007bff',
    marginLeft: 7,
    marginRight: 7,
    alignItems: 'center',
  },
  followers: {
    fontFamily: 'Trebuchet MS',
    fontWeight: 'bold',
    fontSize: 24,
    letterSpacing: -0.8,
    color: colors.textSecondary,
    paddingTop: 14,
  },
  followerText: {
    fontFamily: 'Trebuchet MS',
    color: colors.textTernary,
    paddingTop: 3,
    fontSize: 14,
    fontWeight: 'bold',
    letterSpacing: 0.8,
  },
  avatar: {
    height: 111,
    width: 111,
    marginTop: -50,
    borderRadius: 150 / 2,
    overflow: "hidden",
    borderWidth: 3,
    borderColor: colors.primary
  },
  following: {
    paddingTop: 14,
    fontFamily: 'Trebuchet MS',
    fontWeight: 'bold',
    fontSize: 24,
    letterSpacing: -0.8,
    color: colors.textSecondary,
  },
  followingText: {
    fontFamily: 'Trebuchet MS',
    color: colors.textTernary,
    paddingTop: 2,
    fontSize: 14,
    fontWeight: 'bold',
    letterSpacing: 0.8,
  },
  name: {
    fontFamily: 'Trebuchet MS',
    color: colors.textSecondary,
    fontSize: 22,
    fontWeight: '900',
    textAlign: 'center',
    marginTop: -15,
  },
  bio: {
    fontFamily: 'Trebuchet MS',
    color: colors.textTernary,
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 7,
    lineHeight: 16,
    // width: '90%',
    marginLeft: '4%',
    marginRight: '4%',
    // width: '90%',
    marginLeft: '4%',
    marginRight: '4%',
  },
  website: {
    fontFamily: 'Trebuchet MS',
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.primary,
    textDecorationLine: 'underline',
    lineHeight: 18,
  },
  button: {
    // paddingLeft: 55,
    // paddingRight: 55,
    width: '90%',
    paddingTop: 7,
    paddingBottom: 7,
    backgroundColor: '#efefef', //button background color
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
    color: colors.textSecondary,
    marginTop: 13,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 12,
    textAlign: 'center',
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 100,
    marginTop: -40,
    marginLeft: -4,
    marginRight: -3,
  },
  cardBox: {
    flex: 1,
    height: '100%',
    // backgroundColor: '#007bff',
    marginLeft: 0,
    marginRight: 0,
    alignItems: 'center',
  },
  secondRowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 100,
    marginLeft: -4,
    marginRight: -3,
  },
  secondRowCardBox: {
    flex: 1,
    height: '100%',
    // backgroundColor: '#007bff',
    marginLeft: 0,
    marginRight: 0,
    marginTop: 238,
    alignItems: 'center',
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 100,
    marginTop: -40,
    marginLeft: -4,
    marginRight: -3,
  },
  cardBox: {
    flex: 1,
    height: '100%',
    // backgroundColor: '#007bff',
    marginLeft: 0,
    marginRight: 0,
    alignItems: 'center',
  },
  secondRowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 100,
    marginLeft: -4,
    marginRight: -3,
  },
  secondRowCardBox: {
    flex: 1,
    height: '100%',
    // backgroundColor: '#007bff',
    marginLeft: 0,
    marginRight: 0,
    marginTop: 238,
    alignItems: 'center',
  },
});

const Profile = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [bio, setBio] = useState('');
  const [profilePicture, setProfilePicture] = useState('');
  const[followers, setFollowers] = useState('');
  const[following, setFollowing] = useState('');
  // const [tag, onChangeTag] = useState('');

  // const handleClear = () => {
  //   id: '',
  //   userName: '',
  //   profilePicture: 'https://m.media-amazon.com/images/I/31LZC6lJXcL.jpg',
  //   firstName: 'User',
  //   lastName: 'NumbaOne',
  //   bio: 'certified bro',
  // };

  const handleUpdate = () => {

  };

  return (
    <View style={{height: '100%',}}>
    <ScrollView>
        <View style={styles.container}>
          <View style={{
            paddingTop: 0,
            paddingBottom: 50,
            marginBottom: 200,
          }}
          >
            <View>
              <ImageBackground src={data.backgroundImage} resizeMode="cover" style={styles.image}>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                  <Text style={styles.username}>
                    {data.username}
                  </Text>
                  <FontAwesome name = 'chevron-down' size={12} style={styles.icon}/>
                </View>
              </ImageBackground>
            </View>
            <View style={styles.socialContainer}>
              <View style={styles.box}>
                <Text style={styles.followers}>
                  {data.followerCount}
                </Text>
                <Text style={styles.followerText}>
                  Followers
                </Text>
              </View>
              <View style={styles.box}>
                <Image source={{ uri: 'https://media.licdn.com/dms/image/D5603AQHL80r1eHfwsw/profile-displayphoto-shrink_800_800/0/1664473729287?e=1687392000&v=beta&t=SmnHhFTlmhBGVQRUoDdCK8uCcDzskX7eB7-puT8w5Ww' }} resizeMode='cover' style={styles.avatar} />
              </View>
              <View style={styles.box}>
                <Text style={styles.following}>
                  {data.followingCount}
                </Text>
                <Text style={styles.followingText}>
                    Following
                </Text>
              </View>
            </View>
            <Text style={styles.name}>
              {data.name}
            </Text>
            <Text style={styles.bio}>
              {data.bio}
            </Text>
            <Text style={styles.website} onPress={() => Linking.openURL('http://studenttravel.com/')}>
              {data.website}
            </Text>
            <View style={styles.socialContainer}>
              <View style={styles.box}>
                <Pressable style={styles.button}>
                  <Text style={styles.buttonText}>Edit Profile</Text>
                </Pressable>
              </View>
              <View style={styles.box}>
                <Pressable style={styles.button}>
                  <Text style={styles.buttonText}>Share Profile</Text>
                </Pressable>
              </View>
            </View>
            <View style={styles.cardContainer}>
              <View style={styles.box}>
                <ItineraryCard
                  image={{uri: firstPost.image}}
                  title={firstPost.title}
                  location={firstPost.location}
                  date={firstPost.date}
                  navigation={navigation}
                />
              </View>
              <View style={styles.box}>
                <ItineraryCard
                  image={{uri: secondPost.image}}
                  title={secondPost.title}
                  location={secondPost.location}
                  date={secondPost.date}
                  navigation={navigation}
                />
              </View>
            </View>
            <View style={styles.secondRowContainer}>
              <View style={styles.secondRowCardBox}>
                  <ItineraryCard
                    image={{uri: thirdPost.image}}
                    title={thirdPost.title}
                    location={thirdPost.location}
                    date={thirdPost.date}
                    navigation={navigation}
                  />
                </View>
                <View style={styles.secondRowCardBox}>
                  <ItineraryCard
                    image={{uri: fourthPost.image}}
                    title={fourthPost.title}
                    location={fourthPost.location}
                    date={fourthPost.date}
                    navigation={navigation}
                  />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      </View>
  );
};

Profile.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};
Profile.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};
export default Profile;