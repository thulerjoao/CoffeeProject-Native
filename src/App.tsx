/* eslint-disable react/react-in-jsx-scope */
import { Provider } from 'react-redux';

import Cart from './Pages/cart';
import Finish from './Pages/finish';
import Loading from './Pages/loading';
import Home from './Pages/Home';
import Login from './Pages/login';
import Product from './Pages/product';
import store from './redux/store';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CreateAccount from './Pages/CreateAccount';
import Providers from './contexts/index';

// const TextNew = styled.Text`
//   background-color: red;
//   font-size: 24px;
// `;

// const styles = StyleSheet.create({
//   container: {
//     color: 'blue',
//   },
// });

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Providers>
        <Provider store={store}>
          <Stack.Navigator>
            <Stack.Screen name="Loading" component={Loading} options={{ headerShown: false }} />
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
            <Stack.Screen
              name="CreateAccount"
              component={CreateAccount}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
            <Stack.Screen name="Cart" component={Cart} options={{ headerShown: false }} />
            <Stack.Screen name="Product" component={Product} options={{ headerShown: false }} />
            <Stack.Screen name="Finish" component={Finish} options={{ headerShown: false }} />
          </Stack.Navigator>
        </Provider>
      </Providers>
    </NavigationContainer>
  );
};

export default App;

// react-native log-android
