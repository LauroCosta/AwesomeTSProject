import { useNavigation } from '@react-navigation/core';
import React from 'react';
import {Button, View} from 'react-native';

const Feed: React.FC = () => {
  const navigation = useNavigation<StartBottomTabNavigationProp>();

  const handlePress = () => {
    navigation.navigate('home',{
      screen: 'stories',
      params: {
        profile: "Lauro",
      }
    });
  };
  const handlePressToPost = () => {
    navigation.navigate('profile',{
      screen: 'post'
    });
  };
  return (
    <View style={{flex: 1, backgroundColor: 'green'}}>
      <Button title="Go to Stories" onPress={handlePress} />
      <Button title="Go to Posts" onPress={handlePressToPost} />
    </View>
  );
};

export default Feed;
