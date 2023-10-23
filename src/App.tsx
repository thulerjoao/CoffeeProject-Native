/* eslint-disable react/react-in-jsx-scope */
import {SafeAreaView} from 'react-native';

import {Provider} from 'react-redux';

import Cart from './Pages/cart';
import Finish from './Pages/finish';
import Loading from './Pages/loading';
import Home from './Pages/Home';
import Product from './Pages/product';
import store from './redux/store';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

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
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Loading"
            component={Loading}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
