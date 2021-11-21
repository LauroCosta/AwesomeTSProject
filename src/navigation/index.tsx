import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '~/screen/Home';
import Profile from '~/screen/Profile';

const Stack = createNativeStackNavigator();

const Routers = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="home" component={Home}></Stack.Screen>
      <Stack.Screen name="profile" component={Profile}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default Routers;
