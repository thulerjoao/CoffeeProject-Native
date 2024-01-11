/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import { Dimensions, StatusBar, TouchableOpacity } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {
  BottomComponent,
  BottomSection,
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
import { useEffect, useState } from 'react';
import { CoffeeItem } from '../../../globalTypes';
import { useProductsReducer } from '../../../redux/reduces/productsReducer/useProductsReducer';
import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';
import { useCartReducer } from '../../../redux/reduces/cartReducer/useCartReducer';
import GlobalCart from '../../globalCart';
import { useAuth } from '../../../contexts/auth';

const Home: React.FC = () => {
  const { logout } = useAuth();
  const { productList } = useProductsReducer();
  const { cartList } = useCartReducer();
  const { navigate } = useNavigation<NavigationProp<ParamListBase>>();
  const [selected, setSelected] = useState<string>('tradicionais');
  const [filteredList, setFilteredList] = useState<CoffeeItem[]>(productList);
  const [search, setSearch] = useState<string>('');
  const backTo = 'Home';

  type Props = {
    item: CoffeeItem;
    index: number;
  };

  const renderItem = ({ item, index }: Props) => {
    return <VerticalCard key={index} data={item} />;
  };

  const screenWidth = Dimensions.get('window').width;

  const handleSelectByType = (type: string) => {
    return productList
      .filter((element) => element.type === type)
      .map((item) => {
        return <HorizontalCard key={item.id} data={item} />;
      });
  };

  const handleSearch = () => {
    setFilteredList(
      productList.filter((element) => element.title.toUpperCase().includes(search.toUpperCase())),
    );
  };
  useEffect(() => {
    handleSearch();
  }, [search]);

  return (
    <HomeContainer>
      <StatusBar backgroundColor="#1407072f" barStyle="light-content" translucent />
      <TopComponent>
        <Location >
          <TouchableOpacity onPress={()=>logout()}>
            <LocationIcon source={Icon} />
          </TouchableOpacity>
          <LocationText>Sair</LocationText>
          {cartList.length === 0 ? (
            <TouchableOpacity
              onPress={() => {
                navigate('Cart', { backTo });
              }}
            >
              <LocationIcon source={Cart} />
            </TouchableOpacity>
          ) : (
            <GlobalCart backTo={backTo} />
          )}
        </Location>
        <Search>
          <SearchText>Encontre o café perfeito para qualquer hora do dia</SearchText>
          <SearchBarContainer>
            <SearchBarIcon source={Glass} />
            <SearchBarInput
              placeholder={'Pesquisar'}
              placeholderTextColor={'#8d8585'}
              onChange={(event: any) => setSearch(event.nativeEvent.text)}
              value={search}
            />
          </SearchBarContainer>
          <CoffeeImage source={Coffee} />
        </Search>
      </TopComponent>
      <HorizontalList>
        <Carousel
          autoplay={false}
          loop={true}
          data={filteredList}
          renderItem={renderItem}
          sliderWidth={screenWidth} // Largura do carrossel
          itemWidth={215} // Largura de cada item do carrossel
          layout={'default'} // Tipo de layout (pode ser 'default', 'stack', 'tinder', etc.)
          layoutCardOffset={0} // Espaçamento entre os cartões
          horizontal // Para um carrossel horizontal
          showsHorizontalScrollIndicator={false} // Ocultar a barra de rolagem horizontal
          activeSlideAlignment={'center'}
        />
      </HorizontalList>
      <BottomComponent>
        <TopSection>
          <TopTitleText>Nossos cafés</TopTitleText>
          <TopTitleFirstSection>
            <TypeButtons
              selected={selected === 'tradicionais' && true}
              onPress={() => setSelected('tradicionais')}
            >
              <TypeButtonsText selected={selected === 'tradicionais' && true}>
                Tradicionais
              </TypeButtonsText>
            </TypeButtons>
            <TypeButtons
              selected={selected === 'doces' && true}
              onPress={() => setSelected('doces')}
            >
              <TypeButtonsText selected={selected === 'doces' && true}>Doces</TypeButtonsText>
            </TypeButtons>
            <TypeButtons
              selected={selected === 'especiais' && true}
              onPress={() => setSelected('especiais')}
            >
              <TypeButtonsText selected={selected === 'especiais' && true}>
                Especiais
              </TypeButtonsText>
            </TypeButtons>
          </TopTitleFirstSection>
        </TopSection>
        <BottomSection>
          {selected === 'tradicionais' && <BottomTitle>Tradicionais</BottomTitle>}
          {selected === 'tradicionais' && handleSelectByType('Tradicional')}
          {/* <BottomSpace /> */}
          {selected === 'doces' && <BottomTitle>Doces</BottomTitle>}
          {selected === 'doces' && productList && handleSelectByType('Doces')}
          {/* <BottomSpace /> */}
          {selected === 'especiais' && <BottomTitle>Especiais</BottomTitle>}
          {selected === 'especiais' && handleSelectByType('Especiais')}
        </BottomSection>
      </BottomComponent>
    </HomeContainer>
  );
};

export default Home;
