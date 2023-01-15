import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StartScreen} from '../presentationals/screens/StartScreen';
import BottomTabNavigator from './BottomTabNavigator';
import {GenericScreen} from '../presentationals/screens/TypeScriptScreens/GenericScreen';
import {EnumScreen} from '../presentationals/screens/TypeScriptScreens/EnumScreen';
import {HeaderButton} from '../presentationals/atoms/HeaderButton/HeaderButton';
const Stack = createNativeStackNavigator<any>();

export const RootNavigator = () => {
  // const navigation = useNavigation<any>();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitleAlign: 'center',
        }}>
        <Stack.Screen name={'StartScreen'} component={StartScreen} />
        <Stack.Screen name={'GenericScreen'} component={GenericScreen} />
        <Stack.Screen
          name={'EnumScreen'}
          component={EnumScreen}
          options={({navigation}) => ({
            title: 'Enum',
            headerLeft: () => (
              <HeaderButton
                testID="headerButton"
                onPress={() => navigation.goBack()}
              />
            ),
          })}
        />
        <Stack.Screen
          name={'BottomTabNavigator'}
          component={BottomTabNavigator}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
