import {widthPercentageToDP} from 'react-native-responsive-screen';
import {moderateScale} from 'react-native-size-matters';

export const Size = {
  radius: moderateScale(16),

  ms12: moderateScale(12),
  ms14: moderateScale(14),
  ms16: moderateScale(16),
  ms20: moderateScale(20),
  ms28: moderateScale(28),
  ms100: moderateScale(100),
  ms200: moderateScale(200),

  wp4: widthPercentageToDP(4),
  wp92: widthPercentageToDP(92),
  wp100: widthPercentageToDP(100),
};
