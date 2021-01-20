import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

export default function Home(props) {
  const actionDetails = () => {
    props.navigation.navigate('MovieDetails');
  };

  return (
    <TouchableOpacity onPress={actionDetails}>
      <Text>Home</Text>
    </TouchableOpacity>
  );
}
