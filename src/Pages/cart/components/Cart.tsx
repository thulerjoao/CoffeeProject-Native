/* eslint-disable react/react-in-jsx-scope */
import {Dimensions, StatusBar} from 'react-native';
import {
  BackArrowImage,
  BigTrash,
  BigTrashContainer,
  BottomContainer,
  BottominternalContainer,
  CardsContainer,
  CartContainer,
  CartTitle,
  CoffeeImage,
  DescriptionsContainer,
  InternalBottomContainer,
  InvisibleComponent,
  LittleTrash,
  LittleTrashContainer,
  MinusAndPlusContainer,
  NameDescription,
  NumerText,
  RightContainer,
  RightInternalContainer,
  SignText,
  SizeDescription,
  TopContainer,
} from '../styles/cart.styles';

import BlackBackArrow from '../assets/BlackBackArrow.png';
// import TopCup01 from '../assets/TopCup01.png';
import TopCup02 from '../assets/TopCup02.png';
import BigTrashIcon from '../assets/BigTrashIcon.png';
import SmallTrash from '../assets/SmallTrash.png';

const Cart = () => {
  const screenWidth = Dimensions.get('window').width;

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
      <CardsContainer>CARDS HERE</CardsContainer>
      <BottomContainer horizontal showsHorizontalScrollIndicator={false}>
        <InternalBottomContainer>
          <BigTrashContainer>
            <BigTrash source={BigTrashIcon} />
          </BigTrashContainer>
          <RightContainer screenWidth={screenWidth}>
            <RightInternalContainer screenWidth={screenWidth}>
              <CoffeeImage source={TopCup02} />
              <DescriptionsContainer>
                <NameDescription>Capuccino</NameDescription>
                <SizeDescription>227ml</SizeDescription>
                <BottominternalContainer>
                  <MinusAndPlusContainer>
                    <SignText>--</SignText>
                    <NumerText>1</NumerText>
                    <SignText>+</SignText>
                  </MinusAndPlusContainer>
                  <LittleTrashContainer>
                    <LittleTrash source={SmallTrash} />
                  </LittleTrashContainer>
                </BottominternalContainer>
              </DescriptionsContainer>
            </RightInternalContainer>
          </RightContainer>
        </InternalBottomContainer>
      </BottomContainer>
    </CartContainer>
  );
};

export default Cart;
