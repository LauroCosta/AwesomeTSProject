import React, {useRef} from 'react';
import {Alert, View} from 'react-native';
import {ThemeProvider} from 'styled-components';
import Button from '~/components/Button';
import Icon from '~/components/Icon';
import Input from '~/components/Input';
import {InputValueRef} from '~/components/Input/types';
import Separator from '~/components/Separator';
import useAppearance from '~/hooks/useAppearence';
import {Container} from './style';
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
