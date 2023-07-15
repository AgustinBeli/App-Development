import { Platform, SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import Header from './src/Components/Header';
import Home from './src/Screens/Home';
import ItemListCategory from './src/Screens/ItemListCategory';
import ItemDetail from "./src/Screens/ItemDetail";
import { useFonts } from 'expo-font';
import { useState } from 'react';

export default function App() {

  const [categorySelected, setCategorySelected] = useState ("")
  const [productSelected, setProductSelected] = useState("")

  const [fontsLoaded] = useFonts ({
    "Montserrat": require("./src/Assets/Fonts/Montserrat/MontserratAlternates-Regular.ttf")
  })

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      {
        categorySelected ?
        <ItemListCategory 
          category={categorySelected} 
          setCategory={setCategorySelected}
          setProductSelected={setProductSelected}
        />:
        productSelected ?
        <ItemDetail
          idSelected={productSelected}
          setProductSelected={setProductSelected}
        /> : 
        <Home
          setCategorySelected={setCategorySelected}
        />
      }
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});