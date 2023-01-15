import React from 'react';
import {View, ScrollView} from 'react-native';
import {Title} from '../../atoms/Title';
import {genericTemplateStyles} from './styles';

export const GenericTemplate = () => {
  const styles = genericTemplateStyles();
  return (
    <View style={styles.container}>
      <ScrollView>
        <Title title={'Generic'} />
      </ScrollView>
    </View>
  );
};
