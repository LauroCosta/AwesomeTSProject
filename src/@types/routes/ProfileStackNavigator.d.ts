import {RouteProp} from '@react-navigation/core';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

declare global {
  export type ProfileStackParamList = {
    perfil: undefined;
    post: undefined;
  };

  export type ProfileStackNavigationProp = NativeStackNavigationProp<
    ProfileStackParamList,
    'perfil'
  >;
}
