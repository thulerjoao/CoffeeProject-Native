/* eslint-disable react/react-in-jsx-scope */
import { StatusBar } from 'react-native';
import {
  CreateAccountButton,
  CreateAccountButtonText,
  CreateAccountContainer,
  CreateAccountInput,
  TopText,
} from '../styles/createAccount.style';
import { useState } from 'react';
import Api from '../../../services/api';

const CreateAccount: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  const handleClick = async () => {
    const data = {
      name,
      email,
      password,
      confirmPassword,
    };
    if (name !== '' && email !== '' && password !== '' && confirmPassword === password) {
      console.log('entrei')
      return await Api.post('/user', data)
        .then((res) => {
          console.log(res.data) 
        })
        .catch((err) => {
          console.log(err.data) 
        });
    }
  };

  return (
    <CreateAccountContainer>
      <StatusBar backgroundColor="transparent" barStyle="dark-content" translucent />
      <TopText>Cadastro de usuário:</TopText>
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
      <CreateAccountButton onPress={() => handleClick()}>
        <CreateAccountButtonText>CADASTRAR</CreateAccountButtonText>
      </CreateAccountButton>
    </CreateAccountContainer>
  );
};

export default CreateAccount;
