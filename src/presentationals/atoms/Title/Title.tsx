import React, {memo, FC} from 'react';
import {Text} from 'react-native';
import {ITitleProps} from './types';
import {titleStyles} from './styles';

export const Title: FC<ITitleProps> = memo(({title}) => {
  const styles = titleStyles();
  return <Text style={styles.title}>{title}</Text>;
});
