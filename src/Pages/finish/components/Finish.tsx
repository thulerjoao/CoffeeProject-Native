/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import {StatusBar, TouchableOpacity} from 'react-native';
import * as Animatable from 'react-native-animatable';

import {
  FinishBikeImage,
  FinishButton,
  FinishButtonText,
  FinishContainer,
  FinishMessage,
  OrderConfirmedText,
} from '../styles/finish.styles';

import FinishBike from '../assets/FinishBike.png';
import {useEffect, useState} from 'react';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';

const Finish = () => {
  const [wasClicked, setWasClicked] = useState<boolean>(false);
  const [showUp, setShowUp] = useState<boolean>(false);

  const {navigate} = useNavigation<NavigationProp<ParamListBase>>();

  useEffect(() => {}, [wasClicked]);
  const handleClick = () => {
    setWasClicked(!wasClicked);
    setTimeout(() => {
      navigate('Home');
    }, 1200);
  };

  const handleShowUpButton = () => {
    setTimeout(() => {
      setShowUp(true);
    }, 1850);
  };
  handleShowUpButton();

  return (
    <FinishContainer>
      <StatusBar
        backgroundColor="transparent"
        barStyle="dark-content"
        translucent
      />
      <FinishBikeImage>
        <Animatable.Image
          source={FinishBike}
          animation={wasClicked === false ? 'fadeInLeftBig' : 'fadeOutRightBig'}
          duration={1750}
        />
      </FinishBikeImage>

      {/* <FinishBikeImage source={FinishBike} /> */}
      <OrderConfirmedText>Uhu! Pedido confirmado</OrderConfirmedText>
      <FinishMessage>
        Agora é só aguardar que logo o café chegará até você!
      </FinishMessage>
      {showUp && (
        <FinishButton onPress={() => handleClick()}>
          <Animatable.View
            style={{width: '100%'}}
            animation={'bounceInUp'}
            duration={1950}>
            <FinishButtonText>IR PARA A HOME</FinishButtonText>
          </Animatable.View>
        </FinishButton>
      )}
    </FinishContainer>
  );
};

export default Finish;
