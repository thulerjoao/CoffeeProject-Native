/* eslint-disable react/react-in-jsx-scope */
import {SafeAreaView} from 'react-native';
// import Loading from './Pages/loading';
// import Home from './Pages/Home';
import Product from './Pages/product';

// const TextNew = styled.Text`
//   background-color: red;
//   font-size: 24px;
// `;

// const styles = StyleSheet.create({
//   container: {
//     color: 'blue',
//   },
// });

const App = () => {
  return (
    <SafeAreaView>
      {/* <Loading /> */}
      {/* <Home /> */}
      <Product />
    </SafeAreaView>
  );
};

export default App;
