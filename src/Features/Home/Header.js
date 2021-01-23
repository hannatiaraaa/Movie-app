import React from 'react';
import {Header} from 'react-native-elements';
import FastImage from 'react-native-fast-image';

// icon
import Octicons from 'react-native-vector-icons/Octicons';

// global
import {Size} from '../../Shared/Global/Config/Size';

export default function HeaderHome() {
  return (
    <Header
      backgroundColor="white"
      leftComponent={{
        icon: 'home',
        style: {
          color: 'black',
          fontSize: Size.ms28,
          paddingLeft: Size.wp4,
        },
      }}
      centerComponent={
        <FastImage
          style={{width: Size.wp92, height: Size.ms28}}
          source={require('../../assets/images/logo.png')}
          resizeMode="contain"
        />
      }
      rightComponent={
        <Octicons
          name="search"
          color="black"
          size={Size.ms20}
          style={{paddingRight: Size.wp4}}
        />
      }
    />
  );
}
