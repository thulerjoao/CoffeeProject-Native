import styled from 'styled-components/native';

export const BottomContainer = styled.ScrollView`
  display: flex;
  width: 100%;
  flex-direction: row;
`;

export const InternalBottomContainer = styled.View`
  flex-direction: row;
  height: 117px;
  ${(props: any) =>
    props.screenWidth && `width: ${calc(props.screenWidth + 200)}px`};
`;

export const BigTrashContainer = styled.TouchableOpacity`
  background-color: #f2dfd8;
  width: 100px;
  align-items: center;
  justify-content: center;
`;
export const BigTrash = styled.Image``;

interface RightContainerProps {
  screenWidth?: string;
}

export const RightContainer = styled.View<RightContainerProps>`
  border-bottom-width: 1px;
  border-bottom-color: #ededed;
  ${(props: any) =>
    props.screenWidth ? `width: ${props.screenWidth}px` : '100%'}
`;

export const RightInternalContainer = styled.View`
  flex-direction: row;
  /* background-color: pink; */
  height: 100%;
  width: 250px;
  position: absolute;
  /* ${(props: any) =>
    props.screenWidth ? `right: ${props.screenWidth * 0.3}px` : '0'}; */
  left: 7%;
  align-items: center;
`;

export const CoffeeImage = styled.Image``;

export const DescriptionsContainer = styled.View`
  height: 100%;
  margin-left: 15px;
`;

export const NameAndPriceContainer = styled.View`
  margin-top: 14px;
  flex-direction: row;
  justify-content: space-between;
`;
export const NameDescription = styled.Text`
  font-size: 14px;
  font-weight: 400;
  color: black;
  width: 70%;
`;
export const PriceDescription = styled.Text`
  font-size: 15px;
  font-weight: 800;
  color: black;
`;

export const SizeDescription = styled.Text`
  font-size: 14px;
  font-weight: 400;
`;

export const BottominternalContainer = styled.View`
  flex-direction: row;
  margin-top: 8px;
  align-items: center;
`;

export const MinusAndPlusContainer = styled.View`
  flex-direction: row;
  border: 2px solid #ededed;
  border-radius: 6px;
  align-items: center;
  width: 100px;
  max-height: 35px;
  justify-content: space-between;
  padding: 0 9px;
  box-sizing: border-box;
`;
export const SignText = styled.Text`
  font-size: 23px;
  font-weight: 300;
  text-align: center;
  justify-content: center;
  padding: 0;
  color: #7f47f8;
  /* width: 20px; */
`;
export const NumerText = styled.Text`
  width: 15px;
  font-size: 17px;
  font-weight: 600;
  text-align: center;
`;
export const LittleTrashContainer = styled.TouchableOpacity`
  background-color: #ededed;
  height: 36px;
  width: 36px;
  border-radius: 6px;
  margin-left: 6px;
  align-items: center;
  justify-content: center;
`;
export const LittleTrash = styled.Image``;

function calc(arg0: any) {
  throw new Error('Function not implemented.');
}
