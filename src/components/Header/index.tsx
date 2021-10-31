import React from 'react';

import {Container, Name, Title} from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <Title>Bem-Vindo!</Title>
      <Name>Lauro</Name>
    </Container>
  );
};

export default Header;
