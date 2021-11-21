import React from 'react';
import {ThemeProvider} from 'styled-components';
import useAppearance from '~/hooks/useAppearence';
import {NavigationContainer} from '@react-navigation/native';
import Routers from './navigation';

const App: React.FC = () => {
  const {theme} = useAppearance();

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Routers />
      </NavigationContainer>
    </ThemeProvider>
  );
};
export default App;
