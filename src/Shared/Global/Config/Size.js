import {heightPercentageToDP, widthPercentageToDP} from 'react-native-responsive-screen';
import {moderateScale} from 'react-native-size-matters';

export const Size = {
  radius: moderateScale(16),
  detailRadius: moderateScale(190),

  ms12: moderateScale(12),
  ms14: moderateScale(14),
  ms16: moderateScale(16),
  ms20: moderateScale(20),
  ms28: moderateScale(28),  

  wp4: widthPercentageToDP(4),
  wp9: widthPercentageToDP(9),
  wp23: widthPercentageToDP(23),
  wp13: widthPercentageToDP(13),
  wp92: widthPercentageToDP(92), 
  
  h1: heightPercentageToDP(1),
  h2: heightPercentageToDP(2),
  h45: heightPercentageToDP(45),
};
