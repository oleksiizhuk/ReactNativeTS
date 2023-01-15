import React, {memo, FC} from 'react';
import {Text} from 'react-native';
import {DescriptionProps} from './types';
import {descriptionStyles} from './styles';

export const Description: FC<DescriptionProps> = memo(
  ({description, style}) => {
    const styles = descriptionStyles();
    return <Text style={[styles.description, style]}>{description}</Text>;
  },
);
