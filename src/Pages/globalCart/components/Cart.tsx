/* eslint-disable react/react-in-jsx-scope */
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {TouchableOpacity} from 'react-native';
import {CartIcon, NumberBaloon, NumberBaloonText} from '../styles/cart.styles';
import Cart02 from '../assets/Cart02.png';
import {useCartReducer} from '../../../redux/reduces/cartReducer/useCartReducer';

const GlobalCart = () => {
  const {navigate} = useNavigation<StackNavigationProp<ParamListBase>>();
  const {cartList} = useCartReducer();

  const totalAmount = cartList.reduce((accumulator, cartItem) => {
    return accumulator + cartItem.amount;
  }, 0);

  return (
    <TouchableOpacity
      onPress={() => {
        navigate('Cart');
      }}>
      <CartIcon source={Cart02} />
      <NumberBaloon>
        <NumberBaloonText>{totalAmount}</NumberBaloonText>
      </NumberBaloon>
    </TouchableOpacity>
  );
};

export default GlobalCart;
