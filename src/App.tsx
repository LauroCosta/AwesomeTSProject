import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Header from './components/Header';

const App: React.FC = () => {
  return (
    <SafeAreaView style={style.App}>
      <Header />
    </SafeAreaView>
  );
};
export default App;

const style = StyleSheet.create({
  App: {
    flex: 1,
    margin: 20,
  },
});
