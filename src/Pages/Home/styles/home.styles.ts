import styled from 'styled-components/native';

export const HomeContainer = styled.View`
  background-color: white;
  width: 100%;
  min-height: 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const TopComponent = styled.View`
  height: 365px;
  width: 100%;
  background-color: #272221;
`;

export const BottomComponent = styled.View`
  width: 100%;
  margin-top: 215px;
  background-color: white;
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
  /* min-height: 280px; */
  padding: 0 15%;
  top: 250px;
`;
