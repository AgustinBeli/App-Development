import { StyleSheet, Text, View } from 'react-native';
import Header from './src/Components/HEader';

export default function App() {
  return (
    <View style = {styles.container}>
      <Header/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
