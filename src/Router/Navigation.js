import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../Features/Home/Home';
import MovieDetails from '../Features/MovieDetails/MovieDetails';

const Stack = createStackNavigator();
export default function Navigation() {
  return (
    <Stack.Navigator initialRouteName={Home}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="MovieDetails" component={MovieDetails} />
    </Stack.Navigator>
  );
}
