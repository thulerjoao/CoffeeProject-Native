/* eslint-disable react/react-in-jsx-scope */
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import {
  CardBottom,
  CardBottomImage,
  CardBottomPrice,
  CardBottomText,
  CardBottomTexts,
  CardBottomTitle,
} from '../styles/horizontalCards.styles';

const HorizontalCard = ({data}: any) => {
  const {navigate} = useNavigation<NavigationProp<ParamListBase>>();
  return (
    <CardBottom onPress={() => navigate('Product')}>
      <CardBottomImage source={data.imageSource} />
      <CardBottomTexts>
        <CardBottomTitle>{data.title}</CardBottomTitle>
        <CardBottomText>{data.description}</CardBottomText>
        <CardBottomPrice>{data.price}</CardBottomPrice>
      </CardBottomTexts>
    </CardBottom>
  );
};

export default HorizontalCard;
