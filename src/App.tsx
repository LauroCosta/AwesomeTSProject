import React from 'react';
import {View} from 'react-native';
import {ThemeProvider} from 'styled-components';
import Button from './components/Button';
import Icon from './components/Icon';
import Separator from './components/Separator';
import useAppearance from './hooks/useAppearence';
import {Container} from './style';

const App: React.FC = () => {
  const {theme} = useAppearance();
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <Icon icon="folha1" activeColor="secondary" size={200}></Icon>
          <Separator width={20}/>
          <Icon icon="folha2" size={200}></Icon>
        </View>

        <Button color="error" mode="outlined" loading>
          Change icons
        </Button>
      </Container>
    </ThemeProvider>
  );
};
export default App;
