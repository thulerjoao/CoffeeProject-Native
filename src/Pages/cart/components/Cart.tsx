/* eslint-disable react/react-in-jsx-scope */
import {StatusBar} from 'react-native';
import {
  BackArrowImage,
  CardsContainer,
  CartContainer,
  CartTitle,
  InvisibleComponent,
  TopContainer,
} from '../styles/cart.styles';

import BlackBackArrow from '../assets/BlackBackArrow.png';
import Card from './Card';
import TopCup01 from '../assets/TopCup01.png';
import TopCup02 from '../assets/TopCup02.png';

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
    {
      id: '3',
      imageSource: TopCup01,
      type: 'Tradicional',
      title: 'Irlandês',
      size: '227ml',
      price: 'R$ 9,90',
    },
    {
      id: '4',
      isFirst: true as true,
      imageSource: TopCup02,
      type: 'Tradicional',
      title: 'Capuccino',
      size: '227ml',
      price: 'R$ 9,90',
    },
    {
      id: '5',
      imageSource: TopCup01,
      type: 'Tradicional',
      title: 'Irlandês',
      size: '227ml',
      price: 'R$ 9,90',
    },
    {
      id: '6',
      imageSource: TopCup02,
      type: 'Tradicional',
      title: 'Capuccino',
      size: '227ml',
      price: 'R$ 9,90',
    },
  ];

  return (
    <CartContainer>
      <StatusBar
        backgroundColor="transparent"
        barStyle="dark-content"
        translucent
      />
      <TopContainer>
        <BackArrowImage source={BlackBackArrow} />
        <CartTitle>Carrinho</CartTitle>
        <InvisibleComponent />
      </TopContainer>
      <CardsContainer>
        {data.map(element => {
          return <Card element={element} key={element.id} />;
        })}
      </CardsContainer>
    </CartContainer>
  );
};

export default Cart;
