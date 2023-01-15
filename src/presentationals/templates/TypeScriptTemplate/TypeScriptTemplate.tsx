import React, {useCallback, FC} from 'react';
import {
  Text,
  FlatList,
  TouchableOpacity,
  ListRenderItemInfo,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {dataType, ITypeScriptTemplate} from '../../screens/TypeScript/types';
import {typeScriptStyles} from './styles';
import {capitalizeFirstLetter} from '../../../utils/capitalizeFirstLetter';

export const TypeScriptTemplate: FC<ITypeScriptTemplate> = ({category}) => {
  const navigation = useNavigation<any>();
  const styles = typeScriptStyles();
  const navigateToCategory = useCallback(
    (name: string) => {
      console.log('name = ', `${capitalizeFirstLetter(name)}Screen`);
      navigation.navigate(`${capitalizeFirstLetter(name)}Screen`);
    },
    [navigation],
  );

  const renderItem = useCallback(
    ({item}: ListRenderItemInfo<dataType>) => {
      console.log(item);
      return (
        <TouchableOpacity
          onPress={() => navigateToCategory(item.name)}
          style={styles.categoryContainer}>
          <Text style={styles.text} numberOfLines={1}>
            {item.name}
          </Text>
          <Text style={styles.description} numberOfLines={3}>
            {item.description}
          </Text>
        </TouchableOpacity>
      );
    },
    [navigateToCategory, styles],
  );

  return (
    <FlatList
      data={category}
      columnWrapperStyle={{flex: 0.33, justifyContent: 'space-around'}}
      renderItem={renderItem}
      numColumns={3}
      keyExtractor={(_, index) => index.toString()}
    />
  );
};
