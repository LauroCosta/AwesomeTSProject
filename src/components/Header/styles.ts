import styled from 'styled-components/native';

export const Container = styled.View`
  border-width: 4px;
  background-color: ${props => props.theme.colors.background.main};
  border-color: ${props => props.theme.colors.secondary.main};
  padding: 10px;
  border-radius: 4px;
`;

export const Title = styled.Text`
  color: ${props => props.theme.colors.primary.main};
  font-size: 20px;
`;

export const Name = styled(Title)`
  font-size: 20px;
`;
