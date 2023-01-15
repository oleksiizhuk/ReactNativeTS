import React, {FC} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {HomeTemplateProps} from '../../screens/Home/types';

export const HomeTemplate: FC<HomeTemplateProps> = ({onNavigationPress}) => {
  return (
    <>
      <Text>HomeScreen</Text>
      <TouchableOpacity onPress={onNavigationPress}>
        <Text>navigation to BottomMenu</Text>
      </TouchableOpacity>
    </>
  );
};
