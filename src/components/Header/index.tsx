import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

// import { Container } from './styles';

const Header: React.FC = () => {
  return (
    <View>
      <Text style={style.Title}>Olá,</Text>
      <Text style={style.Subtitle}>Lauro</Text>
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
