import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import CartData from "../Data/cart.json";
import CartItem from "../Components/CartItem";
import { colors } from "../Global/Colors";

const Cart = () => {
  const total = CartData.reduce(
    (acc, currentItem) => (acc += currentItem.price * currentItem.quantity),
    0
  );

  return (
    <View style={styles.container}>
      <View>
        <FlatList
          style={styles.containerDos}
          data={CartData}
          keyExtractor={(cartItem) => cartItem.id}
          renderItem={({ item }) => {
            return <CartItem cartItem={item} />;
          }}
        />
      </View>
      <View style={styles.containerTres}>
        <Pressable>
          <Text>Confirm</Text>
        </Pressable>
        <Text>Total: ${total}</Text>
      </View>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    backgroundColor: colors.turquoise3,
  },
  containerDos: {
    marginTop: 20,
    marginBottom: 88,
  },
  containerTres: {
    position: "absolute",
    marginTop: "130%",
  },
});
