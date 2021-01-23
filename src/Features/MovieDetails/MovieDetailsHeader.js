import React from 'react';
import {Header} from 'react-native-elements';
import FastImage from 'react-native-fast-image';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {ms} from 'react-native-size-matters';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Size} from '../../Shared/Global/Config/Size';

// const screenHome = () => {
//   props.navigation.navigate('../Home/Home');
// };

export default function DetailsHeader({ navigation }) {
  return (
    <Header            
      backgroundColor= "transparent"
      leftComponent={        
        <AntDesign
        name= "arrowleft"
        color= "black"
        size={Size.ms20}   
        // onPress={() => props.navigation.navigation(Hom e)}     
        style= {{paddingLeft: Size.wp4, zIndex: 100}}               
        />
      }
      centerComponent={
        <FastImage
          style={{width: Size.wp92, height: Size.ms28}}
          source={require('../../assets/images/logo.png')}
          resizeMode="contain"
        />
      }
      rightComponent={
        <AntDesign
          name="hearto"
          color="black"
          size={Size.ms20}
          style={{paddingRight: Size.wp4}}
        />
      }
    />
  );
}
