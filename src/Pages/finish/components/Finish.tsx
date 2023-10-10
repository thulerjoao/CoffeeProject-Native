/* eslint-disable react/react-in-jsx-scope */
import {StatusBar} from 'react-native';
import {
  FinishBikeImage,
  FinishButton,
  FinishButtonText,
  FinishContainer,
  FinishMessage,
  OrderConfirmedText,
} from '../styles/finish.styles';

import FinishBike from '../assets/FinishBike.png';

const Finish = () => {
  return (
    <FinishContainer>
      <StatusBar
        backgroundColor="transparent"
        barStyle="dark-content"
        translucent
      />
      <FinishBikeImage source={FinishBike} />
      <OrderConfirmedText>Uhu! Pedido confirmado</OrderConfirmedText>
      <FinishMessage>
        Agora é só aguardar que logo o café chegará até você!
      </FinishMessage>
      <FinishButton>
        <FinishButtonText>IR PARA A HOME</FinishButtonText>
      </FinishButton>
    </FinishContainer>
  );
};

export default Finish;
