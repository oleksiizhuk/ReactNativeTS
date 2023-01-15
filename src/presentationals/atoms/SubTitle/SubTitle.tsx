import React, {memo, FC} from 'react';
import {Text} from 'react-native';
import {ISubTitleProps} from './types';
import {subTitleStyles} from './styles';

export const SubTitle: FC<ISubTitleProps> = memo(({subTitle, style}) => {
  const styles = subTitleStyles();
  return <Text style={[styles.subTitle, style]}>{subTitle}</Text>;
});
