/* eslint-disable react/react-in-jsx-scope */
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import {
  CardTop,
  CardTopImage,
  CardTopPrice,
  CardTopText,
  CardTopTitle,
  CardTopType,
} from '../styles/verticalCards.styles';

const VerticalCard = ({data}: any) => {
  const {navigate} = useNavigation<NavigationProp<ParamListBase>>();
  const productId = data.id;
  return (
    <CardTop onPress={() => navigate('Product', {productId})}>
      <CardTopImage source={data.imageSource} />
      <CardTopType>{data.type}</CardTopType>
      <CardTopTitle>{data.title}</CardTopTitle>
      <CardTopText>{data.description}</CardTopText>
      <CardTopPrice>{data.price}</CardTopPrice>
    </CardTop>
  );
};

export default VerticalCard;
