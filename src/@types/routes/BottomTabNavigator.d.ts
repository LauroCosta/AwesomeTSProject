import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {NavigatorScreenParams} from '@react-navigation/core';

declare global {
  export type BottomTabParamList = {
    home: NavigatorScreenParams<HomeStackParamList> | undefined;
    profile: NavigatorScreenParams<ProfileStackParamList> | undefined;
  };

  export type StartBottomTabNavigationProp = BottomTabNavigationProp<
    BottomTabParamList,
    'home'
  >;
}