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
  );
};

export default Card;
