import React from 'react';
import {View} from 'react-native';
import {deviderStyles} from './styles';

export const Divider = () => {
  const styles = deviderStyles();
  return <View style={styles.container} />;
};
