/* eslint-disable react/react-in-jsx-scope */
import {StatusBar, TouchableOpacity} from 'react-native';
import {
  BackArrowImage,
  CardsContainer,
  CartContainer,
  CartTitle,
  ConfirmButton,
  ConfirmButtonText,
  FooterComponent,
  IfEmptyCards,
  IfEmptyCardsButtom,
  IfEmptyCardsButtomText,
  IfEmptyCardsImage,
  IfEmptyCardsText,
  InvisibleComponent,
  TopContainer,
  ValueContainer,
  ValueNumber,
  ValueText,
} from '../styles/cart.styles';

import BlackBackArrow from '../assets/BlackBackArrow.png';
import Card from './Card';
import whiteCart from '../assets/whiteCart.png';
import {useCartReducer} from '../../../redux/reduces/cartReducer/useCartReducer';
import {
  NavigationProp,
  ParamListBase,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';

export interface CartPageParams {
  backTo: string;
  productId?: string;
}

const Cart = () => {
  const {cartList} = useCartReducer();
  const {navigate} = useNavigation<NavigationProp<ParamListBase>>();
  const route = useRoute<RouteProp<Record<string, CartPageParams>>>();
  const {backTo, productId} = route.params;

  return (
    <CartContainer>
      <StatusBar
        backgroundColor="transparent"
        barStyle="dark-content"
        translucent
      />
      <TopContainer>
        <TouchableOpacity onPress={() => navigate(backTo, {productId})}>
          <BackArrowImage source={BlackBackArrow} />
        </TouchableOpacity>
        <CartTitle>Carrinho</CartTitle>
        <InvisibleComponent />
      </TopContainer>
      <CardsContainer>
        {cartList.length === 0 && (
          <IfEmptyCards>
            <IfEmptyCardsImage source={whiteCart} />
            <IfEmptyCardsText>Seu carrinho está vazio</IfEmptyCardsText>
            <IfEmptyCardsButtom onPress={() => navigate('Home')}>
              <IfEmptyCardsButtomText>VER CATÁLOGO</IfEmptyCardsButtomText>
            </IfEmptyCardsButtom>
          </IfEmptyCards>
        )}
        {cartList.length !== 0 &&
          cartList.map((element, index) => {
            return <Card prop={element} key={index} />;
          })}
      </CardsContainer>
      {cartList.length !== 0 && (
        <FooterComponent>
          <ValueContainer>
            <ValueText>Valor total</ValueText>
            <ValueNumber>R$ 9,90</ValueNumber>
          </ValueContainer>
          <ConfirmButton onPress={() => navigate('Finish')}>
            <ConfirmButtonText>CONFIRMAR PEDIDO</ConfirmButtonText>
          </ConfirmButton>
        </FooterComponent>
      )}
    </CartContainer>
  );
};

export default Cart;
