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

// {
//     id: '6',
//     imageSource: TopCup02,
//     type: 'Tradicional',
//     title: 'Capuccino',
//     size: '227ml',
//     price: 'R$ 9,90',
//   },

const Card = ({element}: any) => {
  const screenWidth = Dimensions.get('window').width;

  const [amount, setAmount] = useState<number>(1);

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
            <CoffeeImage source={element.imageSource} />
            <DescriptionsContainer>
              <NameDescription>{element.title}</NameDescription>
              <SizeDescription>{element.size}</SizeDescription>
              <BottominternalContainer>
                <MinusAndPlusContainer>
                  <TouchableOpacity onPress={() => handleDecrease()}>
                    <SignText>--</SignText>
                  </TouchableOpacity>
                  <NumerText>{amount}</NumerText>
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
