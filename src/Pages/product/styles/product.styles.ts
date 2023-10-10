import styled from 'styled-components/native';

export const ProductContainer = styled.View`
  height: 100%;
`;

export const TopContainer = styled.View`
  background-color: #272221;
  padding: 0 30px;
  height: 73%;
`;

export const BackAndCart = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 25px;
  padding: 20px 0;
`;
export const BackArrow = styled.Image``;
export const CartImage = styled.Image``;

export const TypeText = styled.Text`
  background-color: #403937;
  color: white;
  font-size: 12px;
  width: 75px;
  border-radius: 15px;
  text-align: center;
  padding: 4px 0;
  margin-bottom: 10px;
`;

export const TitleAndPrice = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
`;
export const MainTitle = styled.Text`
  color: white;
  font-size: 23px;
  font-weight: 600;
`;
export const Price = styled.Text`
  color: #dbac2c;
  font-size: 30px;
  font-weight: 900;
`;

export const Description = styled.Text`
  color: white;
  font-weight: 300;
  margin-top: 15px;
  font-size: 15px;
  width: 90%;
`;

export const SmokeImage = styled.Image`
  position: absolute;
  z-index: 1;
  top: 49%;
  left: 50%;
  height: 137px;
  width: 64px;
  aspect-ratio: 1;
  align-items: center;
`;
export const CupImage = styled.Image`
  /* position: absolute; */
  bottom: -17%;
`;

// --------BottomPart-----

export const BottomContainer = styled.View`
  padding: 0 30px;
  height: 27%;
  padding-top: 35px;
  box-sizing: border-box;
`;

export const SelectSizeText = styled.Text`
  font-size: 13px;
`;

export const SizeContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
export const SizeButton = styled.TouchableOpacity`
  background-color: #ededed;
  border-radius: 6px;
  width: 100px;
  height: 40px;
  justify-content: center;
  margin-top: 8px;
`;
export const SizeButtonText = styled.Text`
  width: 100%;
  text-align: center;
  color: black;
`;

export const AddContainer = styled.View`
  flex-direction: row;
  background-color: #ededed;
  margin-top: 20px;
  border-radius: 6px;
  height: 62px;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
`;

export const MinusAndPlus = styled.TouchableOpacity``;
export const MinusAndPlusText = styled.Text`
  color: #7f47f8;
  font-size: 30px;
  font-weight: 300;
  text-align: center;
  padding: 0 10px;
`;
export const NumberText = styled.Text`
  color: black;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
`;
export const AddButton = styled.TouchableOpacity`
  width: 179px;
  height: 46px;
  background-color: #4b2994;
  justify-content: center;
  border-radius: 6px;
`;
export const AddButtonText = styled.Text`
  color: white;
  width: 100%;
  text-align: center;
  font-weight: 600;
`;
