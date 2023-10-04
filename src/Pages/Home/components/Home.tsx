/* eslint-disable react/react-in-jsx-scope */
import {Image, StatusBar, Text} from 'react-native';
import {
  BottomComponent,
  CoffeeImage,
  HomeContainer,
  Location,
  LocationIcon,
  LocationText,
  Search,
  SearchBarContainer,
  SearchBarIcon,
  SearchBarInput,
  SearchText,
  TopComponent,
} from '../styles/home.styles';
import Icon from '../assets/Icon.png';
import Cart from '../assets/Cart.png';
import Glass from '../assets/Glass.png';
import Coffee from '../assets/Coffee.png';

const Home = () => {
  return (
    <HomeContainer>
      <StatusBar
        backgroundColor="transparent"
        barStyle="light-content"
        translucent
      />
      <TopComponent>
        <Location>
          <LocationIcon source={Icon} />
          <LocationText>Rio de Janeiro, RJ</LocationText>
          <LocationIcon source={Cart} />
        </Location>
        <Search>
          <SearchText>
            Encontre o café perfeito para qualquer hora do dia
          </SearchText>
          <SearchBarContainer>
            <SearchBarIcon source={Glass} />
            <SearchBarInput
              placeholder={'Pesquisar'}
              placeholderTextColor={'#8d8585'}
            />
          </SearchBarContainer>
          <CoffeeImage source={Coffee} />
        </Search>
      </TopComponent>
      <BottomComponent></BottomComponent>
    </HomeContainer>
  );
};

export default Home;
