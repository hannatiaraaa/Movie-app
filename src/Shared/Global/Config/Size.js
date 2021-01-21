import {widthPercentageToDP} from 'react-native-responsive-screen';
import {moderateScale} from 'react-native-size-matters';

export const Size = {
  radius: moderateScale(16),

  ms12: moderateScale(12),
  ms20: moderateScale(20),
  ms28: moderateScale(28),

  wp4: widthPercentageToDP(4),
  wp92: widthPercentageToDP(92),
};
