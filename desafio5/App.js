import { useFonts } from 'expo-font';
import Navigator from './src/Navigation/Navigator';
import { Provider } from 'react-redux';
import store from "./src/Store/store"

export default function App() {

  const [fontsLoaded] = useFonts ({
    "Montserrat": require("./src/Assets/Fonts/Montserrat/MontserratAlternates-Regular.ttf")
  })

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <Navigator/>
    </Provider>
  );
}