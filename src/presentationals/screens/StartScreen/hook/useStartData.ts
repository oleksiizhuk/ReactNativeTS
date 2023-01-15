import {useNavigation} from '@react-navigation/native';
import {useCallback} from 'react';

export const useStartData = () => {
  const navigation = useNavigation<any>();

  const navigateToHome = useCallback(() => {
    navigation.navigate('BottomTabNavigator');
  }, [navigation]);

  return {navigateToHome};
};
