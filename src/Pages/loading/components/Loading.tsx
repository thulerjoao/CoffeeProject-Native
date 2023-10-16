/* eslint-disable react/react-in-jsx-scope */
import {StatusBar} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {
  LoadingContainer,
  LogoComponent,
  LogoContainer,
} from '../styles/loading.styles';
import Cup from '../assets/Cup.png';
import Logo from '../assets/Logo.png';
import {useEffect, useState} from 'react';

const Loading = () => {
  const [initialLogo, setInitialLogo] = useState<boolean>(false);
  const [initialPulse, setInitialPulse] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setInitialLogo(true);
    }, 6000);

    const pulse = setTimeout(() => {
      setInitialPulse(true);
    }, 5000);

    return () => {
      clearTimeout(timer);
      clearTimeout(pulse); // This clears the timer when the component unmounts or when the effect re-runs
    };
  }, []);

  return (
    <LoadingContainer>
      <StatusBar
        backgroundColor="transparent"
        barStyle="light-content"
        translucent
      />
      <LogoContainer>
        {!initialLogo && (
          <Animatable.View
            animation={!initialPulse ? 'pulse' : 'fadeOut'}
            easing="ease-in-out"
            iterationCount={3}
            duration={1700}>
            <LogoComponent source={Cup} />
          </Animatable.View>
        )}
        {initialLogo && (
          <Animatable.Image
            source={Logo}
            animation="zoomInUp"
            easing="ease-in-out"
            duration={1500}
          />
        )}
      </LogoContainer>
      {/* <LoadingBar /> */}
    </LoadingContainer>
  );
};

export default Loading;
