import {useNavigation} from '@react-navigation/native';
import {useCallback} from 'react';

export const useHomeData = () => {
  const navigation = useNavigation<any>();

  const onNavigationPress = useCallback(() => {
    navigation.navigate('BottomTabNavigator');
  }, [navigation]);
  return {
    onNavigationPress,
  };
};
