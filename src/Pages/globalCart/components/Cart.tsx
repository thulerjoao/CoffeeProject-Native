/* eslint-disable react/react-in-jsx-scope */
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native';
import {
  CartIcon,
  GlobalCartContainer,
  NumberBaloon,
  NumberBaloonText,
} from '../styles/cart.styles';
import Cart02 from '../assets/Cart02.png';
import { useCartReducer } from '../../../redux/reduces/cartReducer/useCartReducer';

interface cartProp {
  backTo: string;
  productId?: string;
}

const GlobalCart = ({ backTo, productId }: cartProp) => {
  const { navigate } = useNavigation<StackNavigationProp<ParamListBase>>();
  const { cartList } = useCartReducer();

  const totalAmount = cartList.reduce((accumulator, cartItem) => {
    return accumulator + cartItem.amount;
  }, 0);

  return (
    <GlobalCartContainer
      onPress={() => {
        navigate('Cart', { backTo, productId });
      }}
    >
      <CartIcon source={Cart02} />
      <NumberBaloon>
        <NumberBaloonText>{totalAmount}</NumberBaloonText>
      </NumberBaloon>
    </GlobalCartContainer>
  );
};

export default GlobalCart;
