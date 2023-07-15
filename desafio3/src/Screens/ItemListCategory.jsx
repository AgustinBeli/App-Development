import { FlatList, StyleSheet, View } from "react-native";
import React, { useEffect, useState } from "react";
import productsRaw from "../Data/products.json";
import ProductItem from "../Components/ProductItem";
import { colors } from "../Global/Colors";
import Search from "../Components/Search";

const ItemListCategory = ({ category, setCategory, setProductSelected }) => {
  const [categorySelected, setCategorySelected] = useState(category);
  const [products, setProducts] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [keywordError, setKeywordError] = useState("");

  useEffect(() => {
    const productsFiltered = productsRaw.filter(
      (product) =>
        product.category === categorySelected &&
        product.title.toLocaleLowerCase().includes(keyword.toLowerCase())
    );
    setProducts(productsFiltered);
  }, [categorySelected, keyword]);

  const onSearch = (input) => {
    const expression = /^[a-zA-Z0-9\ ]*$/;
    const evaluation = expression.test(input);

    if (evaluation) {
      setKeyword(input);
      setKeywordError("");
    } else {
      setKeywordError("Sólo letras y números");
    }
  };

  return (
    <View style={styles.containerSearch}>
      <Search
        onSearch={onSearch}
        error={keywordError}
        goBack={() => setCategory("")}
      />
      <View style={styles.containerProducts}>
        <FlatList
          style={styles.containerCategory}
          data={products}
          keyExtractor={(product) => product.id}
          renderItem={({ item }) => (
            <ProductItem
              item={item}
              setProductSelected={setProductSelected}
              setCategorySelected={setCategory}
            />
          )}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default ItemListCategory;

const styles = StyleSheet.create({
  containerSearch: {
    height: "90%",
    backgroundColor: colors.turquoise3,
  },
  containerProducts: {
    alignItems: "center",
  },
});
