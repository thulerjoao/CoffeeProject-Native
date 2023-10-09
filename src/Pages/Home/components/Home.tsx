/* eslint-disable react/react-in-jsx-scope */
import {StatusBar, Text} from 'react-native';
import {
  BottomComponent,
  BottomSection,
  CoffeeImage,
  HomeContainer,
  HorizontalList,
  Location,
  LocationIcon,
  LocationText,
  Search,
  SearchBarContainer,
  SearchBarIcon,
  SearchBarInput,
  SearchText,
  TopComponent,
  TopSection,
  TopTitleFirstSection,
  TopTitleText,
  TypeButtons,
  TypeButtonsText,
} from '../styles/home.styles';
import Icon from '../assets/Icon.png';
import Cart from '../assets/Cart.png';
import Glass from '../assets/Glass.png';
import Coffee from '../assets/Coffee.png';
import Coffee01 from '../assets/Coffee01.png';
import VerticalCard from './VerticalCard';
import HorizontalCard from './HorizontalCard';

const Home = () => {
  const data = [
    {
      id: '1',
      isFirst: true as true,
      imageSource: Coffee01,
      type: 'Tradicional',
      title: 'Latte',
      description: 'Café expresso com o dobro de leite e espuma cremosa',
      price: 'R$ 9,90',
    },
    {
      id: '2',
      imageSource: Coffee01,
      type: 'Tradicional',
      title: 'Latte',
      description: 'Café expresso com o dobro de leite e espuma cremosa',
      price: 'R$ 9,90',
    },
    {
      id: '3',
      imageSource: Coffee01,
      type: 'Tradicional',
      title: 'Latte',
      description: 'Café expresso com o dobro de leite e espuma cremosa',
      price: 'R$ 9,90',
    },
  ];

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
      <HorizontalList
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item}: any) => <VerticalCard data={item} />}
        keyExtractor={(item: {id: string}) => item.id}
      />
      <BottomComponent>
        <TopSection>
          <TopTitleText>Nossos cafés</TopTitleText>
          <TopTitleFirstSection>
            <TypeButtons>
              <TypeButtonsText>Tradicionais</TypeButtonsText>
            </TypeButtons>
            <TypeButtons>
              <TypeButtonsText>Doces</TypeButtonsText>
            </TypeButtons>
            <TypeButtons>
              <TypeButtonsText>Especiais</TypeButtonsText>
            </TypeButtons>
          </TopTitleFirstSection>
        </TopSection>
        <BottomSection>
          <Text>Tradicionais</Text>
          {data.map(item => {
            return <HorizontalCard key={item.id} data={item} />;
          })}
        </BottomSection>
      </BottomComponent>
    </HomeContainer>
  );
};

export default Home;
