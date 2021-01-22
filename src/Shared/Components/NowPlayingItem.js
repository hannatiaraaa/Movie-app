import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import FastImage from 'react-native-fast-image';

// global
import {Card} from '../Global/Style/Card';
import {Size} from '../Global/Config/Size';
import {Layouting} from '../Global/Style/Layout';

export default function NowPlayingItem({movie, onPress, opacity = 0.8}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={opacity}
      style={[
        Card().medium,
        Card().shadow,
        Layouting().flex1,
        styles.container,
      ]}>
      <FastImage
        source={{
          uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
        }}
        style={{
          ...StyleSheet.absoluteFillObject,
          borderRadius: Size.radius,
        }}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: Size.ms12,
  },
});
