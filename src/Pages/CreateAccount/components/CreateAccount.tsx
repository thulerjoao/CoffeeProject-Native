/* eslint-disable react/react-in-jsx-scope */
import { StatusBar } from 'react-native';
import {
  AlertText,
  CreateAccountButton,
  CreateAccountButtonText,
  CreateAccountContainer,
  CreateAccountInput,
  InputContainer,
  TopText,
} from '../styles/createAccount.style';
import { useEffect, useState } from 'react';
import Api from '../../../services/api';
import { User } from '../../../globalTypes';
import { useAuth } from '../../../contexts/auth';
import { checkIfEmailIsValid } from '../../../utils/validateEmail';

const CreateAccount: React.FC = () => {
  const [isError, setIsError] = useState<boolean>(false);
  const [errorType, setErrorType] = useState<string>();
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const { login } = useAuth();

  type MessageType = 'empty' | 'name' | 'email' | 'password' | 'confirmpassword';

  enum MessageEnum {
    EMPTY = 'empty',
    NAME = 'name',
    EMAIL = 'email',
    PASSWORD = 'password',
    CONFIRMPASSWORD = 'confirmpassword',
  }

  const handleErrorMessage = () => {
    switch (errorType) {
      case MessageEnum.EMPTY:
        return 'Preencha todos os campos';
      case MessageEnum.NAME:
        return 'Nome de usuário inválio';
      case MessageEnum.EMAIL:
        return 'Email Inválido';
      case MessageEnum.PASSWORD:
        return 'Forneça uma senha forte';
      case MessageEnum.CONFIRMPASSWORD:
        return 'As senhas não coincidem';
    }
  };

  const handleErrorElse = (prop: MessageType) => {
      setIsError(true);
      setErrorType(prop);
  }

  const handleClick = async () => {
    const data = {
      name,
      email,
      password,
      confirmPassword,
    };
    const loginData = {
      email,
      password,
    };
    if (name !== '' && email !== '' && password !== '' && confirmPassword !== '') {
      if (checkIfEmailIsValid(email)) {
        if(password === confirmPassword){
          return await Api.post('/user', data)
            .then((res) => {
              Api.post('/auth', loginData)
                .then(() => {
                  const token: string = res.data.token;
                  const user: User = res.data.user;
                  login({ token, user, isChecked: true });
                })
                .catch(() => console.log('deu ruim aqui'));
            })
            .catch((err) => {
              console.log(err.data);
            });
        }else{
          handleErrorElse('confirmpassword')
        }
      }else {
        handleErrorElse('email')
      }
    } else {
      handleErrorElse('empty')
    }
  };

  return (
    <CreateAccountContainer>
      <StatusBar backgroundColor="transparent" barStyle="dark-content" translucent />
      <TopText>Cadastro de usuário:</TopText>
      <InputContainer>
        <CreateAccountInput
          placeholder={'Nome'}
          placeholderTextColor={'#8d8585'}
          onChange={(event: any) => setName(event.nativeEvent.text)}
          value={name}
        />
        <CreateAccountInput
          placeholder={'Email'}
          placeholderTextColor={'#8d8585'}
          onChange={(event: any) => setEmail(event.nativeEvent.text)}
          value={email}
        />
        <CreateAccountInput
          placeholder={'Senha'}
          placeholderTextColor={'#8d8585'}
          onChange={(event: any) => setPassword(event.nativeEvent.text)}
          value={password}
        />
        <CreateAccountInput
          placeholder={'Confirmar Senha'}
          placeholderTextColor={'#8d8585'}
          onChange={(event: any) => setConfirmPassword(event.nativeEvent.text)}
          value={confirmPassword}
        />
      </InputContainer>
      {isError && <AlertText>{handleErrorMessage()}</AlertText>}
      <CreateAccountButton onPress={() => handleClick()}>
        <CreateAccountButtonText>CADASTRAR</CreateAccountButtonText>
      </CreateAccountButton>
    </CreateAccountContainer>
  );
};

export default CreateAccount;
