import styled, {css} from 'styled-components/native';

// ----TopCards------

export const CardTop = styled.TouchableOpacity`
  margin-left: 32px;
  margin-top: 40px;
  width: 188px;
  height: 245px;
  align-items: center;
  border-radius: 6px 36px 6px 36px;
  background-color: #f3f2f2;

  ${(props: {isFirst: boolean}) =>
    props.isFirst &&
    css`
      /* margin-left: 80px; */
    `}
`;

export const CardTopImage = styled.Image`
  top: -40px;
  position: absolute;
`;

export const CardTopType = styled.Text`
  margin-top: 85px;
  background-color: #ebe5f9;
  color: #4b2994;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 500;
  padding: 2px 12px;
`;

export const CardTopTitle = styled.Text`
  margin-top: 10px;
  font-weight: 700;
  color: #403937;
  font-size: 19px;
`;

export const CardTopText = styled.Text`
  color: #8d8585;
  font-size: 11px;
  margin: 0 9px;
  margin-top: 5px;
  text-align: center;
`;

export const CardTopPrice = styled.Text`
  color: #c47f17;
  margin-top: 17px;
  font-weight: 800;
  font-size: 20px;
`;

// ----BottomCards------
