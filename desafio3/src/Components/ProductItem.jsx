import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  useWindowDimensions,
} from "react-native";
import React from "react";
import Card from "./Card";
import { colors } from "../Global/Colors";

const ProductItem = ({ item, setProductSelected, setCategorySelected }) => {
  const { height, width } = useWindowDimensions();

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
