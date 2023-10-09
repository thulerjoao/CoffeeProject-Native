/* eslint-disable react/react-in-jsx-scope */
import {
  CardBottom,
  CardBottomImage,
  CardBottomPrice,
  CardBottomText,
  CardBottomTitle,
  CardBottomType,
} from '../styles/horizontalCards.styles';

const VerticalCard = ({data}: any) => {
  return (
    <CardBottom>
      <CardBottomImage source={data.imageSource} />
      <CardBottomType>{data.type}</CardBottomType>
      <CardBottomTitle>{data.title}</CardBottomTitle>
      <CardBottomText>{data.description}</CardBottomText>
      <CardBottomPrice>{data.price}</CardBottomPrice>
    </CardBottom>
  );
};

export default VerticalCard;
