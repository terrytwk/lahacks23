import * as React from 'react';
import {
  Image, TouchableOpacity, ImageBackground, Text, StyleSheet, View
} from 'react-native';
import { Card } from 'react-native-paper';
import PropTypes from 'prop-types';
import FontAwesome from '@expo/vector-icons/FontAwesome'
import colors from '../theme/colors';

const styles = StyleSheet.create({
    cardImage: {
      width: '100%',
      height: '100%',
			borderRadius: 0,
			overflow: "hidden",
    },
    card: {
    	width: 215,
    	height: 215,
			borderRadius: 0,
    },
		titleCard: {
			color: colors.textPrimary,
			fontFamily: 'Trebuchet MS',
    	fontSize: 22,
    	paddingLeft: 25,
   		fontWeight: '900',
			paddingTop: '64%',
		},
		textLocation: {
			color: '#d7d4d4',
			paddingLeft: 5,
			paddingTop: 4,
			fontFamily: 'Trebuchet MS',
			fontWeight: '100',
			fontSize: 11,
		},
		icon: {
			color: '#d7d4d4',
			paddingLeft: 25,
			paddingTop: 4,
		},
		calIcon: {
			color: '#d7d4d4',
			paddingLeft: 25,
			paddingTop: 0,
			marginTop: -3,
		},
		textDate: {
			color: '#d7d4d4',
			paddingLeft: 5,
			paddingTop: 0,
			marginTop: -3,
			fontFamily: 'Trebuchet MS',
			fontWeight: '100',
			fontSize: 11,
		},
});

function ItineraryCard({
    image, id, title, navigation, location, date
}) {
  const onPressEvent = () => {
    navigation.navigate('Itinerary', {
      id,
    });
  };

  return (
    <TouchableOpacity>
      <Card onPress={onPressEvent} style={styles.card}>
        <ImageBackground
          source={image}
          resizeMode='cover'
          style={styles.cardImage}
        >
          <Text style={styles.titleCard}>
            {title}
          </Text>
					<View style={{ flex: 1, flexDirection: 'row' }}>
						<FontAwesome name = 'map-marker' size={12} style={styles.icon}/>
            <Text style={styles.textLocation}>
                {location}
            </Text>
					</View>
					<View style={{ flex: 1, flexDirection: 'row' }}>
						<FontAwesome name = 'calendar-o' size={12} style={styles.calIcon}/>
            <Text style={styles.textDate}>
                {date}
            </Text>
					</View>
        </ImageBackground>
      </Card>
    </TouchableOpacity>
  );
}

ItineraryCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
	date: PropTypes.string.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

export default ItineraryCard;