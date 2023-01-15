import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen} from '../presentationals/screens/Home';
import {TypeScriptScreen} from '../presentationals/screens/TypeScript';
import {TabBar} from '../presentationals/atoms/TabBar';
import {HeaderButton} from '../presentationals/atoms/HeaderButton/HeaderButton';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({route, navigation}) => {
        console.log('navigationProps navigationPropsss = ', navigation);
        return {
          headerShadowVisible: false,
          headerTitleAlign: 'center',
          headerTitleStyle: {backgroundColor: 'white'},
          title: `navigation.${route.name}`,
          headerLeft: () => (
            <HeaderButton onPress={() => navigation.goBack()} />
          ),
          tabBarButton: navigationProps => {
            return <TabBar name={route.name} navigation={navigation} navigationProps={navigationProps}/>;
          },
        };
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Home',
        }}
      />
      <Tab.Screen name="TS" component={TypeScriptScreen} />
      <Tab.Screen name="English" component={TypeScriptScreen} />
    </Tab.Navigator>
  );
}
