import {StyleSheet} from 'react-native';
import {isIOS} from '../../../constants/constants';

export const headerButtonStyles = () => {
  return StyleSheet.create({
    container: {
      marginLeft: isIOS ? 0 : 4,
    },
    text: {
      fontSize: 16,
      // color: colors.text.title.leftAndRightTopNavBar,
    },
    tinyLogo: {
      height: 24,
      width: 24,
    },
  });
};
