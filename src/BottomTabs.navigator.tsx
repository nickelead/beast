import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Analytics, History, Home } from './screens';

const BottomTabs = createBottomTabNavigator();
export const BottomTabsNavigator = () => {
  return (
    <BottomTabs.Navigator>
      <BottomTabs.Screen name="Home" component={Home} />
      <BottomTabs.Screen name="History" component={History} />
      <BottomTabs.Screen name="Analytics" component={Analytics} />
    </BottomTabs.Navigator>
  );
};
