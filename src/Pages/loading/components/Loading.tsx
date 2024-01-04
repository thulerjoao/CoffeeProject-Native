/* eslint-disable react/react-in-jsx-scope */
import { StatusBar } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { LoadingContainer, LogoComponent, LogoContainer } from '../styles/loading.styles';
import Cup from '../assets/Cup.png';
import LogoText from '../assets/LogoText.png';
import { useState } from 'react';
import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';

const Loading: React.FC = () => {
  const [startEnd, setStartEnd] = useState<boolean>(false);
  const { navigate } = useNavigation<NavigationProp<ParamListBase>>();

  const goToHome = () => {
    setTimeout(() => {
      navigate('CreateAccount');
    }, 3400);
  };

  const handleStart = () => {
    setTimeout(() => {
      setStartEnd(true);
    }, 1800);
  };
  handleStart();
  goToHome();

  return (
    <LoadingContainer>
      <StatusBar backgroundColor="transparent" barStyle="light-content" translucent />
      <Animatable.View animation={startEnd ? 'tada' : ''} easing="ease-in-out" duration={1000}>
        <LogoContainer>
          <Animatable.View animation={'fadeInLeftBig'} easing="ease-in-out" duration={1600}>
            <LogoComponent source={Cup} />
          </Animatable.View>
          <Animatable.Image
            source={LogoText}
            animation={'fadeInRightBig'}
            easing="ease-in-out"
            duration={1600}
          />
        </LogoContainer>
      </Animatable.View>
      {/* <LoadingBar /> */}
    </LoadingContainer>
  );
};

export default Loading;
