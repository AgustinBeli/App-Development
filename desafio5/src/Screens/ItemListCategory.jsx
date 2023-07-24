import { FlatList, StyleSheet, View } from "react-native";
import React, { useEffect, useState } from "react";
import productsRaw from "../Data/products.json";
import ProductItem from "../Components/ProductItem";
import { colors } from "../Global/Colors";
import Search from "../Components/Search";
import { useSelector } from "react-redux";

const ItemListCategory = ({ navigation }) => {
  const productsSelected = useSelector(
    (state) => state.shopReducer.value.productsSelected
  );

  const [products, setProducts] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [keywordError, setKeywordError] = useState("");

  useEffect(() => {
    const productsFiltered = productsSelected.filter((product) =>
      product.title.toLocaleLowerCase().includes(keyword.toLowerCase())
    );
    setProducts(productsFiltered);
  }, [productsSelected, keyword]);

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
        goBack={() => navigation.goBack()}
      />
      <View style={styles.containerProducts}>
        <FlatList
          style={styles.containerCategory}
          data={products}
          keyExtractor={(product) => product.id}
          renderItem={({ item }) => (
            <ProductItem item={item} navigation={navigation} />
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
    flex: 1,
    backgroundColor: colors.turquoise3,
  },
  containerProducts: {
    alignItems: "center",
  },
});
