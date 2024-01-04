/* eslint-disable react/react-in-jsx-scope */
import { StatusBar } from 'react-native';
import {
  CreateAccountButton,
  CreateAccountButtonText,
  CreateAccountContainer,
  CreateAccountInput,
  TopText,
} from '../styles/createAccount.style';

const CreateAccount: React.FC = () => {
  const handleClick = () => {};

  return (
    <CreateAccountContainer>
      <StatusBar backgroundColor="transparent" barStyle="dark-content" translucent />
      <TopText>Cadastro de usuário:</TopText>
      <CreateAccountInput
        placeholder={'Nome'}
        placeholderTextColor={'#8d8585'}
        // onChange={(event: any) => setSearch(event.nativeEvent.text)}
        // value={search}
      />
      <CreateAccountInput
        placeholder={'Email'}
        placeholderTextColor={'#8d8585'}
        // onChange={(event: any) => setSearch(event.nativeEvent.text)}
        // value={search}
      />
      <CreateAccountInput
        placeholder={'Senha'}
        placeholderTextColor={'#8d8585'}
        // onChange={(event: any) => setSearch(event.nativeEvent.text)}
        // value={search}
      />
      <CreateAccountInput
        placeholder={'Confirmar Senha'}
        placeholderTextColor={'#8d8585'}
        // onChange={(event: any) => setSearch(event.nativeEvent.text)}
        // value={search}
      />
      <CreateAccountButton onPress={() => handleClick()}>
        <CreateAccountButtonText>CADASTRAR</CreateAccountButtonText>
      </CreateAccountButton>
    </CreateAccountContainer>
  );
};

export default CreateAccount;
