import React from 'react';
import {View, Text} from 'react-native';
import {styleKeyOfCreator} from './style';

export const KeyOfScreen = () => {
  const styles = styleKeyOfCreator();
  return (
    <View style={styles.container}>
      <Text>KeyOfScreen</Text>
    </View>
  );
};
