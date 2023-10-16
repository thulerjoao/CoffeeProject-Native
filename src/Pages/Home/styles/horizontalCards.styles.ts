import styled from 'styled-components/native';

// ----BottomCards------

export const CardBottom = styled.TouchableOpacity`
  margin-top: 30px;
  width: 100%;
  height: 115px;
  align-items: center;
  border-radius: 6px 36px 6px 36px;
  background-color: #f3f2f2;
  flex-direction: row;
`;

export const CardBottomImage = styled.Image`
  top: -20px;
  margin-left: 15px;
  width: 95px;
  aspect-ratio: 1;
`;

export const CardBottomTexts = styled.View`
  margin-left: 15px;
`;

export const CardBottomTitle = styled.Text`
  font-weight: 700;
  color: #403937;
  font-size: 16px;
`;

export const CardBottomText = styled.Text`
  color: #8d8585;
  font-size: 11px;
  width: 65%;
  margin-top: 5px;
  text-align: left;
`;

export const CardBottomPrice = styled.Text`
  color: #c47f17;
  margin-top: 10px;
  font-weight: 900;
  font-size: 19px;
`;
