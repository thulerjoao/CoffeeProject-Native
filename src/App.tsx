/* eslint-disable react/react-in-jsx-scope */
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import styled from 'styled-components/native';

const TextNew = styled.Text`
  background-color: red;
  font-size: 24px;
`;

const styles = StyleSheet.create({
  container: {
    color: 'blue',
  },
});

const App = () => {
  return (
    <SafeAreaView>
      <Text style={styles.container}>Coffee App</Text>
      <TextNew>Testeee </TextNew>
    </SafeAreaView>
  );
};

export default App;
