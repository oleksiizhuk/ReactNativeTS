import React from 'react';
import {HomeTemplate} from '../../templates';
import {useHomeData} from './hook/useHomeData';

export const HomeScreen = () => {
  const {onNavigationPress} = useHomeData();
  return <HomeTemplate onNavigationPress={onNavigationPress} />;
};
