import {RouteProp} from '@react-navigation/core';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

declare global {
  export type HomeStackParamList = {
    feed: undefined;
    stories: {profile: string};
  };

  export type HomeStackNavigationProp = NativeStackNavigationProp<
    HomeStackParamList,
    'feed'
  >;

  export type StoriesHomeStackRouteProp = RouteProp<
    HomeStackParamList,
    'stories'
  >;
}
