/* eslint-disable react/react-in-jsx-scope */

import {StatusBar, TouchableOpacity} from 'react-native';
import coffee from '../assets/coffee.png';
// import purpleCart from '../assets/purpleCart.png';
import whiteCart from '../assets/whiteCart.png';
import whiteBackArrow from '../assets/whiteBackArrow.png';
import Smoke from '../assets/Smoke.png';
import {RouteProp, useRoute} from '@react-navigation/native';

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
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import {productData} from '../../../globalMoked';
import {useCartReducer} from '../../../redux/reduces/cartReducer/useCartReducer';

export interface ProductPageParams {
  productId?: string;
}

// export interface CartItem {
//   id: string;
//   size: string;
//   amount: number;
//   productId: string;
// }

const Product = () => {
  const route = useRoute<RouteProp<Record<string, ProductPageParams>>>();
  const {productId} = route.params;
  const product = productData.find(element => element.id === productId);
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [wasClicked, setWasClicked] = useState<boolean>(false);
  const [isSelected, setIsSelected] = useState<boolean>(false);
  const [amount, setAmount] = useState<number>(1);
  const {navigate} = useNavigation<NavigationProp<ParamListBase>>();
  const {addCart} = useCartReducer();

  const handleAddProduct = () => {
    if (product) {
      const newProduct = {
        size: selectedSize,
        amount: amount,
        productId: product.id,
      };
      addCart(newProduct);
    }
  };

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
    if (isSelected) {
      handleAddProduct();
    }
  };

  const handleIncrease = () => {
    const newAmount = amount + 1;
    amount < 9 && setAmount(newAmount);
  };

  const handleDecrease = () => {
    const newAmount = amount - 1;
    amount > 1 && setAmount(newAmount);
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
          <TouchableOpacity onPress={() => navigate('Home')}>
            <BackArrow source={whiteBackArrow} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigate('Cart')}>
            <CartImage source={whiteCart} />
          </TouchableOpacity>
        </BackAndCart>
        <TypeText>{product?.type}</TypeText>
        <TitleAndPrice>
          <MainTitle>{product?.title}</MainTitle>
          <Price>{product?.price}</Price>
        </TitleAndPrice>
        <Description>{product?.description}</Description>
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
          <MinusAndPlus onPress={() => handleDecrease()}>
            <MinusAndPlusText>--</MinusAndPlusText>
          </MinusAndPlus>
          <NumberText>{amount}</NumberText>
          <MinusAndPlus onPress={() => handleIncrease()}>
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
