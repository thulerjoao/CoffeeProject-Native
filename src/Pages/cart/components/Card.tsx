/* eslint-disable react/react-in-jsx-scope */
import {Dimensions, TouchableOpacity} from 'react-native';
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
  NameDescription,
  NumerText,
  RightContainer,
  RightInternalContainer,
  SignText,
  SizeDescription,
} from '../styles/card.styles';

import SmallTrash from '../assets/SmallTrash.png';
import BigTrashIcon from '../assets/BigTrashIcon.png';
import {useState} from 'react';
import {productData} from '../../../globalMoked';
import {useCartReducer} from '../../../redux/reduces/cartReducer/useCartReducer';
import {CartItem} from '../../../globalTypes';

// {
//     id: '6',
//     imageSource: TopCup02,
//     type: 'Tradicional',
//     title: 'Capuccino',
//     size: '227ml',
//     price: 'R$ 9,90',
//   },

// const cart: any = [
//   {
//     id: '1',
//     size: '227',
//     amount: 1,
//     productId: '1',
//     price: 9.9,
//   },
// ];

const Card = ({prop}: any) => {
  const screenWidth = Dimensions.get('window').width;
  const [amount, setAmount] = useState<number>(1);
  const product = productData.find(element => element.id === prop.productId);
  const {updateCart, deleteCart} = useCartReducer();

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
    <BottomContainer
      horizontal
      showsHorizontalScrollIndicator={false}
      initialNumToRender={5000}>
      <InternalBottomContainer>
        {/* <BigTrashContainer>
          <BigTrash source={BigTrashIcon} />
        </BigTrashContainer> */}
        <RightContainer screenWidth={screenWidth}>
          <RightInternalContainer>
            <CoffeeImage source={product?.imageSource} />
            <DescriptionsContainer>
              <NameDescription>{product?.title}</NameDescription>
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
