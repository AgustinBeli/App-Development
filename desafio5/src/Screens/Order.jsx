import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import OrderData from "../Data/orders.json";
import OrderItem from "../Components/OrderItem";
import { colors } from "../Global/Colors";

const Order = () => {
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.containerDos}
        data={OrderData}
        keyExtractor={(orderItem) => orderItem.id}
        renderItem={({ item }) => {
          return <OrderItem orderItem={item} />;
        }}
      />
    </View>
  );
};

export default Order;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: colors.turquoise3,
  },
  containerDos: {
    marginTop: 20,
    marginBottom: 88,
  },
});
