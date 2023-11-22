/* eslint-disable react/react-in-jsx-scope */
import { Dimensions, TouchableOpacity } from 'react-native';
import {
  BigTrash,
  BigTrashContainer,
  BottomContainer,
  BottominternalContainer,
  CoffeeImage,
  DescriptionsContainer,
  InternalBottomContainer,
  LittleTrash,
  LittleTrashContainer,
  MinusAndPlusContainer,
  NameAndPriceContainer,
  NameDescription,
  NumerText,
  PriceDescription,
  RightContainer,
  RightInternalContainer,
  SignText,
  SizeDescription,
} from '../styles/card.styles';

import SmallTrash from '../assets/SmallTrash.png';
import BigTrashIcon from '../assets/BigTrashIcon.png';
import { productData } from '../../../globalMoked';
import { useCartReducer } from '../../../redux/reduces/cartReducer/useCartReducer';

const Card = ({ prop }: any) => {
  const screenWidth = Dimensions.get('window').width;
  const product = productData.find((element) => element.id === prop.productId);
  const { updateCart, deleteCart } = useCartReducer();

  const handleUpdateAmount = (newAmount: number) => {
    if (product) {
      const newCart = {
        id: prop.id,
        size: prop.size,
        amount: newAmount,
        productId: prop.productId,
      };
      updateCart(newCart);
    }
  };

  const handleIncrease = () => {
    const newAmount = prop.amount + 1;
    prop.amount < 9 && handleUpdateAmount(newAmount);
  };

  const handleDecrease = () => {
    const newAmount = prop.amount - 1;
    prop.amount > 1 && handleUpdateAmount(newAmount);
  };

  return (
    <BottomContainer horizontal showsHorizontalScrollIndicator={false} initialNumToRender={5000}>
      <InternalBottomContainer>
        {/* <BigTrashContainer>
          <BigTrash source={BigTrashIcon} />
        </BigTrashContainer> */}
        <RightContainer screenWidth={screenWidth}>
          <RightInternalContainer>
            <CoffeeImage source={product?.imageSource} />
            <DescriptionsContainer>
              <NameAndPriceContainer>
                <NameDescription>{product?.title}</NameDescription>
                <PriceDescription>{`R$ ${(9.9 * prop.amount).toFixed(2)}`}</PriceDescription>
              </NameAndPriceContainer>
              <SizeDescription>{`${prop.size} ml`}</SizeDescription>
              <BottominternalContainer>
                <MinusAndPlusContainer>
                  <TouchableOpacity onPress={() => handleDecrease()}>
                    <SignText>--</SignText>
                  </TouchableOpacity>
                  <NumerText>{prop.amount}</NumerText>
                  <TouchableOpacity onPress={() => handleIncrease()}>
                    <SignText>+</SignText>
                  </TouchableOpacity>
                </MinusAndPlusContainer>
                <LittleTrashContainer onPress={() => deleteCart(prop.id)}>
                  <LittleTrash source={SmallTrash} />
                </LittleTrashContainer>
              </BottominternalContainer>
            </DescriptionsContainer>
          </RightInternalContainer>
        </RightContainer>
      </InternalBottomContainer>
    </BottomContainer>
  );
};

export default Card;
