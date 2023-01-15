import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen} from '../presentationals/screens/Home';
import {TypeScriptScreen} from '../presentationals/screens/TypeScript';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator>
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
