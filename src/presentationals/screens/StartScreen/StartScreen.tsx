import React from 'react';
import {StartTemplate} from '../../templates';
import {useStartData} from './hook';

export const StartScreen = () => {
  const {navigateToHome} = useStartData();

  console.log(navigateToHome);
  return <StartTemplate navigateToHome={navigateToHome} />;
};
