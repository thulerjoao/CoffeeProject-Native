/* eslint-disable react/react-in-jsx-scope */
import { StatusBar } from 'react-native';
import LoginImage from '../assets/LoginImage.png';
import NotTick from '../assets/NotTick.png';
import Ticked from '../assets/Ticked.png';
import {
  BottonContainer,
  CreateAccountFirstText,
  ForgotPassword,
  LoginButton,
  LoginButtonText,
  LoginContainer,
  LoginInput,
  LoginLogo,
  Rememberme,
  RemembermeContainer,
  TicOrNot,
  NewAccountTouch,
  NewAccountTouchText,
  CreateAccountContainer,
} from '../styles/login.style';
import { useState } from 'react';

const Login: React.FC = () => {
  const [tick, setTick] = useState<boolean>(true);

  const handleClick = () => {};

  return (
    <LoginContainer>
      <StatusBar backgroundColor="transparent" barStyle="dark-content" translucent />
      <LoginLogo source={LoginImage} />
      <LoginInput
        placeholder={'Email'}
        placeholderTextColor={'#8d8585'}
        // onChange={(event: any) => setSearch(event.nativeEvent.text)}
        // value={search}
      />
      <LoginInput
        placeholder={'Senha'}
        placeholderTextColor={'#8d8585'}
        // onChange={(event: any) => setSearch(event.nativeEvent.text)}
        // value={search}
      />
      <BottonContainer>
        <RemembermeContainer onPress={() => setTick(!tick)}>
          <Rememberme>Lembrar-me</Rememberme>
          <TicOrNot source={tick ? Ticked : NotTick} />
        </RemembermeContainer>
        <ForgotPassword>Esquecer a senha?</ForgotPassword>
      </BottonContainer>
      <LoginButton onPress={() => handleClick()}>
        <LoginButtonText>ENTRAR</LoginButtonText>
      </LoginButton>

      <CreateAccountContainer>
        <CreateAccountFirstText>Novo por aqui?</CreateAccountFirstText>
        <NewAccountTouch>
          <NewAccountTouchText>Criar conta.</NewAccountTouchText>
        </NewAccountTouch>
      </CreateAccountContainer>
    </LoginContainer>
  );
};

export default Login;
