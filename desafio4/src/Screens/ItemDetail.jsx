import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Feather } from "@expo/vector-icons";
import allProducts from "../Data/products.json";
import { colors } from "../Global/Colors";

const ItemDetail = ({ navigation, route }) => {
  const { productId: idSelected } = route.params;
  const [product, setProduct] = useState(null);
  const [orientation, setOrientation] = useState("portrait");
  const { width, height } = useWindowDimensions();

  useEffect(() => {
    if (width > height) setOrientation("landscape");
    else setOrientation("portrait");
  }, [width, height]);

  useEffect(() => {
    const productSelected = allProducts.find(
      (product) => product.id === idSelected
    );
    setProduct(productSelected);
  }, [idSelected]);

  return (
    <View style={styles.itemDetail}>
      <View></View>

      {product ? (
        <View
          style={
            orientation === "portrait"
              ? styles.containerItemDetail
              : styles.containerItemDetailLandscape
          }
        >
          <Image
            source={{ uri: product.images[0] }}
            resizeMode="cover"
            style={styles.image}
          />
          <View
            style={
              orientation === "portrait" ? styles.texts : styles.textsLandscape
            }
          >
            <Text>{product.title}</Text>
            <Text>{product.description}</Text>
            <Text>${product.price}</Text>
            <View style={styles.containerCart}>
              <Pressable style={styles.buttonCart}>
                <Text style={styles.textCart}>Add to cart</Text>
              </Pressable>
            </View>
          </View>
        </View>
      ) : null}
    </View>
  );
};

export default ItemDetail;

const styles = StyleSheet.create({
  itemDetail: {
    flex: 1,
    alignItems: "center",
    backgroundColor: colors.turquoise3,
  },
  containerItemDetail: {
    flexDirection: "column",
    alignItems: "center",
    marginTop: 20,
  },
  containerItemDetailLandscape: {
    flexDirection: "row",
    paddingLeft: 100,
    paddingRight: 100,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 30,
  },
  texts: {
    flexDirection: "column",
    marginTop: 30,
    marginLeft: 10,
    marginRight: 10,
    gap: 15,
  },
  textsLandscape: {
    flexDirection: "column",
    marginLeft: 10,
    marginRight: 10,
  },
  containerCart: {
    alignItems: "center",
    marginTop: 20,
  },
  buttonCart: {
    justifyContent: "center",
    alignItems: "center",
    width: 150,
    borderRadius: 5,
    backgroundColor: colors.rose2,
  },
  textCart: {
    fontSize: 20,
    padding: 5,
  },
});
