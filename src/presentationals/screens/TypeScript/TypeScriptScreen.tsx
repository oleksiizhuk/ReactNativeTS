import React from 'react';
import {TypeScriptTemplate} from '../../templates';
import {useTypeScriptData} from './hook/useTypeScriptData';

export const TypeScriptScreen = () => {
  const {category} = useTypeScriptData();
  return <TypeScriptTemplate category={category} />;
};
