import React from 'react';
import {View, Text} from 'react-native';
import {styleTypeOfScreenCreator} from './style';
export const TypeOfScreen = () => {
  const styles = styleTypeOfScreenCreator();
  return (
    <View style={styles.container}>
      <Text>TypeOfScreen</Text>
    </View>
  );
};
