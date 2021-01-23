import React from 'react';
import {Text} from 'react-native';

export default function Roboto({
  title,
  color = 'black',
  size,
  type = 'Regular',
  style,
}) {
  return (
    <Text
      style={{
        color,
        fontSize: size,
        fontFamily: `Roboto-${type}`,
        ...style,
      }}>
      {title}
    </Text>
  );
}
