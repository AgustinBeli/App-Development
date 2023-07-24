import {
  StatusBar,
  StyleSheet,
  SafeAreaView,
  View,
  Platform,
} from "react-native";
import React from "react";
import ShopStack from "./Stacks/ShopStack";
import CartStack from "./Stacks/CartStack";
import OrderStack from "./Stacks/OrderStack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { colors } from "../Global/Colors";
import { Feather } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const Navigator = () => {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: styles.tabBar,
          }}
        >
          <Tab.Screen
            name="Shop"
            component={ShopStack}
            options={{
              tabBarIcon: ({ focused }) => {
                return (
                  <View>
                    <Feather
                      name="shopping-bag"
                      size={30}
                      color={focused ? colors.rose : colors.black}
                    />
                  </View>
                );
              },
            }}
          />
          <Tab.Screen
            name="Cart"
            component={CartStack}
            options={{
              tabBarIcon: ({ focused }) => {
                return (
                  <View>
                    <Feather
                      name="shopping-cart"
                      size={30}
                      color={focused ? colors.rose : colors.black}
                    />
                  </View>
                );
              },
            }}
          />
          <Tab.Screen
            name="Order"
            component={OrderStack}
            options={{
              tabBarIcon: ({ focused }) => {
                return (
                  <View>
                    <Feather
                      name="clipboard"
                      size={30}
                      color={focused ? colors.rose : colors.black}
                    />
                  </View>
                );
              },
            }}
          />
        </Tab.Navigator>
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
  tabBar: {
    backgroundColor: colors.turquoise,
  },
});
