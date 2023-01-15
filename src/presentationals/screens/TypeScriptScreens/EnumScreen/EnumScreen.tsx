import React from 'react';
import {EnumTemplate} from '../../../templates/EnumTemplate';
import {useEnum} from './hook/useEnum';
export const EnumScreen = () => {
  useEnum();
  return <EnumTemplate />;
};
