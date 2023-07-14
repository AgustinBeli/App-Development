import { Image, StyleSheet, Text } from "react-native";
import React from "react";
import Card from "./Card";
import { colors } from "../Global/Colors";

const ProductItem = ({ item }) => {
  return (
    <Card additionalStyle={styles.additionalStyleCard}>
      <Text style={styles.textProduct}>{item.title}</Text>
      <Image
        style={styles.image}
        resizeMode="cover"
        source={{ uri: item.images[0] }}
      />
    </Card>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  image: {
    height: 150,
    width: 150,
    borderRadius: 100,
  },
  additionalStyleCard: {
    flexDirection: "row",
    alignItems: "center",
    height: 200,
    justifyContent: "space-between",
    backgroundColor: colors.rose2,
  },
  textProduct: {
    fontSize: 15,
  },
});
