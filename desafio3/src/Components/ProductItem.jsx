import { Image, StyleSheet, Text } from "react-native";
import React from "react";
import Card from "./Card";

const ProductItem = ({ item }) => {
  return (
    <Card additionalStyle={styles.additionalStyleCard}>
      <Text>{item.title}</Text>
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
  image: {},
  additionalStyleCard: {},
});
