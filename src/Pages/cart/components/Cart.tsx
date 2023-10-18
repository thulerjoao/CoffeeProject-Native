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
import TopCup01 from '../assets/TopCup01.png';
import TopCup02 from '../assets/TopCup02.png';
import whiteCart from '../assets/whiteCart.png';

const Cart = () => {
  const data = [
    {
      id: '1',
      imageSource: TopCup01,
      type: 'Tradicional',
      title: 'Irlandês',
      size: '227ml',
      price: 'R$ 9,90',
    },
    {
      id: '2',
      imageSource: TopCup02,
      type: 'Tradicional',
      title: 'Capuccino',
      size: '227ml',
      price: 'R$ 9,90',
    },
    // {
    //   id: '3',
    //   imageSource: TopCup01,
    //   type: 'Tradicional',
    //   title: 'Irlandês',
    //   size: '227ml',
    //   price: 'R$ 9,90',
    // },
    // {
    //   id: '4',
    //   isFirst: true as true,
    //   imageSource: TopCup02,
    //   type: 'Tradicional',
    //   title: 'Capuccino',
    //   size: '227ml',
    //   price: 'R$ 9,90',
    // },
    // {
    //   id: '5',
    //   imageSource: TopCup01,
    //   type: 'Tradicional',
    //   title: 'Irlandês',
    //   size: '227ml',
    //   price: 'R$ 9,90',
    // },
    // {
    //   id: '6',
    //   imageSource: TopCup02,
    //   type: 'Tradicional',
    //   title: 'Capuccino',
    //   size: '227ml',
    //   price: 'R$ 9,90',
    // },
  ];

  return (
    <CartContainer>
      <StatusBar
        backgroundColor="transparent"
        barStyle="dark-content"
        translucent
      />
      <TopContainer>
        <TouchableOpacity>
          <BackArrowImage source={BlackBackArrow} />
        </TouchableOpacity>
        <CartTitle>Carrinho</CartTitle>
        <InvisibleComponent />
      </TopContainer>
      <CardsContainer>
        {data.length === 0 && (
          <IfEmptyCards>
            <IfEmptyCardsImage source={whiteCart} />
            <IfEmptyCardsText>Seu carrinho está vazio</IfEmptyCardsText>
            <IfEmptyCardsButtom>
              <IfEmptyCardsButtomText>VER CATÁLOGO</IfEmptyCardsButtomText>
            </IfEmptyCardsButtom>
          </IfEmptyCards>
        )}
        {data.length !== 0 &&
          data.map(element => {
            return <Card element={element} key={element.id} />;
          })}
      </CardsContainer>
      {data.length !== 0 && (
        <FooterComponent>
          <ValueContainer>
            <ValueText>Valor total</ValueText>
            <ValueNumber>R$ 9,90</ValueNumber>
          </ValueContainer>
          <ConfirmButton>
            <ConfirmButtonText>CONFIRMAR PEDIDO</ConfirmButtonText>
          </ConfirmButton>
        </FooterComponent>
      )}
    </CartContainer>
  );
};

export default Cart;
