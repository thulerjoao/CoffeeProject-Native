/* eslint-disable react/react-in-jsx-scope */

import { StatusBar } from 'react-native';
import coffee from '../assets/coffee.png';
import purpleCart from '../assets/purpleCart.png';
import whiteBackArrow from '../assets/whiteBackArrow.png';
import Smoke from '../assets/Smoke.png';

import {
  BackAndCart,
  BackArrow,
  CartImage,
  CupImage,
  Description,
  MainTitle,
  Price,
  ProductContainer,
  SmokeImage,
  TitleAndPrice,
  TopContainer,
  TypeText,
} from '../styles/product.styles';

const Product = () => {
  return (
    <ProductContainer>
      <StatusBar
        backgroundColor="transparent"
        barStyle="light-content"
        translucent
      />
      <TopContainer>
        <BackAndCart>
          <BackArrow source={whiteBackArrow} />
          <CartImage source={purpleCart} />
        </BackAndCart>
        <TypeText>Especial</TypeText>
        <TitleAndPrice>
          <MainTitle>Irlandês</MainTitle>
          <Price>R$ 9,90</Price>
        </TitleAndPrice>
        <Description>
          Bebida a base de café, uísque irlandês, açúcar e chantilly
        </Description>
        <SmokeImage source={Smoke} />
        <CupImage source={coffee} />
      </TopContainer>
    </ProductContainer>
  );
};

export default Product;
