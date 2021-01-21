import {StyleSheet} from 'react-native';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import {moderateScale} from 'react-native-size-matters';

// config
import {Size} from '../Config/Size';

export const Card = (color) => {
  return StyleSheet.create({
    cover: {
      width: Size.wp92,
      height: heightPercentageToDP(60),
    },
    medium: {
      height: moderateScale(200),
      width: moderateScale(100),
    },
    shadow: {
      shadowColor: color ? color : '#000',
      shadowOffset: {width: moderateScale(0), height: Size.ms20},
      shadowOpacity: moderateScale(0.51),
      shadowRadius: moderateScale(13.16),
      elevation: Size.ms20,
    },
  });
};
