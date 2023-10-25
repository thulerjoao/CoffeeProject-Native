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

  const handleIncrease = () => {
    const newAmount = amount + 1;
    amount < 9 && setAmount(newAmount);
  };

  const handleDecrease = () => {
    const newAmount = amount - 1;
    amount > 1 && setAmount(newAmount);
  };

  const handleRestartAmount = () => {
    setAmount(1);
  };

  return (
    <BottomContainer
      horizontal
      showsHorizontalScrollIndicator={false}
      initialNumToRender={5000}>
      <InternalBottomContainer>
        <BigTrashContainer>
          <BigTrash source={BigTrashIcon} />
        </BigTrashContainer>
        <RightContainer screenWidth={screenWidth}>
          <RightInternalContainer>
            <CoffeeImage source={product?.imageSource} />
            <DescriptionsContainer>
              <NameDescription>{product?.title}</NameDescription>
              <SizeDescription>{prop.size}</SizeDescription>
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
                <LittleTrashContainer onPress={() => handleRestartAmount()}>
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
