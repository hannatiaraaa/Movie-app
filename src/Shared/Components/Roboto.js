import React from 'react';
import {Text} from 'react-native';

export default function Roboto({title, color = 'black', size, type}) {
  return (
    <Text
      style={{
        color,
        fontSize: size,
        fontFamily: `Roboto-${type}`,
      }}>
      {title}
    </Text>
  );
}
