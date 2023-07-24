import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { colors } from "../Global/Colors";

const CartItem = ({ cartItem }) => {
  return (
    <View style={styles.cartContainer} onPress={() => {}}>
      <View style={styles.cartContainerDos}>
        <Text>{cartItem.title} </Text>
        <Text>{cartItem.brand}</Text>
        <Text>$ {cartItem.price}</Text>
      </View>
      <Feather name="trash" size={30} color="black" />
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  cartContainer: {
    width: 200,
    height: 100,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
    borderWidth: 2,
    backgroundColor: colors.rose,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 10,
    borderRadius: 100,
    padding: 30,
  },
  cartContainerDos: {
    width: 80,
  },
});
