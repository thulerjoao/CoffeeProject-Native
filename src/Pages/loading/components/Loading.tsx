/* eslint-disable react/react-in-jsx-scope */
import {StatusBar} from 'react-native';
import {LoadingContainer, LogoComponent} from '../styles/loading.styles';
import Logo from '../assets/Logo.png';

const Loading = () => {
  return (
    <LoadingContainer>
      <StatusBar
        backgroundColor="transparent"
        barStyle="light-content"
        translucent
      />
      <LogoComponent source={Logo} />
      {/* <LoadingBar /> */}
    </LoadingContainer>
  );
};

export default Loading;
