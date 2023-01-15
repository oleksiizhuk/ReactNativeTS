import {StyleSheet} from 'react-native';

export const typeScriptStyles = () => {
  return StyleSheet.create({
    container: {},
    categoryContainer: {
      borderColor: 'gray',
      borderWidth: 1,
      padding: 16,
      margin: 1,
      borderRadius: 12,
    },
    text: {
      fontSize: 24,
      lineHeight: 28,
      textAlign: 'center',
      color: '#2860b4',
    },
    description: {
      fontSize: 16,
      lineHeight: 20,
      color: '#5B5D5AFF',
    },
  });
};
