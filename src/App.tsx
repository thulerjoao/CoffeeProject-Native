/* eslint-disable react/react-in-jsx-scope */
import {SafeAreaView} from 'react-native';
import Loading from './Pages/loading';

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
      <Loading />
    </SafeAreaView>
  );
};

export default App;
