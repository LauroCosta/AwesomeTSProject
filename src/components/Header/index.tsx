import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Props} from './types';

// import { Container } from './styles';

const Header = (props: Props) => {
  return (
    <View>
      <Text style={style.Title}>{props.title}</Text>
      <Text style={style.Subtitle}>{props.name}</Text>
    </View>
  );
};

export default Header;

const style = StyleSheet.create({
  Title: {
    color: 'black',
    fontSize: 30,
  },
  Subtitle: {
    color: 'black',
    fontSize: 15,
  },
});
