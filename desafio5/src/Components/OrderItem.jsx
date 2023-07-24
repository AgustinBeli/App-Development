import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { colors } from "../Global/Colors";

const OrderItem = ({ orderItem }) => {
  const total = orderItem.items.reduce(
    (acc, currentItem) => (acc += currentItem.price * currentItem.quantity),
    0
  );
  return (
    <View style={styles.orderContainer} onPress={() => {}}>
      <View style={styles.orderContainerDos}>
        <Text>{new Date(orderItem.createdAt).toLocaleString()}</Text>
        <Text>${total}</Text>
        <Feather name="search" size={30} color="black" />
      </View>
    </View>
  );
};

export default OrderItem;

const styles = StyleSheet.create({
  orderContainer: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
    borderWidth: 2,
    borderRadius: 100,
    backgroundColor: colors.rose,
    margin: 10,
    padding: 30,
  },
  orderContainerDos: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
