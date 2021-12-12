import {RouteProp} from '@react-navigation/core';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

declare global {
  export type SignInStackParamList = {
    access: undefined;
    login: undefined;
    onBoarding: undefined;
    signUp: undefined;
  };

  export type SignInStackNavigationProp = NativeStackNavigationProp<
    SignInStackParamList,
    'access'
  >;

  // export type StoriesSignInStackRouteProp = RouteProp<
  //   SignInStackParamList,
  //   'stories'
  // >;
}
