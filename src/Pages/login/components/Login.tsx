/* eslint-disable react/react-in-jsx-scope */
import { useState } from 'react';
import { StatusBar } from 'react-native';
import LoginImage from '../assets/LoginImage.png';
import NotTick from '../assets/NotTick.png';
import Ticked from '../assets/Ticked.png';
import {
  BottonContainer,
  CreateAccountContainer,
  CreateAccountFirstText,
  ForgotPassword,
  LoginButton,
  LoginButtonText,
  LoginContainer,
  LoginInput,
  LoginLogo,
  NewAccountTouch,
  NewAccountTouchText,
  Rememberme,
  RemembermeContainer,
  TicOrNot,
} from '../styles/login.style';
import { useAuth } from '../../../contexts/auth';
import Api, { ConnectionApiGet, baseURL } from '../../../services/api';

const Login: React.FC = () => {
  const [tick, setTick] = useState<boolean>(true);
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const { login, user } = useAuth()

  // interface LoginParams {
  //   token: string;
  //   user: User;
  //   isChecked: boolean;
  // }

  const handleLogin = async () => {
    return await ConnectionApiGet(`${baseURL}/status`).then((res)=>{
      console.log(res)
    }).catch((err)=>{
      console.log(err)
    })
    // const data= {
    //   email,
    //   password
    // }
    // console.log(data)
    // const response = await Api.get('/status').then((res)=>{
    //   console.log(res)
    // }).catch((err)=>{console.log(err)})
    // console.log(response)
  }

  const handleClick = () => {handleLogin()};

  return (
    <LoginContainer>
      <StatusBar backgroundColor="transparent" barStyle="dark-content" translucent />
      <LoginLogo source={LoginImage} />
      <LoginInput
        placeholder={'Email'}
        placeholderTextColor={'#8d8585'}
        onChange={(event: any) => setEmail(event.nativeEvent.text)}
        value={email}
      />
      <LoginInput
        placeholder={'Senha'}
        placeholderTextColor={'#8d8585'}
        onChange={(event: any) => setPassword(event.nativeEvent.text)}
        value={password}
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
