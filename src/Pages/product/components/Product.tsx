/* eslint-disable react/react-in-jsx-scope */

import {StatusBar} from 'react-native';
import coffee from '../assets/coffee.png';
import purpleCart from '../assets/purpleCart.png';
import whiteBackArrow from '../assets/whiteBackArrow.png';
import Smoke from '../assets/Smoke.png';

import {
  AddButton,
  AddButtonText,
  AddContainer,
  BackAndCart,
  BackArrow,
  BottomContainer,
  CartImage,
  CupImage,
  Description,
  MainTitle,
  MinusAndPlus,
  MinusAndPlusText,
  NumberText,
  Price,
  ProductContainer,
  SelectSizeText,
  SizeButton,
  SizeButtonText,
  SizeContainer,
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
      <BottomContainer>
        <SelectSizeText>Selecione o tamanho:</SelectSizeText>
        <SizeContainer>
          <SizeButton>
            <SizeButtonText>114ml</SizeButtonText>
          </SizeButton>
          <SizeButton>
            <SizeButtonText>140ml</SizeButtonText>
          </SizeButton>
          <SizeButton>
            <SizeButtonText>227ml</SizeButtonText>
          </SizeButton>
        </SizeContainer>
        <AddContainer>
          <MinusAndPlus>
            <MinusAndPlusText>--</MinusAndPlusText>
          </MinusAndPlus>
          <NumberText>1</NumberText>
          <MinusAndPlus>
            <MinusAndPlusText>+</MinusAndPlusText>
          </MinusAndPlus>
          <AddButton>
            <AddButtonText>ADICIONAR</AddButtonText>
          </AddButton>
        </AddContainer>
      </BottomContainer>
    </ProductContainer>
  );
};

export default Product;
