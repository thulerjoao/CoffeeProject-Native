import styled from 'styled-components/native';

export const CartContainer = styled.View`
  height: 100%;
`;

export const TopContainer = styled.View`
  margin-top: 57px;
  flex-direction: row;
  border-bottom-width: 1px;
  border-bottom-color: #ededed;
  justify-content: space-between;
  padding: 0 30px;
  padding-bottom: 25px;
  width: 100%;
`;
export const BackArrowImage = styled.Image``;
export const CartTitle = styled.Text`
  font-size: 15px;
  color: black;
  font-weight: 700;
`;
export const InvisibleComponent = styled.View`
  width: 24px;
`;

// -----

export const CardsContainer = styled.ScrollView`
  padding-bottom: 500px;
  box-sizing: border-box;
`;

// -----

export const FooterComponent = styled.View`
  height: 160px;
  border-top-width: 1px;
  border-top-color: #ededed;
  width: 100%;
  padding: 35px 35px;
  justify-content: space-between;
`;

export const ValueContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const ValueText = styled.Text`
  font-weight: 400;
  font-size: 16px;
  color: black;
`;
export const ValueNumber = styled.Text`
  font-weight: 900;
  font-size: 18px;
  color: black;
`;
export const ConfirmButton = styled.TouchableOpacity`
  width: 100%;
  height: 46px;
  background-color: #c47f16;
  border-radius: 6px;
  align-items: center;
  justify-content: center;
`;
export const ConfirmButtonText = styled.Text`
  color: white;
  font-size: 14px;
  font-weight: 600;
`;
