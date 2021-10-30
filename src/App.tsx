import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

const App: React.FC = () => {
  return (
    <SafeAreaView style={style.App}>
      <Text style={style.Title}>Hello world</Text>
    </SafeAreaView>
  );
};
export default App;

const style = StyleSheet.create({
  App: {
    flex: 1,
    backgroundColor: '#132456',
    justifyContent: 'center',
  },
  Title: {
    color: 'white',
    fontSize: 50,
    textAlign: 'center',
  },
});
