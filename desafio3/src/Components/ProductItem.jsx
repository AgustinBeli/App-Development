import { Image, Pressable, StyleSheet, Text } from "react-native";
import React from "react";
import Card from "./Card";
import { colors } from "../Global/Colors";

const ProductItem = ({ item, setProductSelected, setCategorySelected }) => {
  const onSelect = (id) => {
    setProductSelected(id);
    setCategorySelected("");
  };

  return (
    <Pressable onPress={() => onSelect(item.id)}>
      <Card additionalStyle={styles.additionalStyleCard}>
        <Text style={styles.textProduct}>{item.title}</Text>
        <Image
          style={styles.image}
          resizeMode="cover"
          source={{ uri: item.images[0] }}
        />
      </Card>
    </Pressable>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  image: {
    height: 80,
    width: 80,
    borderRadius: 100,
  },
  additionalStyleCard: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: colors.rose2,
    width: 300,
    height: 110,
  },
  textProduct: {
    width: "65%",
    fontSize: 20,
  },
});
