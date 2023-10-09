import styled from 'styled-components/native';

export const ProductContainer = styled.View``;

export const TopContainer = styled.View`
  background-color: #272221;
  padding: 0 30px;
  height: 90%;
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
  bottom: 160px;
  left: 50%;
  height: 137px;
  width: 64px;
  aspect-ratio: 1;
  align-items: center;
`;
export const CupImage = styled.Image`
  /* position: absolute; */
  bottom: -100px;
`;

export const BottomContainer = styled.View``;
