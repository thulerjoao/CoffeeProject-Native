/* eslint-disable react/react-in-jsx-scope */
import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { StatusBar } from 'react-native';
import { useAuth } from '../../../contexts/auth';
import { User } from '../../../globalTypes';
import Api from '../../../services/api';
import { checkIfEmailIsValid } from '../../../utils/validateEmail';
import LoginImage from '../assets/LoginImage.png';
import NotTick from '../assets/NotTick.png';
import Ticked from '../assets/Ticked.png';
import {
  AlertText,
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

const Login: React.FC = () => {
  const { navigate } = useNavigation<NavigationProp<ParamListBase>>();
  const [tick, setTick] = useState<boolean>(true);
  const [email, setEmail] = useState<string>('');
  const [isError, setIsError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const { login } = useAuth();
  const backTo = 'Login';

  const handleLogin = async () => {
    const data = {
      email,
      password,
    };
    if (email !== '' && password !== '') {
      if (checkIfEmailIsValid(email)) {
        return await Api.post('/auth', data)
          .then((res) => {
            const token: string = res.data.token;
            const user: User = res.data.user;
            login({ token, user, isChecked: tick });
          })
          .catch((err) => {
            setIsError(true);
            setErrorMessage('Email ou Senha inválidos');
          });
      } else {
        setIsError(true);
        setErrorMessage('Email ou Senha inválidos');
      }
    } else {
      setIsError(true);
      setErrorMessage('Preencha todos os campos');
    }
  };

  const handleClickLogin = () => {
    handleLogin();
  };

  const handleClickNewAccount = () => {
    navigate('CreateAccount', { backTo });
    setEmail('');
    setPassword('');
    setIsError(false);
  };

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
        secureTextEntry
        value={password}
      />
      <BottonContainer>
        <RemembermeContainer onPress={() => setTick(!tick)}>
          <Rememberme>Lembrar-me</Rememberme>
          <TicOrNot source={tick ? Ticked : NotTick} />
        </RemembermeContainer>
        <ForgotPassword>Esquecer a senha?</ForgotPassword>
      </BottonContainer>
      {isError && <AlertText>{errorMessage}</AlertText>}
      <LoginButton onPress={() => handleClickLogin()}>
        <LoginButtonText>ENTRAR</LoginButtonText>
      </LoginButton>

      <CreateAccountContainer>
        <CreateAccountFirstText>Novo por aqui?</CreateAccountFirstText>
        <NewAccountTouch onPress={() => handleClickNewAccount()}>
          <NewAccountTouchText>Criar conta.</NewAccountTouchText>
        </NewAccountTouch>
      </CreateAccountContainer>
    </LoginContainer>
  );
};

export default Login;
