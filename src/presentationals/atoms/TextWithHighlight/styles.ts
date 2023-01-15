import {StyleSheet} from 'react-native';

export const textWithHighlightStyles = () => {
  return StyleSheet.create({
    textStyle: {
      // ...presets.bodyBS,
    },
    constHighlightStyle: {
      color: '#f5bd02',
      // ...presets.bodyRS,
    },
    defaultText: {
      color: '#ffffff',
    },
  });
};
