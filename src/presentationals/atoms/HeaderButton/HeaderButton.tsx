import React, {memo} from 'react';
import {Text, TouchableOpacity, Image} from 'react-native';
import {HIT_SLOP_20} from '../../../constants/constants';
import {headerButtonStyles} from './styles';

export interface HeaderButtonProps {
  onPress: any;
  text?: string;
  testID?: string;
}

export const HeaderButton = memo<HeaderButtonProps>(
  ({onPress, text, testID}) => {
    const styles = headerButtonStyles();

    return (
      <TouchableOpacity
        testID={testID}
        style={styles.container}
        onPress={onPress}
        hitSlop={HIT_SLOP_20}>
        {text ? <Text style={styles.text}>{text}</Text> : null}
        <Image
          style={styles.tinyLogo}
          source={require('../../../assets/arrowLeft.png')}
        />
        {/*{name ? (*/}
        {/*  <Icon*/}
        {/*    name={name}*/}
        {/*    color={buttonColor}*/}
        {/*    testID={composeTestID(testID, 'icon')}*/}
        {/*    style={iconStyle}*/}
        {/*  />*/}
        {/*) : null}*/}
      </TouchableOpacity>
    );
  },
);
