/* eslint-disable react/react-in-jsx-scope */
import {SafeAreaView} from 'react-native';

import {Provider} from 'react-redux';

import Cart from './Pages/cart';
import Finish from './Pages/finish';
import Loading from './Pages/loading';
import Home from './Pages/Home';
import Product from './Pages/product';
import store from './redux/store';

// const TextNew = styled.Text`
//   background-color: red;
//   font-size: 24px;
// `;

// const styles = StyleSheet.create({
//   container: {
//     color: 'blue',
//   },
// });

// const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView>
        {/* <Loading /> */}
        {/* <Home /> */}
        {/* <Product /> */}
        {/* <Finish /> */}
        <Cart />
      </SafeAreaView>
    </Provider>
  );
};

export default App;
