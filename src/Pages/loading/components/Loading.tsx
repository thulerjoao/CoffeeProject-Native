/* eslint-disable react/react-in-jsx-scope */
import {Image, StatusBar} from 'react-native';
import {LoadingBar, LoadingContainer} from '../styles/loading.styles';
import Logo from '../assets/Logo.png';

const Loading = () => {
  return (
    <LoadingContainer>
      <StatusBar backgroundColor="#7f47f8" barStyle="light-content" />
      <Image source={Logo} />
      <LoadingBar />
    </LoadingContainer>
  );
};

export default Loading;
