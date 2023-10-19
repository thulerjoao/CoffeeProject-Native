/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import {Dimensions, StatusBar} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {
  BottomComponent,
  BottomSection,
  BottomSpace,
  BottomTitle,
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
// import Coffee01 from '../assets/Coffee01.png';
import VerticalCard from './VerticalCard';
import HorizontalCard from './HorizontalCard';
import {useState} from 'react';
import {CoffeeItem} from '../../../globalTypes';
import {useSelector} from 'react-redux';
import {RootState} from '../../../store';

const Home: React.FC = () => {
  const {list} = useSelector((state: RootState) => state.productsReducer);

  const renderItem = ({
    item,
    index,
    parallaxProps,
  }: {
    item?: CoffeeItem;
    index?: number;
    parallaxProps?: any;
  }) => {
    const scale = (parallaxProps?.style?.transform[0]?.scale || 1) * 0.5;

    const cardStyle = {transform: [{scale}], opacity: 1};

    return <VerticalCard key={index} data={item} style={cardStyle} />;
  };

  const screenWidth = Dimensions.get('window').width;

  const [selected, setSelected] = useState<string>('tradicionais');

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
      <HorizontalList>
        <Carousel
          data={list}
          renderItem={renderItem}
          sliderWidth={screenWidth} // Largura do carrossel
          itemWidth={220} // Largura de cada item do carrossel
          layout={'default'} // Tipo de layout (pode ser 'default', 'stack', 'tinder', etc.)
          layoutCardOffset={0} // Espaçamento entre os cartões
          horizontal // Para um carrossel horizontal
          showsHorizontalScrollIndicator={false} // Ocultar a barra de rolagem horizontal
          activeSlideAlignment={'start'} // Alinhar o slide ativo à esquerda
        />
      </HorizontalList>
      <BottomComponent>
        <TopSection>
          <TopTitleText>Nossos cafés</TopTitleText>
          <TopTitleFirstSection>
            <TypeButtons
              selected={selected === 'tradicionais' && true}
              onPress={() => setSelected('tradicionais')}>
              <TypeButtonsText selected={selected === 'tradicionais' && true}>
                Tradicionais
              </TypeButtonsText>
            </TypeButtons>
            <TypeButtons
              selected={selected === 'doces' && true}
              onPress={() => setSelected('doces')}>
              <TypeButtonsText selected={selected === 'doces' && true}>
                Doces
              </TypeButtonsText>
            </TypeButtons>
            <TypeButtons
              selected={selected === 'especiais' && true}
              onPress={() => setSelected('especiais')}>
              <TypeButtonsText selected={selected === 'especiais' && true}>
                Especiais
              </TypeButtonsText>
            </TypeButtons>
          </TopTitleFirstSection>
        </TopSection>
        <BottomSection>
          {selected === 'tradicionais' && (
            <BottomTitle>Tradicionais</BottomTitle>
          )}
          {selected === 'tradicionais' &&
            list.map(item => {
              return <HorizontalCard key={item.id} data={item} />;
            })}
          {/* <BottomSpace /> */}
          {selected === 'doces' && <BottomTitle>Doces</BottomTitle>}
          {selected === 'doces' &&
            list.map(item => {
              return <HorizontalCard key={item.id} data={item} />;
            })}
          {/* <BottomSpace /> */}
          {selected === 'especiais' && <BottomTitle>Especiais</BottomTitle>}
          {selected === 'especiais' &&
            list.map(item => {
              return <HorizontalCard key={item.id} data={item} />;
            })}
        </BottomSection>
      </BottomComponent>
    </HomeContainer>
  );
};

export default Home;
