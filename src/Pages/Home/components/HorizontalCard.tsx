/* eslint-disable react/react-in-jsx-scope */
import {
  CardBottom,
  CardBottomImage,
  CardBottomPrice,
  CardBottomText,
  CardBottomTexts,
  CardBottomTitle,
} from '../styles/horizontalCards.styles';

const HorizontalCard = ({data}: any) => {
  return (
    <CardBottom>
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
