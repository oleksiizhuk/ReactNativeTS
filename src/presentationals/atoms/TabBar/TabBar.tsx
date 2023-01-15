import React, {FC} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Icon} from '../Icon';
import {styleTabBar} from './styles';

export const TabBar: FC<any> = ({name, navigation}) => {
  const styles = styleTabBar();
  return (
    <TouchableOpacity
      // accessibilityState={{selected: isActive}}
      style={styles.container}
      onPress={() => navigation.navigate(name)}>
      <View style={styles.content}>
        <Icon iconName={'home'} />
        <Text>{name}</Text>
      </View>
    </TouchableOpacity>
  );
};
