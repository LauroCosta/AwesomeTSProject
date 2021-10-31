import React, {useState} from 'react';
import {Button, SafeAreaView, StyleSheet} from 'react-native';
import Header from './components/Header';

const App: React.FC = () => {
  const [name, setName] = useState<string>('Lauro');
  const [title] = useState<string>('Olá, ');

  const handlePressButton = () => {
    setName('João Pedro 2');
  };

  return (
    <SafeAreaView style={style.App}>
      <Header name={name} title={title} />
      <Button title="Change name" onPress={handlePressButton} />
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
