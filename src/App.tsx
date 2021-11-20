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

const App: React.FC = () => {
  const {theme} = useAppearance();

  const refEmail = useRef<InputValueRef>({value: ''});
  const refPassword = useRef<InputValueRef>({value: ''});

  const handlePress = () => {
    Alert.alert(
      refEmail.current?.value || 'null',
      refPassword.current?.value || 'null',
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Container>
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <Icon icon="folha2" size={200}></Icon>
          </View>
          <View>
            <Input
              ref={refEmail}
              label="E-mail"
              iconPosition="right"
              placeholder="jonhdoe@gmail.com"
              icon="folha2"
            />
            <Separator height={20} />
            <Input
              ref={refPassword}
              secureTextEntry
              label="Password"
              placeholder="Sua senha"
            />
          </View>
          <Button color="secondary" mode="contained" onPress={handlePress}>
            Login
          </Button>
          <Separator height={20} />
        </Container>
      </NavigationContainer>
    </ThemeProvider>
  );
};
export default App;
