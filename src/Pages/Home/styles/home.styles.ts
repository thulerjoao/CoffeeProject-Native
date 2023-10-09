import styled from 'styled-components/native';

export const HomeContainer = styled.ScrollView`
  background-color: white;
  width: 100%;
  min-height: 100%;
`;

export const TopComponent = styled.View`
  height: 365px;
  width: 100%;
  background-color: #272221;
`;

// ------------Location-------------------

export const Location = styled.View`
  max-width: 100%;
  margin-top: 50px;
  padding: 0 32px;
  color: white;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const LocationText = styled.Text`
  color: white;
  font-size: 16px;
  margin-right: 37%;
`;

export const LocationIcon = styled.Image`
  height: 22px;
  margin-right: 5px;
`;

// ---------SearchBar----------------------
export const Search = styled.View`
  flex-direction: column;
  width: 100%;
  padding: 0 32px;
  align-items: center;
`;

export const SearchText = styled.Text`
  width: 100%;
  font-weight: 600;
  margin-top: 35px;
  margin-bottom: 25px;
  flex-direction: column;
  justify-content: flex-start;
  color: white;
  font-size: 20px;
`;

export const SearchBarContainer = styled.View`
  background-color: #403937;
  flex-direction: row;
  align-items: center;
  width: 100%;
  border-radius: 4px;
`;

export const SearchBarIcon = styled.Image`
  background-color: #403937;
  height: 20px;
  margin-left: 15px;
  margin-right: 10px;
`;

export const SearchBarInput = styled.TextInput`
  background-color: #403937;
  font-size: 16px;
  padding: 8px 0;
  color: white;
`;

export const CoffeeImage = styled.Image`
  margin-left: 80%;
  margin-top: 0;
`;

// ---------HorizontalList----------------------

export const HorizontalList = styled.FlatList`
  position: absolute;
  top: 250px;
`;

// ---------VerticalList----------------------

export const BottomComponent = styled.View`
  width: 100%;
  /* background-color: pink; */
  /* min-height: 50000px; */
  margin-top: 215px;
  padding: 0 32px;
  margin-bottom: 80px;
`;

export const TopSection = styled.View`
  width: 100%;
`;

export const TopTitleFirstSection = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: flex-start;
  padding: 15px 0px;
`;

export const TopTitleText = styled.Text`
  font-size: 16px;
  font-weight: 700;
  color: black;
`;

export const TypeButtons = styled.TouchableOpacity`
  margin-right: 10px;
  align-items: center;
  justify-content: center;
  border: 1px solid #7f47f8;
  border-radius: 15px;
`;

export const TypeButtonsText = styled.Text`
  font-size: 12px;
  font-weight: 700;
  padding: 3px 11px;
  text-align: center;
  color: #4b2994;
`;

export const BottomSection = styled.View`
  width: 100%;
`;

export const BottomTitle = styled.Text`
  width: 100%;
  font-size: 14px;
  font-weight: 700;
  margin: 10px 0;
`;

export const BottomSpace = styled.View`
  width: 100%;
  margin-bottom: 30px;
`;
