import { StatusBar, StyleSheet, SafeAreaView } from "react-native";
import React from "react";
import Header from "../Components/Header";
import ItemListCategory from "../Screens/ItemListCategory";
import ItemDetail from "../Screens/ItemDetail";
import Home from "../Screens/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={({ route }) => ({
            header: () => {
              return (
                <Header
                  title={
                    route.name === "Categories"
                      ? "Categories"
                      : route.name === "ItemListCategory"
                      ? route.params.category
                      : "ItemDetail"
                  }
                />
              );
            },
          })}
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="ItemListCategory" component={ItemListCategory} />
          <Stack.Screen name="ItemDetail" component={ItemDetail} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default Navigator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
