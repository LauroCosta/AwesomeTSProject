import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from '~/components/Icon';
import HomeStackNavigator from '../HomeStackNavigator';
import ProfileStackNavigator from '../ProfileStackNavigator';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

const BottomTabs = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen
        name="home"
        component={HomeStackNavigator}
        options={{
          header: () => null,
          tabBarIcon: () => <Icon icon="folha1" />,
        }}
      />
      <BottomTab.Screen
        name="profile"
        component={ProfileStackNavigator}
        options={{
          header: () => null,

          tabBarIcon: () => <Icon icon="folha2" />,
        }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabs;
