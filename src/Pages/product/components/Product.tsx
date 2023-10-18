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
import {useState} from 'react';

const Product = () => {
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [wasClicked, setWasClicked] = useState<boolean>(false);
  const [isSelected, setIsSelected] = useState<boolean>(false);

  const handleSelectedSize = (prop: string) => {
    setSelectedSize(prop);
    setIsSelected(true);
    setWasClicked(false);
  };

  const handleSizeReturn = (prop: string) => {
    if (selectedSize === prop) {
      return true;
    }
    return false;
  };

  const checkSelected = () => {
    setWasClicked(true);
  };

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
        <SelectSizeText isSelected={isSelected} wasClicked={wasClicked}>
          Selecione o tamanho:
        </SelectSizeText>
        <SizeContainer>
          <SizeButton
            isSelected={isSelected}
            wasClicked={wasClicked}
            selectedSize={handleSizeReturn('114')}
            onPress={() => handleSelectedSize('114')}>
            <SizeButtonText selectedSize={handleSizeReturn('114')}>
              114ml
            </SizeButtonText>
          </SizeButton>
          <SizeButton
            isSelected={isSelected}
            wasClicked={wasClicked}
            selectedSize={handleSizeReturn('140')}
            onPress={() => handleSelectedSize('140')}>
            <SizeButtonText selectedSize={handleSizeReturn('140')}>
              140ml
            </SizeButtonText>
          </SizeButton>
          <SizeButton
            isSelected={isSelected}
            wasClicked={wasClicked}
            selectedSize={handleSizeReturn('227')}
            onPress={() => handleSelectedSize('227')}>
            <SizeButtonText selectedSize={handleSizeReturn('227')}>
              227ml
            </SizeButtonText>
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
          <AddButton
            isSelected={isSelected}
            wasClicked={wasClicked}
            onPress={() => checkSelected()}>
            <AddButtonText>ADICIONAR</AddButtonText>
          </AddButton>
        </AddContainer>
      </BottomContainer>
    </ProductContainer>
  );
};

export default Product;
