import { useFonts } from 'expo-font';
import Navigator from './src/Navigation/Navigator';

export default function App() {

  const [fontsLoaded] = useFonts ({
    "Montserrat": require("./src/Assets/Fonts/Montserrat/MontserratAlternates-Regular.ttf")
  })

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Navigator/>
  );
}