import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';

// config
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
    margin: Size.wp4,
    paddingVertical: Size.ms12,
  },
});
