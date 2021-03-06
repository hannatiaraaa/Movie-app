import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import FastImage from 'react-native-fast-image';

// component
import Roboto from './Roboto';

// global
import {Card} from '../Global/Style/Card';
import {Size} from '../Global/Config/Size';
import {Layouting} from '../Global/Style/Layout';

export default function TrendingItem({movie, onPress, opacity = 0.8}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={opacity}
      style={[
        Card().cover,
        Card().shadow,
        Layouting().flex1,
        Layouting().centered,
        styles.container,
      ]}>
      <FastImage
        source={{
          uri: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`,
        }}
        resizeMode="cover"
        style={[
          styles.image,
          {
            ...StyleSheet.absoluteFillObject,
          },
        ]}
      />
      <Roboto
        title={movie.title !== undefined ? movie.title : movie.name}
        color="white"
        size={Size.ms20}
        type="Bold"
        style={styles.title}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: Size.wp4,
    paddingVertical: Size.ms12,
  },
  image: {
    position: 'relative',
  },
  title: {
    position: 'absolute',
    zIndex: 10,
    width: widthPercentageToDP(80),
    textTransform: 'uppercase',
    top: moderateScale(140),
    left: moderateScale(20),
    textShadowColor: '#000',
    textShadowOffset: {width: moderateScale(2), height: moderateScale(2)},
    textShadowRadius: moderateScale(10),
    letterSpacing: 1.5,
  },
});
