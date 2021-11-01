import React from 'react';
import {View} from 'react-native';
import {ThemeProvider} from 'styled-components';
import Header from './components/Header';
import Icon from './components/Icon';
import Text from './components/Text';
import useAppearance from './hooks/useAppearence';
import {Container} from './style';

const App: React.FC = () => {
  const {theme} = useAppearance();
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <Icon icon="folha1" activeColor="secondary" size={100}></Icon>
          <Icon icon="folha2" size={100}></Icon>
        </View>
      </Container>
    </ThemeProvider>
  );
};
export default App;
