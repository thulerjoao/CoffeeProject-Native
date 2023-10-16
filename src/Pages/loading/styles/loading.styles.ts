import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const LoadingContainer = styled.View`
  /* flex: 1; */
  padding: 0px;
  background-color: #7f47f8;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const LoadingBar = styled(LinearGradient).attrs({
  colors: ['#969696', '#fff'], // Defina suas cores aqui
  start: {x: 0, y: 0},
  end: {x: 1.5, y: 0},
})`
  width: 160px;
  height: 2px;
  border-radius: 5px;
  margin-top: 20px;
`;

export const LogoContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  width: 170px;
`;

export const LogoComponent = styled.Image`
  /* margin: 0 16px; */
`;
