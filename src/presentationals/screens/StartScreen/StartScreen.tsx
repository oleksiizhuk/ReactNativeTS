import React from 'react';
import {StartTemplate} from '../../templates';
import {useStartData} from './hook';

export const StartScreen = () => {
  const {navigateToHome} = useStartData();

  return <StartTemplate navigateToHome={navigateToHome} />;
};
