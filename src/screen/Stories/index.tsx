import { useRoute } from '@react-navigation/core';
import React from 'react';
import { View } from 'react-native';

const Stories: React.FC = () => {
  const {params} = useRoute<StoriesHomeStackRouteProp>();
  console.log(params.profile);
  return <View style={{flex: 1, backgroundColor: 'orange'}}/>;
}

export default Stories;
