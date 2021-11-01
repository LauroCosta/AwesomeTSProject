import React from 'react';
import {ThemeProvider} from 'styled-components';
import Header from './components/Header';
import Text from './components/Text';
import useAppearance from './hooks/useAppearence';
import {Container} from './style';

const App: React.FC = () => {
  const {theme} = useAppearance();
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header />
        <Text typography="h6" color="primary">
          jhgkjffhg
        </Text>
      </Container>
    </ThemeProvider>
  );
};
export default App;
